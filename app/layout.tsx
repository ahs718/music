import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import Sidebar from "@/components/sidebar";
import ModalProvider from "@/providers/modal-provider";
import SupabaseProvider from "@/providers/supabase-provider";
import ToasterProvider from "@/providers/toaster-provider";
import UserProvider from "@/providers/user-provider";

import "./globals.css";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "music.",
  description: "Never forget 9/13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
