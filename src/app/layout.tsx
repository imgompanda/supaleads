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
  title: "Supaleads — AI-Powered B2B Outbound",
  description:
    "We research, write, and send — you take the meetings. Done-for-you B2B outbound powered by AI.",
  openGraph: {
    title: "Supaleads — AI-Powered B2B Outbound",
    description:
      "We research, write, and send — you take the meetings. Done-for-you B2B outbound powered by AI.",
    url: "https://supaleads.app",
    siteName: "Supaleads",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSerif.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
