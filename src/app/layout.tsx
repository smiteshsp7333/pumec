import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
  display: "swap",
});

// ── GLOBAL SEO METADATA ──────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://pumec.com"),
  title: {
    default: "PUMEC | India Market Entry, CFO & Global Business Advisory",
    template: "%s | PUMEC Consultants",
  },
  description:
    "PUMEC Consultants Pvt. Ltd. is a Bangalore-based advisory firm providing India Market Entry Services, Virtual CFO Services, Cross-Border Tax Advisory, FEMA Compliance, Transfer Pricing, and Strategic Corporate Consulting for international businesses operating in India.",
  keywords: [
    "India market entry strategy",
    "India entry services",
    "India business setup foreign company",
    "virtual CFO India",
    "global CFO services",
    "international taxation India",
    "cross-border tax advisory",
    "transfer pricing India",
    "FEMA advisory India",
    "RBI compliance India",
    "FDI advisory India",
    "foreign subsidiary compliance India",
    "global capability center setup India",
    "finance transformation India",
    "business process outsourcing India",
    "accounting outsourcing India",
    "India compliance management",
    "corporate governance India",
    "India market expansion",
  ].join(", "),
  authors: [{ name: "PUMEC Consultants Pvt Ltd", url: "https://pumec.com" }],
  creator: "PUMEC Consultants Pvt Ltd",
  publisher: "PUMEC Consultants Pvt Ltd",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: "https://pumec.com",
  },
  openGraph: {
    title: "PUMEC | India Market Entry, CFO & Global Business Advisory",
    description:
      "Bangalore-based advisory firm providing India Market Entry, Virtual CFO, Cross-Border Tax, FEMA, and Transfer Pricing advisory for international businesses.",
    url: "https://pumec.com",
    siteName: "PUMEC Consultants",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PUMEC Consultants — India Business Advisory",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PUMEC | India Market Entry, CFO & Global Business Advisory",
    description:
      "India entry, cross-border tax, Virtual CFO, FEMA advisory for international companies operating in India.",
    images: ["/og-image.jpg"],
  },
};

// ── STRUCTURED DATA SCHEMAS ──────────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://pumec.com/#organization",
  name: "PUMEC Consultants Pvt Ltd",
  url: "https://pumec.com",
  logo: "https://pumec.com/logo.png",
  image: "https://pumec.com/og-image.jpg",
  description:
    "PUMEC Consultants Pvt Ltd is a Bangalore-based professional advisory firm specializing in India market entry, international tax, FEMA compliance, transfer pricing, and virtual CFO services for global businesses.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@pumec.com",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.linkedin.com/company/pumec-consultants",
  ],
  areaServed: "Worldwide",
  priceRange: "$$",
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "PUMEC Advisory Services",
  description: "Comprehensive advisory services for international businesses operating in India",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "India Market Entry & Cross-Border Investment Advisory",
        description: "End-to-end advisory for foreign companies establishing a presence in India, from market entry strategy to entity incorporation and compliance.",
        url: "https://pumec.com/services/india-entry",
        provider: { "@id": "https://pumec.com/#organization" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "International Taxation, Transfer Pricing & Regulatory Advisory",
        description: "Cross-border tax advisory, international taxation, and India regulatory compliance for multinational companies.",
        url: "https://pumec.com/services/international-tax",
        provider: { "@id": "https://pumec.com/#organization" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "FEMA & Regulatory Advisory",
        description: "Expert FEMA compliance, FDI structuring, RBI filings, and regulatory advisory for cross-border transactions.",
        url: "https://pumec.com/services/fema-advisory",
        provider: { "@id": "https://pumec.com/#organization" },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Transaction Advisory & M&A Tax",
        description: "Tax due diligence, deal structuring, and cross-border M&A advisory for investors and corporates.",
        url: "https://pumec.com/services/transaction-advisory",
        provider: { "@id": "https://pumec.com/#organization" },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Business Transformation & Strategic CFO Advisory",
        description: "Virtual CFO services, finance transformation, and strategic business advisory for foreign subsidiaries in India.",
        url: "https://pumec.com/services",
        provider: { "@id": "https://pumec.com/#organization" },
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "Finance, Accounting & Compliance Outsourcing",
        description: "Scalable finance and accounting outsourcing for international businesses expanding into India.",
        url: "https://pumec.com/services",
        provider: { "@id": "https://pumec.com/#organization" },
      },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does PUMEC provide for foreign companies entering India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PUMEC provides comprehensive India market entry services including entity structuring, company incorporation, FEMA and RBI compliance, FDI advisory, tax structuring, and ongoing regulatory compliance for foreign companies entering India.",
      },
    },
    {
      "@type": "Question",
      name: "Does PUMEC offer Virtual CFO services in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, PUMEC offers full Virtual CFO services in India including financial reporting, MIS, budgeting, cash flow management, board reporting, and finance function outsourcing for foreign subsidiaries and scaling enterprises.",
      },
    },
    {
      "@type": "Question",
      name: "What is FEMA compliance and why is it important for foreign businesses in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FEMA (Foreign Exchange Management Act) governs cross-border transactions in India. Compliance is mandatory for all foreign investments, repatriation of funds, ECBs, and trade transactions. Non-compliance can result in significant penalties. PUMEC provides end-to-end FEMA advisory and RBI filing services.",
      },
    },
    {
      "@type": "Question",
      name: "Can PUMEC help with Transfer Pricing compliance in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, PUMEC provides comprehensive transfer pricing services including TP documentation (master file and local file), benchmarking studies, APA advisory, and audit defense/litigation support for multinational companies operating in India.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lato.variable} h-full antialiased`}>
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Services Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
