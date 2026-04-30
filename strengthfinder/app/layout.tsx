import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Flourish — Discover What You're Built For",
  description:
    "A strength-based tool that maps your character strengths to careers and hobbies, helping you find direction during life's transitions.",
  openGraph: {
    title: "Flourish — Discover What You're Built For",
    description:
      "Map your strengths to careers and hobbies. Built for people in transition.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
