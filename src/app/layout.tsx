import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://supaleads.app"),
  title: {
    default: "Supaleads — Done-for-You B2B Outbound Agency",
    template: "%s | Supaleads",
  },
  description:
    "We research, write, and send — you take the meetings. Done-for-you B2B outbound that fills your calendar with qualified meetings. 24/7 operation across all time zones.",
  keywords: [
    "B2B outbound",
    "cold email agency",
    "lead generation",
    "outbound sales",
    "email outreach",
    "meeting booking",
    "done for you outbound",
    "cold email outreach",
    "B2B lead generation agency",
    "outbound agency",
    "email infrastructure setup",
    "hyper-personalized email",
  ],
  authors: [{ name: "Supaleads" }],
  creator: "Supaleads",
  publisher: "Supaleads",
  formatDetection: {
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://supaleads.app",
  },
  openGraph: {
    title: "Supaleads — Done-for-You B2B Outbound Agency",
    description:
      "We research, write, and send — you take the meetings. Done-for-you B2B outbound that fills your calendar with qualified meetings.",
    url: "https://supaleads.app",
    siteName: "Supaleads",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supaleads — Done-for-You B2B Outbound Agency",
    description:
      "We research, write, and send — you take the meetings. Done-for-you B2B outbound that fills your calendar with qualified meetings.",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://supaleads.app/#organization",
      name: "Supaleads",
      url: "https://supaleads.app",
      email: "harris@supaleads.app",
      description:
        "Done-for-you B2B outbound agency. We research, write, and send — you take the meetings.",
      foundingDate: "2025",
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
      serviceType: [
        "B2B Lead Generation",
        "Cold Email Outreach",
        "Outbound Sales",
        "Email Infrastructure Setup",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://supaleads.app/#website",
      url: "https://supaleads.app",
      name: "Supaleads",
      publisher: {
        "@id": "https://supaleads.app/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://supaleads.app/#webpage",
      url: "https://supaleads.app",
      name: "Supaleads — Done-for-You B2B Outbound Agency",
      description:
        "We research, write, and send — you take the meetings. Done-for-you B2B outbound that fills your calendar with qualified meetings.",
      isPartOf: {
        "@id": "https://supaleads.app/#website",
      },
      about: {
        "@id": "https://supaleads.app/#organization",
      },
    },
    {
      "@type": "Service",
      "@id": "https://supaleads.app/#service",
      name: "B2B Outbound Service",
      provider: {
        "@id": "https://supaleads.app/#organization",
      },
      description:
        "Full-service B2B outbound — from ICP research and prospect list building to hyper-personalized email sequences, infrastructure setup, and reply management.",
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Outbound Services",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Monthly Retainer",
            price: "2000",
            priceCurrency: "USD",
            description:
              "~10 qualified meetings per month, full ICP research, hyper-personalized sequences, domain setup & warmup, reply handling, weekly reports.",
            availability: "https://schema.org/InStock",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://supaleads.app/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long until I start seeing meetings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most clients see their first qualified meetings within 2–3 weeks after launch. The first week is dedicated to domain warmup and infrastructure setup.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to provide the lead lists?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. We handle everything — from defining your ICP to building and verifying the prospect lists. You just tell us who your ideal customer is.",
          },
        },
        {
          "@type": "Question",
          name: 'What does "hyper-personalized" actually mean?',
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every email is written with context specific to the recipient — their role, company, recent activity, and pain points. No generic templates.",
          },
        },
        {
          "@type": "Question",
          name: "Do you set up the email accounts and domains?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We purchase and configure new sending domains, set up email accounts, handle DNS records, and run the full warmup process before any outreach begins.",
          },
        },
        {
          "@type": "Question",
          name: "What happens when a prospect replies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We handle all reply management — qualifying responses, filtering out-of-office and unsubscribes, and booking qualified meetings directly on your calendar.",
          },
        },
        {
          "@type": "Question",
          name: "Do you operate in my time zone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We operate 24/7 — our team works around the clock, so we cover every time zone. Whether your prospects are in New York, London, or Tokyo, we send at the right time and respond to replies without delay.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a minimum commitment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We recommend a minimum of 3 months to see meaningful results, but there are no long-term contracts. You can cancel anytime with 30 days notice.",
          },
        },
        {
          "@type": "Question",
          name: "What industries do you work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We work with B2B companies across SaaS, professional services, agencies, and tech. If you sell to businesses, we can help.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${instrumentSerif.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
