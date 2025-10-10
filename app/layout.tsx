import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import RecoilBoundary from "./providers/RecoilBoundary";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Bytebank",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body>
        <RecoilBoundary>{children}</RecoilBoundary>
      </body>
    </html>
  );
}
