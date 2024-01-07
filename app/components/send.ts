import { json } from '@remix-run/cloudflare';
import { Resend } from 'resend';

const from = 'webcontact@heuris.com.au';

export type emailBody = {
    to: string | string[];
    subject: string;
    html: string;
    text?: string;
};

const testEmailBody = {
    to: ['jackmcpickle@gmail.com'],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
};

export async function sendEmail(apiKey: string, _options?: emailBody) {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
        from: from,
        to: testEmailBody.to,
        subject: testEmailBody.subject,
        html: testEmailBody.html,
    });

    if (error) {
        return json({ error }, 404);
    }

    return json(data, 200);
}
