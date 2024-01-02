import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { createSupabaseServerClient } from "./utils/supabase.server";
import stylesheet from "~/tailwind.css";
import { Landing } from '~/components/Landing';
import { json } from "@remix-run/node";
import { createBrowserClient } from "@supabase/auth-helpers-remix";
import { useEffect, useState } from "react";
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

//Supabase login credentials with login process using the supabase auth process (integrated on supabase)
/* export const loader = async ({ request }: LoaderFunctionArgs) => {
  const env = {
    SUPABASE_URL: process.env.SUPABASE_URL!,
    SUPABASE_PUBLIC_KEY: process.env.SUPABASE_PUBLIC_KEY!,
  };

  const response = new Response();

  const supabase = createSupabaseServerClient({ request, response });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return json({ env, session }, { headers: response.headers });
}; */

// App export from root
export default function App() {
  /* const { env, session } = useLoaderData<typeof loader>();
  const { revalidate } = useRevalidator();

  // supabase state
  const [supabase] = useState(() =>
    createBrowserClient(env.SUPABASE_URL, env.SUPABASE_PUBLIC_KEY)
  );

  // token to retain access to back end
  const serverAccessToken = session?.access_token;

  // check for change in state and update token
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== serverAccessToken) {
        revalidate();
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [supabase.auth, serverAccessToken, revalidate]); */
  
  // return the component
  
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
