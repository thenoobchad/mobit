import type { Metadata } from "next";



import { Header } from "@/components/header";
import { Providers } from "@/components/providers";



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
   
      <html lang="en">
      <body className={`antialiased font-dansans`}>
        <Providers>
            <Header />

          {children}
        </Providers>
          
        </body>
      </html>
 
  );
}