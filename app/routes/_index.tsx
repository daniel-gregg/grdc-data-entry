import type { MetaFunction } from "@remix-run/node";
import { Landing } from '~/components/Landing';
import { Link } from "@remix-run/react";


export const meta: MetaFunction = () => {
  return [
    { title: "Affine" },
    { name: "description", content: "Welcome to Affine!" },
  ];
};

export default function Index() {
  /* const { session } = useOutletContext<OutletContext>(); */

  return (
    <div>
      <Landing />
      {/* {!session?.user && <Landing />} */}
    </div>
  );
}
