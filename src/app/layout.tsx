import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pumec.com"),
  title: {
    default: "PUMEC | Leading Business & Tax Consulting Firm in India",
    template: "%s | PUMEC Consultants",
  },
  description:
    "PUMEC Consultants Pvt Ltd is India’s premier advisory firm offering expert solutions in international tax, transfer pricing, FEMA compliance, and India market entry.",
  keywords: [
    "India market entry strategy",
    "international tax advisory India",
    "cross-border structuring",
    "transfer pricing compliance India",
    "FEMA regulatory advisory",
    "business setup in India",
  ].join(", "),
  authors: [{ name: "PUMEC Consultants Pvt Ltd" }],
  openGraph: {
    title: "PUMEC | Leading Business & Tax Consulting Firm in India",
    description: "India’s premier advisory firm offering expert solutions in international tax, transfer pricing, and India market entry.",
    url: "https://pumec.com",
    siteName: "PUMEC Consultants",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "PUMEC Consultants Logo" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PUMEC | Leading Business & Tax Consulting Firm in India",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Consulting",
    "name": "PUMEC Consultants Pvt Ltd",
    "url": "https://pumec.com",
    "logo": "https://pumec.com/logo.png",
    "description": "Leading business consulting firm in India offering tax, FEMA, transfer pricing, and corporate advisory services.",
  };

  return (
    <html lang="en" className={`${inter.variable} ${lato.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-gray-50 text-gray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

