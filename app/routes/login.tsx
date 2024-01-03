import { json } from '@remix-run/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async () => {
    const { data, error } = await resend.emails.send({
        from: 'Heuris <daniel.gregg@heuris.com.au>',
        to: ['spaniel.boone@gmail.com'],
        subject: 'Hello World',
        html: '<strong>It Works!</strong>',
    });

    if (error) {
        return json({ error }, 404);
    }

    return json(data, 200);
}

export default function login() {
    return (
        <div className="bg-[#1d6146] py-6 sm:py-6">
            <span>LOGIN PAGE</span>
            <button 
                className="text-white bg-[#1d6146] hover:ring-4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={sendEmail()}
                >
                Send email
            </button>
        </div>
    )
}
