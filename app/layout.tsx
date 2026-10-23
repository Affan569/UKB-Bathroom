import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ukbbathrooms.co.uk'),
  alternates: {
    canonical: 'https://ukbbathrooms.co.uk',
  },
  title: {
    default: "Bathroom Fitters Southampton | UKB Bathrooms",
    template: "%s | UKB Bathrooms"
  },
  description: "Local bathroom fitters in Southampton. Bathroom installation, renovation, wet rooms and ensuites. Free quote. Call +44 7838349520.",
  authors: [{ name: "UKB Bathrooms" }],
  creator: "UKB Bathrooms",
  publisher: "UKB Bathrooms",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://ukbbathrooms.co.uk",
    title: "Bathroom Fitters Southampton | UKB Bathrooms",
    description: "Local bathroom fitters in Southampton. Bathroom installation, renovation, wet rooms and ensuites. Free quote. Call +44 7838349520.",
    siteName: "UKB Bathrooms",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UKB Bathrooms - Professional Bathroom Services in Southampton",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0b1b33',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <StructuredData />
        {children}
        <Footer />
      </body>
    </html>
  );
}
