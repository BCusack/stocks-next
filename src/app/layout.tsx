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
  title: 'Stocks Digital',
  description: 'Stocks Digital is a leading investor relations and digital marketing agency for ASX-listed companies. We help companies engage with investors and stakeholders.',
  keywords: 'investor relations, digital marketing, ASX, stocks, financial communications',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://www.stocksdigital.com/',
    siteName: 'Stocks Digital',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@stocksdigital',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
