import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import { Navigation } from "@/components/layout/Navigation";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "optional",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.affannadeem.me";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Affan Nadeem - Student, Developer, Builder",
    template: "%s - Affan Nadeem",
  },
  description:
    "Affan Nadeem is a Toronto student, developer, competitor, and builder working across product engineering, algorithms, and computational biology.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Affan Nadeem - Student, Developer, Builder",
    description:
      "A personal portfolio spanning software, algorithms, competition, computational biology, and life beyond GitHub.",
    url: siteUrl,
    siteName: "Affan Nadeem Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affan Nadeem - Student, Developer, Builder",
    description: "Software, algorithms, competition, computational biology, and life beyond GitHub.",
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
        <nav className="skip-nav" aria-label="Skip navigation">
          <a className="skip-link" href="#main">
            Skip to content
          </a>
        </nav>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
