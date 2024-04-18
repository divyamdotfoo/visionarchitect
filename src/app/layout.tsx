import type { Metadata } from "next";
import { Roboto, Ubuntu } from "next/font/google";
import "./globals.css";
import { Navbar, NavbarMobile } from "@/components/navbar";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
export const metadata: Metadata = {
  title: "Vision Architects",
  description:
    "Vision architect is an architecture firm operational in haridwar(uttrakhand).",
  applicationName: "Vision Architects",
  authors: [{ name: "Ujjwal Kapoor" }],
  category: "business architecture furniture construction",
  keywords: [
    "Haridwar architecture firm",
    "Uttarakhand architectural services",
    "Best architects in Haridwar",
    "Residential projects in Uttarakhand",
    "Commercial architecture solutions",
    "Haridwar construction company",
    "Interior design services",
    "Architectural consultancy in Uttarakhand",
    "Haridwar building design",
    "Civil engineering expertise",
    "Sustainable architecture solutions",
    "Modern home designs",
    "Haridwar real estate development",
    "Urban planning services",
    "Architectural firm portfolio",
    "Top architecture projects in Uttarakhand",
    "Haridwar landscape architecture",
    "Affordable housing solutions",
    "Green building design",
    "Haridwar architectural innovation",
    "Architectural excellence in Uttarakhand",
    "Structural engineering",
    "Haridwar architectural heritage",
    "Creative building solutions",
    "Architecture and interior design firm",
    "Building renovation services",
    "Haridwar residential architects",
    "Commercial construction projects",
    "Uttarakhand sustainable design",
    "Haridwar urban development",
    "Innovative architectural solutions",
    "Haridwar architecture awards",
    "Eco-friendly building designs",
    "Interior decorators in Uttarakhand",
    "Haridwar architectural planning",
    "Building contractors in Uttarakhand",
    "Haridwar architectural styles",
    "Construction management services",
    "Architectural visualization",
    "Haridwar heritage conservation",
    "Building renovation experts",
    "Haridwar architectural consultancy",
    "Home remodeling services",
    "Haridwar construction industry",
    "Architecture firm in Uttarakhand",
    "Haridwar building contractors",
    "Commercial interior designers",
    "Uttarakhand building permits",
    "Haridwar construction projects",
    "Architectural drafting services",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} bg-background text-color`}>
        <Navbar />
        <NavbarMobile />
        {children}
      </body>
    </html>
  );
}
