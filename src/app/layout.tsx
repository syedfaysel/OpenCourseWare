import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Opencourseware | ocwX",
  description: "Learn anything, anytime, anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-screen-xl`}>
        <Navbar />
        <div className="min_height">
          {children}
        </div>
        
        <div className="text-center mb-3 text-gray-400 text-sm">
          <p className="text-gray-400">&copy;All rights reserved <br /> <span className="text-blue-400">Syed Faysel Ahammad Rajo</span> </p>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
