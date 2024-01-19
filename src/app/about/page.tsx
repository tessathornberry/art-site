import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

// Output: <title>About | Acme</title>
export default function Page() {
  return <div>Hello, About</div>;
}
