import Link from "next/link";
// import styles from "./page.module.css";
import { getServerSession } from "next-auth";

type Repository = {
  id: number;
  name: string;
  full_name: string;
};

type Time = {
  datetime: string;
};

async function getTime(): Promise<Time> {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Chicago",
    {
      next: {
        revalidate: 5,
      },
    }
  );
  return res.json();
}

async function getRepo(): Promise<Repository> {
  const res = await fetch("https://api.github.com/repos/vercel/next.js", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Page() {
  const session = await getServerSession();
  const [data, time] = await Promise.all([getRepo(), getTime()]);
  return (
    <>
      getServerSession result{" "}
      {session?.user?.name ? (
        <div>
          {session?.user?.name}
          <div>
            <h1>{data.full_name}</h1>
            <p>Updated at: {time.datetime}</p>
            <Link href="/about">About</Link>
          </div>
        </div>
      ) : (
        <div>Not logged in</div>
      )}
    </>
  );
}
