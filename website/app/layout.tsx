import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jantarax.com"),
  title: {
    default: "JantaraX Global IT Private Limited | Software, Web & Mobile Development",
    template: "%s | JantaraX Global IT",
  },
  description:
    "JantaraX Global IT Private Limited — Expert software development, web & mobile apps, IT consulting, cloud solutions, and paid internship programs for freshers and students in India.",
  keywords: [
    "JantaraX",
    "IT company India",
    "software development company",
    "web development India",
    "mobile app development",
    "IT consulting",
    "paid internship IT",
    "internship for freshers",
    "cloud solutions India",
    "custom software development",
    "React Next.js development",
    "startup IT partner",
  ],
  authors: [{ name: "JantaraX Global IT Private Limited" }],
  creator: "JantaraX Global IT",
  publisher: "JantaraX Global IT Private Limited",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jantarax.com",
    siteName: "JantaraX Global IT",
    title: "JantaraX Global IT Private Limited | Software, Web & Mobile Development",
    description:
      "Expert IT services, custom software, web & mobile development, and paid internship programs. Building the future with technology.",
    images: [
      {
        url: "/logo-full.png",
        width: 1200,
        height: 630,
        alt: "JantaraX Global IT Private Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JantaraX Global IT | Software & Web Development",
    description: "Expert IT services, custom software, web & mobile development, and paid internship programs.",
    images: ["/logo-full.png"],
    creator: "@jantarax",
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
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  alternates: {
    canonical: "https://jantarax.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "JantaraX Global IT Private Limited",
              alternateName: "JantaraX",
              url: "https://jantarax.com",
              logo: "https://jantarax.com/logo-full.png",
              description:
                "JantaraX Global IT Private Limited is an IT company specializing in software development, web development, mobile apps, IT consulting, and paid internship programs.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              sameAs: [
                "https://linkedin.com/company/jantarax",
                "https://twitter.com/jantarax",
                "https://instagram.com/jantarax",
              ],
              offers: [
                {
                  "@type": "Offer",
                  name: "Software Development",
                  description: "Custom software development services",
                },
                {
                  "@type": "Offer",
                  name: "Web Development",
                  description: "Professional web development and design",
                },
                {
                  "@type": "Offer",
                  name: "Mobile App Development",
                  description: "iOS and Android mobile application development",
                },
                {
                  "@type": "Offer",
                  name: "IT Internship Program",
                  description: "Paid internship programs for freshers and students",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
