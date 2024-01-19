import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionProvider from "./components/SessionProvider";
import "./globals.css";
import { getServerSession } from "next-auth";
import NavMenu from "./components/NavMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Art of Tessa THornberry",
  description: "The artworks of Tessa THornberry",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>This is the Layout</h1>
        <SessionProvider session={session}>
          <main>
            <NavMenu />
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
