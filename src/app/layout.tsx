import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import BGMPlayer from "@/components/BGMPlayer";

// Site details here

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://aanuoluwapo-idowu.vercel.app"),
  title: "Aanu & Seyi: A Journey to Forever",
  description: "A tale of two hearts becoming one.",
  openGraph: {
    type: "website",
    description: "A tale of two hearts becoming one.",
    title: "Aanu & Seyi: A Journey to Forever",
    url: "https://aanuoluwapo-idowu.vercel.app",
    images: ["https://imgur.com/a/jSTu3sE"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative w-screen h-screen">
          <BGMPlayer />

          <main className="w-full h-full">{children}</main>

          <div className="absolute top-0 left-0 z-10 w-full"></div>
        </div>
      </body>
    </html>
  );
}
