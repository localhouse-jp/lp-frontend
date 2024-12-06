'use client'
import Script from "next/script";

export default function GoogleAnalytics() {
  return <>
    <Script defer src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} strategy="afterInteractive" />
    <Script id="ga" defer strategy="afterInteractive">
      {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());    
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
          `}
    </Script>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWK8KZ9P"
      height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
  </>
}