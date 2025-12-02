import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://wiki-advent-calendar.vercel.app";
const faviconIco = "/candy-icon.ico?v=1";
const faviconPng = "/candy-icon.png?v=1";

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
    icon: [
      { url: faviconIco },
      { url: faviconPng, type: "image/png", sizes: "512x512" },
    ],
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
