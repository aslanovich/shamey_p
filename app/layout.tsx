import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// В макете всё набрано Inter Medium с плотным трекингом
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Джандарова Шамай — гештальт-психолог",
  description:
    "Помогаю разобраться в себе, снизить тревогу и найти внутреннюю опору. Онлайн-консультации.",
  openGraph: {
    title: "Джандарова Шамай — гештальт-психолог",
    description:
      "Онлайн-консультации. Можно прийти без точного запроса.",
    type: "website",
  },
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
