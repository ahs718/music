import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import Sidebar from "@/components/sidebar";

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
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
