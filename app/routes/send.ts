import { json } from '@remix-run/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const loader = async () => {
    const { data, error } = await resend.emails.send({
        from: 'Heuris <daniel.gregg@heuris.com.au',
        to: ['spaniel.boone@gmail.com'],
        subject: 'Hello World',
        html: '<strong>It Works!</strong>',
    });

    if (error) {
        return json({ error }, 404);
    }

    return json(data, 200);
}