import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Hero } from "~/components";

import { Wrapper } from "~/lib/wrapper";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix | @UiReact" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const links: LinksFunction = () => {
  return [
     { rel: "preconnect", href: "https://fonts.googleapis.com", crossOrigin: "anonymous"},
     { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous"},
     { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sen:wght@400..800&display=swap" }
  ]
}

export default function Index() {
  return (
    <Wrapper>
      <Hero />
    </Wrapper>
  );
}
