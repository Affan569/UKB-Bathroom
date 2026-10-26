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
  keywords: "bathroom fitters Southampton, bathroom installation Southampton, bathroom renovation Southampton, bathroom company Southampton, bathroom fitter near me, new bathroom Southampton, bathroom refurbishment Southampton, wet room installation Southampton, wet room fitters Southampton, ensuite bathroom installation Southampton, bathroom tiling Southampton, bathroom design Southampton, 3D bathroom design, walk-in shower installation Southampton, bathroom suppliers and fitters Southampton, small bathroom renovation Southampton, bath to shower conversion Southampton, bathroom fitters Shirley, bathroom fitters Portswood, bathroom fitters Woolston, bathroom fitters Bitterne, bathroom fitters Eastleigh, bathroom fitters Totton, bathroom fitters Hedge End, bathroom fitters Chandler's Ford, bathroom fitters Romsey, how much does a bathroom cost Southampton, bathroom fitting cost UK 2026, cost of wet room installation, bathroom installation cost per day, how long does it take to fit a bathroom, do I need planning permission for a bathroom",
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
