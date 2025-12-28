import type { Metadata } from "next";

import { Header } from "@/components/header";

import "../globals.css";
import { Notifications } from "@/components/notifications";
import { Footer } from "@/components/footer";

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
      <div className={`font-dansans antialiased `}>
        <Header />

        {children}
        <Footer/>
      </div>
    </>
  );
}
