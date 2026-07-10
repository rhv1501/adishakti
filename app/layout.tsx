import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Adishakti Green Systems",
    default: "Adishakti Green Systems | Renewable Energy Procurement & PPA Consultancy",
  },
  description:
    "End-to-end renewable energy solutions in India. We bridge the gap between renewable energy developers and industrial power consumers through Open Access and Captive Power structures, Land Aggregation, and Grid Connectivity.",
  keywords: [
    "Renewable Energy India",
    "Open Access Power",
    "Captive Power Plant",
    "Group Captive",
    "PPA Consultancy",
    "Power Purchase Agreements",
    "Solar Land Aggregation",
    "Grid Connectivity",
    "Adishakti Green Systems"
  ],
  authors: [{ name: "Adishakti Green Systems" }],
  openGraph: {
    title: "Adishakti Green Systems | Renewable Energy Procurement",
    description: "Predominant consultants in Power Purchase Agreements (PPA), Land Aggregation, and Grid Connectivity.",
    url: "https://adishaktigreen.com",
    siteName: "Adishakti Green Systems",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Adishakti Green Systems Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
