import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PUMEC Consultants Pvt Ltd | Chartered Accountants & Financial Advisors",
  description:
    "PUMEC is a leading Chartered Accountancy and consulting firm offering Auditing, Taxation, NRI Services, Business Setup, Mergers & Acquisitions, and Corporate Law compliance across India.",
  keywords:
    "Chartered Accountant, CA firm India, taxation services, audit, NRI consulting, business setup, corporate law, PUMEC",
  openGraph: {
    title: "PUMEC Consultants Pvt Ltd",
    description: "Your Trusted Financial & Compliance Partner",
    type: "website",
    url: "https://pumec.com",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[Inter,sans-serif]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

