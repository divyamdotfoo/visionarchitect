import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Navbar, NavbarMobile } from "@/components/navbar";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://visionarchitect.in"),
  title: "Vision Architects",
  description:
    "Vision architect is an architectural firm which takes contract based projects ranges from residential houses to commercial offices.Currently the firm is opertional in haridwar. The firm is owned by architect Ujjwal kappor.",
  applicationName: "Vision Architects",
  authors: [{ name: "Ujjwal Kapoor" }],
  category: "business architecture furniture construction",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://visionarchitect.in",
    title: "vision architect",
    description:
      "Vision architect is an architectural firm which takes contract based projects ranges from residential houses to commercial offices.Currently the firm is opertional in haridwar. The firm is owned by architect Ujjwal kappor.",
    images: [
      {
        url: "https://visionarchitect.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "visionarchitect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "vision architect",
    description:
      "Vision architect is an architectural firm which takes contract based projects ranges from residential houses to commercial offices.Currently the firm is opertional in haridwar. The firm is owned by architect Ujjwal kappor.",
    images: ["https://visionarchitect.in/og-image.png"],
    creator: "visionarchitect",
  },
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
