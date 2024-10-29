import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import localFont from "next/font/local";
import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const lineSeed = localFont({
  src: "./fonts/LINESeedJP_OTF_Rg.woff2",
  variable: "--font-line-seed",
  weight: "100 900",
});
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "LOCALHOUSE",
  description: "自由と創造性を追求する、学生ITエンジニアのためのオープンコミュニティ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.className} antialiased`}
      >
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
