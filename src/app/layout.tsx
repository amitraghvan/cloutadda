import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppClientShell } from "@/components/layout/AppClientShell";
import { COMPANY_INFO } from "@/data/companyData";

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cloutadda.com"),
  title: {
    default: "CLOUT ADDA® — Culture Meets Creativity | Official Website",
    template: "%s | CLOUT ADDA®",
  },
  description:
    "Clout Adda is a culture-driven brand influence and experiences agency connecting brands with modern audiences through social media marketing, PR & meme marketing, creator partnerships, stadium-grade live events, and podcasting.",
  keywords: [
    "CLOUT ADDA",
    "Creative Agency",
    "Brand Influence Agency",
    "Meme Marketing",
    "Influencer Marketing",
    "Social Media Marketing",
    "Live Experiences",
    "Podcasting Agency",
    "Culture Marketing",
    "Creator Partnerships",
  ],
  authors: [{ name: "CLOUT ADDA" }],
  creator: "CLOUT ADDA",
  publisher: "CLOUT ADDA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cloutadda.com",
    title: "CLOUT ADDA® — YOUR EXPERIENCE ELEVATED.",
    description:
      "From social media and creators to PR, memes and real-world experiences, we help brands connect with people in ways they actually remember.",
    siteName: "CLOUT ADDA®",
  },
  twitter: {
    card: "summary_large_image",
    title: "CLOUT ADDA® — YOUR EXPERIENCE ELEVATED.",
    description:
      "From social media and creators to PR, memes and real-world experiences, we help brands connect with people in ways they actually remember.",
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
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.name,
    alternateName: "Clout Adda Media",
    url: "https://cloutadda.com",
    logo: "https://cloutadda.com/icon.svg",
    slogan: COMPANY_INFO.tagline,
    description:
      "Clout Adda is a culture-driven brand influence and experiences agency connecting brands with modern audiences through social media marketing, PR & meme marketing, creator partnerships, stadium-grade live events, and podcasting.",
    email: COMPANY_INFO.generalEmail,
    contactPoint: COMPANY_INFO.contacts.map((contact) => ({
      "@type": "ContactPoint",
      contactType: contact.role,
      name: contact.name,
      email: contact.email,
      telephone: contact.phone,
    })),
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,200..700;1,9..40,200..700&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&family=Manrope:wght@200;300;400;500;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050505] text-[#F4F0E9] font-sans antialiased selection:bg-[#E50920] selection:text-white">
        <AppClientShell>{children}</AppClientShell>
      </body>
    </html>
  );
}
