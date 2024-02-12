import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "McMaster's Wedding",
  description: "The wedding of Timothy McMasters and Chloe Wampler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={inter.className}>
      <Providers>
        {children}
      </Providers>
        </body>
    </html>
  );
}
