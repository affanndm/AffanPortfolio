import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "optional",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Affan Nadeem - Signal / Systems",
    template: "%s - Affan Nadeem",
  },
  description:
    "Affan Nadeem builds software for complex systems, from trusted local discovery to computational biology.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Affan Nadeem - Signal / Systems",
    description:
      "An evidence-backed software portfolio spanning local discovery, computational biology, algorithms, and product engineering.",
    url: siteUrl,
    siteName: "Affan Nadeem Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affan Nadeem - Signal / Systems",
    description: "Software for complex systems, from local discovery to computational biology.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090A09",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={geist.variable}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&!sessionStorage.getItem('affan-intro-seen')){document.documentElement.dataset.intro='active';sessionStorage.setItem('affan-intro-seen','1')}}catch(e){}`,
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
