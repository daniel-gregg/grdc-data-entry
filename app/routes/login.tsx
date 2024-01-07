import { type ActionFunction, redirect } from '@remix-run/cloudflare';
import { Form } from '@remix-run/react';
import { Navbar } from '~/components/Navbar';
import { sendEmail } from '~/components/send';

export const action: ActionFunction = async ({ context }) => {
    console.log(context.env);
    await sendEmail(context.env?.RESEND_API_KEY as string);
    return redirect('/authenticateLogin');
};

export default function Login() {
    return (
        <div className="bg-[#1d6146] py-6 sm:py-6">
            <Navbar />
            <Form method="post">
                <button className="text-white bg-[#1d6146] hover:ring-4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Send email
                </button>
            </Form>
        </div>
    );
}
