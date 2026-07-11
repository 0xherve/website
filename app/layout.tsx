import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { DM_Sans } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { GeistPixelLine } from "geist/font/pixel";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "0xherve | Herve Rwigema",
  description: "Curious tinkerer",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${GeistPixelLine.variable} ${GeistMono.variable}`}>
      <body className="bg-background text-foreground antialiased">{children}</body>
      <Analytics />
    </html>
  );
}
