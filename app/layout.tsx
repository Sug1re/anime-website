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
    "学内コンペでWeb開発部門に応募した作品です。6人で活動してイラスト担当とWeb担当に分担して作業しました。「東京郊外の桜丘高校を舞台に、絵を描くことに情熱を注ぐユウと、美術部の天才アヤが織りなす青春ストーリー 絵を通じて未来に向かっていく青春物語が今、始まる!?」＊空想のアニメなのでTVやサブスクでは放送されません。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
