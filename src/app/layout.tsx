import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Header } from "@/components/header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mobuit Inc",
  description: "Cryptocurrency Investment platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>"
      ></link>
      <body className={`antialiased`}>
        <Header />

        <div className="h-[3333px]">{children}</div>
      </body>
    </html>
  );
}
