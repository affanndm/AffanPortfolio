import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.affannadeem.me";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/projects/vantage",
    "/projects/grnalytics",
    "/lab",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date("2026-07-16"),
  }));
}
