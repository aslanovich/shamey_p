import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// В макете всё набрано Inter Medium с плотным трекингом
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const SITE_URL = "https://shamey.ru";
const TITLE = "Шамай Джандарова — гештальт-психолог, онлайн-консультации";
const DESCRIPTION =
  "Шамай Джандарова — гештальт-психолог. Индивидуальные онлайн-консультации для взрослых: тревога, самооценка, отношения, выгорание, поиск себя. Сессия 50 минут — 1500 ₽. Запись онлайн.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Шамай Джандарова",
  },
  description: DESCRIPTION,
  keywords: [
    "психолог онлайн",
    "гештальт-терапевт",
    "гештальт-психолог",
    "консультация психолога",
    "психолог для взрослых",
    "тревога",
    "самооценка",
    "отношения",
    "эмоциональное выгорание",
    "Шамай Джандарова",
    "Shamey",
  ],
  authors: [{ name: "Шамай Джандарова", url: SITE_URL }],
  creator: "Шамай Джандарова",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Shamey — Шамай Джандарова",
    locale: "ru_RU",
    title: TITLE,
    description:
      "Онлайн-консультации гештальт-психолога. Можно прийти без точного запроса — разберёмся вместе. 50 минут, 1500 ₽.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Шамай Джандарова — гештальт-психолог",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f6fa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
