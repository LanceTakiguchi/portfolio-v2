import type { Metadata } from "next";
import { Space_Grotesk, Roboto } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

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
        className={`${spaceGrotesk.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
