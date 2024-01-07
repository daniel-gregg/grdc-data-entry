import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const from = "daniel.gregg@heuris.com.au"

export type SendEmailOptions = {
    to: string | string[]
    subject: string
    html: string
    text?: string
  }

export async function sendEmail(options: SendEmailOptions) {
    // For development mode, Resend will only accept emails from this domain.
    const from = 'daniel.gregg@heuris.com.au'
    const email = { from, ...options }
  
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email),
    })
  
    const data = await response.json()
  
    if (response.ok) {
      return { status: 'success', data} as const
    } else {
      console.log(data)
      throw new Error('Unable to send email.')
    }
  }

type AuthEmailOptions = {
  email: string
  code: string
  magicLink?: string | null
}

export const sendAuthEmail = async ({ email, code, magicLink }: AuthEmailOptions) => {
  const subject = 'Your verification code for Remix Auth TOTP'
  const html = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      </head>
      <body style="max-width: 50%; margin: 0 auto; text-align: center;">
        <h1>Code: ${code}</h1>
        ${
          magicLink &&
          `<p style="font-size: 16px;">
            Alternatively, you can click the Magic Link URL.
            <br />
            <a href="${magicLink}">${magicLink}</a>
          </p>`
        }
      </body>
    </html>
  `

  await sendEmail({
    to: email,
    subject,
    html,
  })
}