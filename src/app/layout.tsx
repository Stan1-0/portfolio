import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/react";
import { MorphBackground } from "@/components/MorphBackground";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });
const syne = Syne({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Stan's Portfolio",
  description: "Portfolio showcasing my achievements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(outfit.variable, syne.variable, "bg-transparent text-white antialiased font-sans relative z-0")}>
        <MorphBackground />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
