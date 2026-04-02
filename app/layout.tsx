import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ROBOTY4U – Automatyzacja i Robotyzacja Przemysłu",
  description:
    "ROBOTY4U dostarcza zaawansowane systemy zrobotyzowane dla produkcji: spawanie, paletyzacja, coboty, malowanie i systemy sterowania PLC/SCADA.",
  keywords: [
    "robotyzacja",
    "automatyzacja",
    "roboty przemysłowe",
    "spawanie MIG/MAG",
    "cobot",
    "SCADA",
    "PLC",
    "Polska",
  ],
  openGraph: {
    title: "ROBOTY4U – Automatyzacja i Robotyzacja Przemysłu",
    description:
      "Kompleksowe systemy zrobotyzowane dla polskiego przemysłu. Zwiększ wydajność o 45%.",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        {/* Material Symbols icon font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
