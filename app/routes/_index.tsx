import type { MetaFunction } from "@remix-run/node";

import { Wrapper } from "~/lib/wrapper";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Wrapper>
      <p>Some content</p>
    </Wrapper>
  );
}
