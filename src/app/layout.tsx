import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://wiki-advent-calendar.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wikipedia Advent Calendar",
    template: "%s · Wikipedia Advent Calendar",
  },
  description:
    "A Christmas newsletter that unlocks a new Wikipedia article every day of Advent. Built with Next.js, TailwindCSS, and ConvertKit.",
  keywords: [
    "Advent calendar",
    "Wikipedia",
    "Christmas newsletter",
    "Next.js",
    "TailwindCSS",
    "ConvertKit",
  ],
  openGraph: {
    title: "Wikipedia Advent Calendar",
    description:
      "Unlock 24 handpicked Wikipedia stories—delivered via a festive Advent calendar interface.",
    url: siteUrl,
    siteName: "Wikipedia Advent Calendar",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Illustration of an Advent calendar with Wikipedia articles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wikipedia Advent Calendar",
    description:
      "Open one door per day for a Christmas-themed Wikipedia deep dive.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} bg-emerald-950 antialiased`}>
        {children}
      </body>
    </html>
  );
}
