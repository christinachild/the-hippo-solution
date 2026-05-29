import type { Metadata } from "next";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thehipposolution.com"),
  title: {
    default: "The Hippo Solution",
    template: "%s | The Hippo Solution",
  },
  description:
    "In 1910, Congress nearly imported hippos into the Louisiana bayou to fix a meat shortage and eat a runaway weed. This is the true, gloriously bad idea that almost was.",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Christina Child", url: "https://christinachild.com" }],
  creator: "Christina Child",
  keywords: [
    "American Hippo Bill",
    "Lake Cow Bacon",
    "Louisiana hippos",
    "water hyacinth",
    "Robert Broussard",
    "hippo ranching",
  ],
  openGraph: {
    title: "The Hippo Solution",
    description:
      "The true story of the 1910 plan to ranch hippos in the Louisiana bayou, plus everything that could have gone wrong.",
    url: "https://thehipposolution.com",
    siteName: "The Hippo Solution",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Hippo Solution",
    description:
      "The true story of the 1910 plan to ranch hippos in the Louisiana bayou.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
