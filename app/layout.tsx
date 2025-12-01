import type { Metadata } from "next";
import { Inter, Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PrintHandler } from "@/components/utils/PrintHandler";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "AI-litt: Didaktik för AI-litteracitet i gymnasiet",
  description: "En resursplattform för gymnasielärare att integrera AI i undervisningen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${inter.variable} ${fredoka.variable} ${nunito.variable} font-sans antialiased bg-gray-50 bg-pattern`}>
        <PrintHandler />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
