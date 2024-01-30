import { json } from '@remix-run/node';
import {Navbar} from '~/components/Navbar'; 
import { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData } from '@remix-run/react'
import { db } from '~/utils/db.server'

import { authenticator } from '~/utils/auth/auth.server';
import { getSession, commitSession } from '~/utils/auth/auth-session.server'

export async function loader({ request }: LoaderFunctionArgs) {
    await authenticator.isAuthenticated(request, {
      successRedirect: '/admin',
    })
  
    const cookie = await getSession(request.headers.get('cookie'))
    const authEmail = cookie.get('auth:email')
    const authError = cookie.get(authenticator.sessionErrorKey)
  
    // Commit session to clear any `flash` error message.
    return json({ authEmail, authError } as const, {
      headers: {
        'set-cookie': await commitSession(cookie),
      },
    })
  }

export async function action({ request }: ActionFunctionArgs) {
    const url = new URL(request.url)
    const currentPath = url.pathname //"/auth/login"

    const req = request.clone()

    //Get the email string from the formData
    const body = await request.formData();
    const emailString = JSON.stringify((body.get("email")))

    //Check if the email is included in the DB already - THIS IS NOT WORKING BUT findMany does?!?!?!?
    const emailCheck = await db.user.findFirst({
      where: { email: JSON.parse(emailString) },
    })
    

    //If so, continue through to TOTP process
    if(!emailCheck){
      console.log("Email is not in DB")
      //If not, return a failure
      throw new Error("Whoops! this user doesn't exist. If you think it should please contact the administrator")
    } 

    //else go to authenticator
    await authenticator.authenticate('TOTP', req, {
      // The `successRedirect` route will be used to verify the OTP code.
      // This could be the current pathname or any other route that renders the verification form.
      successRedirect: '/auth/verify',
  
      // The `failureRedirect` route will be used to render any possible error.
      // If not provided, ErrorBoundary will be rendered instead.
      failureRedirect: currentPath,
    })

  }

  
export default function Login() {
    const { authEmail, authError } = useLoaderData<typeof loader>()
  
    return (
        <div className="bg-[#1d6146] py-6 sm:py-6">
            <Navbar />
            {/* Content */}
            <div className="mx-auto flex h-full w-full max-w-[350px] flex-col items-center justify-center gap-6">
                {/* Email Form */}
                <div className="flex w-full flex-col items-center gap-6">
                <div className="flex w-full flex-col items-center justify-center gap-2">
                    <div className="flex flex-col items-center gap-1">
                    <h1 className="text-center text-2xl font-semibold tracking-tight">
                        Welcome back
                    </h1>
                    <p className="text-center text-base font-normal text-gray-600">
                        Log in or sign in to your account
                    </p>
                    </div>
                </div>

                <Form method="POST" autoComplete="off" className="flex w-full flex-col gap-2">
                    <div className="flex flex-col">
                    <label htmlFor="email" className="sr-only">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        defaultValue={authEmail ? authEmail : ''}
                        placeholder="name@example.com"
                        className="h-11 rounded-md border-2 border-gray-200 bg-transparent px-4 text-base font-semibold placeholder:font-normal placeholder:text-gray-400"
                        required
                    />
                    </div>
                    <button
                    type="submit"
                    className="clickable flex h-10 items-center justify-center rounded-md bg-gray-800">
                    <span className="text-sm font-semibold text-white">
                        Continue with Email
                    </span>
                    </button>
                </Form>
                </div>

                {/* Errors Handling. */}
                {!authEmail && authError && (
                <span className="font-semibold text-red-400">{authError.message}</span>
                )}

                <p className="text-center text-xs leading-relaxed text-gray-400">
                By continuing, you agree to our{' '}
                <span className="clickable underline">Terms of Service</span>
                </p>
            </div>
        </div>
    )
}
