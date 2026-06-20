import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Franklin Njiepi | Développeur Fullstack & DevSecOps",
  description: "Portfolio de Franklin Njiepi — Développeur Fullstack & DevSecOps, étudiant en Génie Logiciel à l'Institut Africain d'Informatique. Spécialisé Laravel, React, API REST et architecture distribuée.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#0f0f1a] text-[#f0f0ff] antialiased">
        {children}
      </body>
    </html>
  );
}
