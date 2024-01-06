import { json } from '@remix-run/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const _from = 'daniel.gregg@heuris.com.au';

export type emailBody = {
    to: string | string[];
    subject: string;
    html: string;
    text?: string;
};

const testEmailBody = {
    to: ['spaniel.boone@gmail.com'],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
};

export async function sendEmail(_options?: emailBody) {
    const { data, error } = await resend.emails.send({
        from: 'daniel.gregg@heuris.com.au',
        to: testEmailBody.to,
        subject: testEmailBody.subject,
        html: testEmailBody.html,
    });

    if (error) {
        return json({ error }, 404);
    }

    return json(data, 200);
}
