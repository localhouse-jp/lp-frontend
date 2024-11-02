import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Metadata } from "next";
import { Inter, Open_Sans } from 'next/font/google';
// import localFont from "next/font/local";
import { ReactNode } from "react";
import "./globals.css";
import {ThemeProvider} from "@/components/ThemeProvider";
import "@radix-ui/themes/styles.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

// export const lineSeed = localFont({
//   src: "./fonts/LINESeedJP_OTF_Rg.woff2",
//   variable: "--font-line-seed",
//   weight: "100 900",
// });
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
        className={`${inter.className} ${openSans.className} antialiased`}
      >
        <ThemeProvider>
          <Header/>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
