import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/lib/content";

const BASE_URL = "https://portfolio-two-sepia-60.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllProjectSlugs();

  const projectPages = slugs.map((slug) => ({
    url: `${BASE_URL}/projects/${slug}`,
    lastModified: new Date("2026-07-12"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-07-12"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date("2026-07-12"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projectPages,
  ];
}
