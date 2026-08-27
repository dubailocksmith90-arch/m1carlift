import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { BUSINESS } from "@/lib/utils";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: BUSINESS.name,
  url: BUSINESS.url,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BUSINESS.url}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: "M1 Car Lift | Sharjah to Dubai Daily Car Lift Service",
    template: "%s | M1 Car Lift",
  },
  description:
    "M1 Car Lift offers reliable, affordable daily car lift services between Sharjah and Dubai. Covering JLT, Media City, TECOM, Downtown, and all SZR Metro stations. Book now.",
  keywords: [
    "car lift sharjah to dubai",
    "sharjah dubai car lift",
    "daily commute sharjah dubai",
    "car lift service uae",
    "m1 car lift",
    "private transport sharjah dubai",
  ],
  authors: [{ name: "M1 Car Lift" }],
  creator: "M1 Car Lift",
  publisher: "M1 Car Lift",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "jtCBkFiJmPc1X2HC7k1D3WSjZLr24iGQndzwS9jAHgs",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    title: "M1 Car Lift | Sharjah to Dubai Daily Car Lift Service",
    description:
      "Reliable, on-time car lift between Sharjah and Dubai. 5.0 Google rating. Book your seat today.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "M1 Car Lift — Sharjah to Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "M1 Car Lift | Sharjah to Dubai Car Lift",
    description: "Reliable daily car lift between Sharjah and Dubai. Book now.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#0A0A0B] text-[#EDEDED] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
