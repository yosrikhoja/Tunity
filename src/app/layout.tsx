import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TUNITY Engineering — Ingénierie structurelle, BIM, Architecture & Transformation digitale",
    template: "%s — TUNITY Engineering",
  },
  description:
    "TUNITY Engineering est une entreprise pluridisciplinaire alliant ingénierie structurelle, BIM, architecture, développement web et transformation numérique.",
  keywords: [
    "ingénierie structurelle",
    "BIM",
    "architecture",
    "transformation digitale",
    "développement web",
    "bureau d'études",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
