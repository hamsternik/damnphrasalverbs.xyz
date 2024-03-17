import "./globals.css";
import type { Metadata } from "next";
import { Inter, Shadows_Into_Light } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const shadows_into_lights = Shadows_Into_Light({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-shadows-into-lights",
});

export const metadata: Metadata = {
  title: "Damn Phrasal Verbs",
  description: "The last time you are going to find out a damn phrasal verb.",
  keywords:
    "damn, phrasal, verbs, phrasal verbs, english, english phrasal verbs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${shadows_into_lights.variable} ${inter.variable}`}>{children}</body>
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  );
}
