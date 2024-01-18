import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "@radix-ui/themes/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tradingview",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}