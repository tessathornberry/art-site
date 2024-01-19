"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session?.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

export default function NavMenu() {
  const pathname = usePathname();
  return (
    <div>
      <AuthButton />
      <hr />
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/protected">
          <li>Protected Route</li>
        </Link>
        <Link href="/serverAction">
          <li>Server Action</li>
        </Link>
        <Link href="/apiFromClient">
          <li>API From Client</li>
        </Link>
        <Link href="/apiFromServer">
          <li>API From Server</li>
        </Link>
      </ul>
    </div>
  );
}
