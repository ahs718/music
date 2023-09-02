import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import getSongsByUserId from "@/actions/getSongByUserId";
import Sidebar from "@/components/sidebar";
import ModalProvider from "@/providers/modal-provider";
import SupabaseProvider from "@/providers/supabase-provider";
import ToasterProvider from "@/providers/toaster-provider";
import UserProvider from "@/providers/user-provider";

import Player from "@/components/player";
import "./globals.css";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "music.",
  description: "Never forget 9/13",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserId();
  
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={userSongs}>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
