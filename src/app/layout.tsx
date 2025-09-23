import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair-display' });

export const metadata: Metadata = {
  title: "Cedar Park Home Inspector | Bluebonnet Inspections | TREC #23059",
  description: "Trusted home inspections in Cedar Park, TX. Tim McCoy personally inspects every home with 10+ years experience. Schedule your inspection today. 512-560-5670",
  keywords: "home inspector, Cedar Park, Texas, home inspection, TREC licensed, Tim McCoy, property inspection",
  openGraph: {
    title: "Bluebonnet Home Inspections - Cedar Park's Most Trusted Inspector",
    description: "Protecting Cedar Park families with thorough, honest home inspections since 2010",
    url: "https://bluebonnetinspections.com",
    siteName: "Bluebonnet Home Inspections",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluebonnet Home Inspections",
    description: "Cedar Park's trusted home inspector - TREC #23059",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification-code-here", // To be replaced with actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
