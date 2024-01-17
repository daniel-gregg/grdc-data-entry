import type { LoaderFunctionArgs, ActionFunctionArgs } from '@remix-run/node'

import { Form, useLoaderData } from '@remix-run/react'
import { redirect, json } from '@remix-run/node'

import { db } from '~/utils/db.server'
import { authenticator } from '~/utils/auth/auth.server'
import { getSession, destroySession } from '~/utils/auth/auth-session.server'
import { useDoubleCheck } from '~/utils/hooks/use-double-check'

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await authenticator.isAuthenticated(request, {
    failureRedirect: '/auth/login',
  })

  const user = await db.user.findUnique({ where: { id: session.id } })
  if (!user) return redirect('/auth/login')

  return json({ user } as const)
}

export async function action({ request }: ActionFunctionArgs) {
  const session = await authenticator.isAuthenticated(request, {
    failureRedirect: '/auth/login',
  })

  const user = await db.user.findUnique({ where: { id: session.id } })
  if (!user) return redirect('/auth/login')

  // Delete user.
  await db.user.delete({ where: { id: session.id } })

  // Destroy session.
  return redirect('/', {
    headers: {
      'set-cookie': await destroySession(await getSession(request.headers.get('cookie'))),
    },
  })
}


export default function AdminIndex() {
  const { user } = useLoaderData<typeof loader>()
  const { doubleCheck, getButtonProps } = useDoubleCheck()

  return (
    <div className="mx-auto flex h-screen w-screen max-w-7xl flex-col px-6">
      {/* Background. */}
      <div className="blobs opacity-10" />

      {/* Content */}
      <div className="mx-auto flex h-full w-full max-w-[280px] flex-col items-center justify-center gap-6">
        {/* Account Info */}
        <div className="flex flex-col items-center gap-2">
          <span className="h-24 w-24 text-8xl transition duration-200 hover:-translate-y-1">
            🥳
          </span>

          <div className="flex flex-col items-center gap-1">
            <h1 className="text-center text-2xl font-semibold tracking-tight">
              My account
            </h1>
            <p className="flex items-center whitespace-nowrap text-center text-base font-semibold text-gray-400">
              {user.email}
            </p>
          </div>
        </div>

        {/* Account Actions */}
        <div className="flex w-full flex-col gap-2">
          {/* Delete Account */}
          <Form method="POST" autoComplete="off">
            <button
              {...getButtonProps({
                type: 'submit',
                name: 'intent',
                value: 'disable',
                className: `clickable flex h-10 w-full items-center justify-center rounded-md font-semibold bg-gray-800 text-white ${
                  doubleCheck && '!bg-red-500'
                }`,
              })}>
              {doubleCheck ? 'Are you sure?' : 'Remove account'}
            </button>
          </Form>

          {/* Log out */}
          <Form method="POST" action="/auth/logout" autoComplete="off">
            <button
              type="submit"
              className="clickable flex h-10 w-full items-center justify-center rounded-md bg-gray-200 font-semibold text-black">
              Log out
            </button>
          </Form>
        </div>
      </div>

    </div>
  )
}
