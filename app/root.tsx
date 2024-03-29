import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { GenericErrorBoundary } from './components/misc/error-boundary'

//Tailwind css links - ensure the tailwind.css file is included in the app folder
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];


function Document({
  children,
  lang = 'en',
}: {
  children: React.ReactNode
  lang?: string
}) {
  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}


export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

export function ErrorBoundary() {
  /**
   * NOTE: `useLoaderData` is not available in the Error Boundary.
   * The loader likely failed to run so we have to do the best we can.
   */
  return (
    <Document>
      <GenericErrorBoundary />
    </Document>
  )
}