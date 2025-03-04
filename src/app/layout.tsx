import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TVアニメ「描く光、描く影」公式サイト",
  description:
    "学内コンペでWeb開発部門に応募した作品です。6人で活動してイラスト担当とWeb担当に分担して作業しました。",
  abstract: "空想のアニメなのでTVやサブスクでは放送されません。",
  authors: [
    {
      name: "Sugi:re.tsx",
      url: "https://github.com/Sug1re",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://anime-website-sage.vercel.app",
    title: "TVアニメ「描く光、描く影」公式サイト",
    description:
      "学内コンペでWeb開発部門に応募した作品です。6人で活動してイラスト担当とWeb担当に分担して作業しました。＊空想のアニメなのでTVやサブスクでは放送されません。＊",
    siteName: "My Website",
    images: [
      {
        url: "https://anime-website-sage.vercel.app/keyVisual.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className="antialiased flex">
        <main>{children}</main>
      </body>
    </html>
  );
}
