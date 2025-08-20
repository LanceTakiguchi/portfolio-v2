import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import SolarSystem from './assets/solarsystem.svg';

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lance Takiguchi's Portfolio",
  description: "Lance Takiguchi's Portfolio, showcasing his frontend web development work and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <SolarSystem aria-hidden className="fixed -z-1 bg-cover bg-no-repeat bg-center w-screen h-screen" />
        {children}
      </body>
    </html>
  );
}
