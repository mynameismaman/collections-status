import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Collection Muslim Status",
  description: "Images for share",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen justify-between">
          <header><NavBar /></header>
          <main>{children}</main>
          <footer>
      <div className="text-center text-sm rounded border-2 p-2 border-slate-200 bg-slate-100 justify-center item-center">
        <p className="text-xs">Bismillah</p>
        <p>&copy; 2024 samaun.my.id</p>
      </div>

          </footer>
        </div>
      </body>
    </html>
  );
}
