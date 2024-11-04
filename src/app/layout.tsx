import { inter } from "@/common/util/font";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import {ThemeProvider} from "@/components/ThemeProvider";
import "@radix-ui/themes/styles.css";

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
