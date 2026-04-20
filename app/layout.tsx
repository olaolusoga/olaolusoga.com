import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ola Olusoga — Technology Executive",
  description:
    "Ola Olusoga is a technology executive, engineering leader, and strategic advisor helping companies build world-class products and engineering cultures.",
  openGraph: {
    title: "Ola Olusoga — Technology Executive",
    description:
      "Technology executive, engineering leader, and strategic advisor.",
    url: "https://olaolusoga.com",
    siteName: "Ola Olusoga",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ola Olusoga — Technology Executive",
    description:
      "Technology executive, engineering leader, and strategic advisor.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-[#f0f0f0]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
