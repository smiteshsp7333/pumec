import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PUMEC Consultants Pvt Ltd | India Entry & Tax Advisory",
  description:
    "International advisory firm specializing in India entry strategy, international taxation, cross-border structuring, transfer pricing, and regulatory advisory.",
  keywords:
    "India entry strategy, international tax advisory, cross-border structuring, transfer pricing, FEMA advisory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-gray-50 text-gray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

