import type { LoaderFunctionArgs } from '@remix-run/node'
import { authenticator } from '~/utils/auth/auth.server'

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const currentPath = url.pathname

  await authenticator.authenticate('TOTP', request, {
    successRedirect: '/admin',
    failureRedirect: '/login',
  })
}
