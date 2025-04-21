import type { Metadata } from "next";
import { Itim } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Providers from "./Providers";

// Use Itim font
const itim = Itim({
  subsets: ["thai"],
  weight: "400",
  variable: "--font-itim",
});

export const metadata: Metadata = {
  title: "ฝึกทำข้อสอบใบประกอบวิชาชีพกายภาพบำบัด",
  description: "รวมข้อสอบใบประกอบวิชาชีพกายภาพบำบัด",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
    lang="en"
    suppressHydrationWarning
    >
      <body className={`${itim.variable} antialiased`}>
        <Providers>
          <Navbar />
          <main className="container">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
