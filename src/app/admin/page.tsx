"use client";
import React from "react";
// import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

export default function Page() {
  // const router = useRouter();
  // const handleClick = () => {
  //   alert("I have been clicked");
  //   router.replace(
  //     `https://${process.env.NEXTAUTH_URL}/api/auth/callback/google`
  //   );
  // await router.push(
  //   `https://${process.env.NEXTAUTH_URL}/api/auth/callback/google`
  // );
  // };
  return (
    <div>
      Admin page
      <button
        type="button"
        onClick={() => {
          signIn("google", {
            callbackUrl: "/about",
          });
        }}
      >
        Admin Login
      </button>
    </div>
  );
}
