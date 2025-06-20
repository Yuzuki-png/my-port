import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'Yuzuki.Nishi Portfolio'
  },
  description: "駒澤大学で社会学を学びながら、エンジニアとして社会をより良くすることを目指す学生のポートフォリオサイト。TypeScript、Node.js、Next.js、Flutter、AWSを使用した開発経験とプロジェクトを紹介しています。",
  keywords: [
    "ポートフォリオ", 
    "学生エンジニア", 
    "TypeScript", 
    "Next.js", 
    "React", 
    "Node.js", 
    "Flutter", 
    "AWS", 
    "駒澤大学", 
    "社会学", 
    "インターン",
    "Go言語"
  ],
  authors: [{ name: "学生エンジニア", url: "https://github.com" }],
  creator: "学生エンジニア",
  publisher: "学生エンジニア",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://your-portfolio-domain.com',
    title: '学生エンジニア Portfolio | テクノロジーで社会をより良く',
    description: "駒澤大学で社会学を学びながら、エンジニアとして社会をより良くすることを目指す学生のポートフォリオサイト。",
    siteName: '学生エンジニア Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: '学生エンジニア Portfolio | テクノロジーで社会をより良く',
    description: "駒澤大学で社会学を学びながら、エンジニアとして社会をより良くすることを目指す学生のポートフォリオサイト。",
    creator: '@your_twitter_handle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0072f5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
