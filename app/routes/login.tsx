import { json } from '@remix-run/node';
import { Resend } from 'resend';
import {Navbar} from '~/components/Navbar'; 
import { send } from '~/components/send';
import { type ActionFunction, redirect } from "@remix-run/node";
import { Form } from '@remix-run/react';

export let action: ActionFunction = async ({ request }) => {
    await send()
    return redirect("/authenticateLogin")
  }

export default function login() {
    return (
        <div className="bg-[#1d6146] py-6 sm:py-6">
            <Navbar />
            <Form method="post">
            <button className="text-white bg-[#1d6146] hover:ring-4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Send email
            </button>
            </Form>
        </div>
    )
}
