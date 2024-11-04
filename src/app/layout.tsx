import { inter } from "@/common/util/font";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "LOCALHOUSE - ローカルハウス",
  description: "自由と創造性を追求する、学生ITエンジニアのためのオープンコミュニティ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="LOCALHOUSE - ローカルハウス" />
      <meta name="description" content="自由と創造性を追求する、学生ITエンジニアのためのオープンコミュニティ" />
      <meta property="og:url" content="https://localhouse.jp" />
      {/* いつか追加 */}
      <meta property="og:image" content="https://localhouse.jp/ogp.png" />
      <meta property="og:site_title" content="LOCALHOUSE" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <body
        className={`${inter.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
