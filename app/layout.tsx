import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import Head from "next/head";
import Script from "next/script";
import { ReactNode } from "react";
import './globals.css';

export const metadata: Metadata = {
  title: "LOCALHOUSE ローカルハウス | IT系学生コミュニティ",
  description: "自由と創造性を追求する、学生ITエンジニアのためのオープンコミュニティ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <Script
        id="ldjson"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "LOCALHOUSE",
            "url": "https://localhouse.jp",
            "description": "自由と創造性を追求する、学生ITエンジニアのためのオープンコミュニティ",
            "logo": "https://localhouse.jp/favicon.ico",
          }),
        }}
      />
      <Script id="gtag">
        {`(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PWK8KZ9P');`}
      </Script>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="LOCALHOUSE ローカルハウス | IT系学生コミュニティ" />
        <meta name="description" content="自由と創造性を追求する、学生ITエンジニアのためのオープンコミュニティ" />
        <meta property="og:url" content="https://localhouse.jp" />
        {/* いつか追加 */}
        <meta property="og:image" content="https://localhouse.jp/ogp.png" />
        <meta property="og:site_title" content="LOCALHOUSE" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body
        className={`antialiased`}
      >
        <GoogleTagManager gtmId={"GTM-PWK8KZ9P"} />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}