import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import stylesheet from "~/tailwind.css";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRevalidator,
} from "@remix-run/react";


//Tailwind css links - ensure the tailwind.css file is included in the app folder
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

// App export from root
export default function App() {
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet /* context={{ supabase, session }} */ />
        {/* <Landing />   need to have this so it directs through _INDEX not loaded here... */}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
