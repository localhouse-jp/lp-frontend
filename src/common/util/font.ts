import { Inter } from 'next/font/google';
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const lineSeed = localFont({
  src: "../../app/fonts/LINESeedJP_OTF_Rg.woff2",
  variable: "--font-line-seed",
  weight: "100 900",
});

// export const geistMono = localFont({
//   src: "../fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });