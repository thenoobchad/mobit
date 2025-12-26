import type { Metadata } from "next";

import { Header } from "@/components/header";

import "../globals.css";

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
    <>
      <div className={`font-dansans antialiased`}>
        <Header />

        {children}
      </div>
    </>
  );
}
