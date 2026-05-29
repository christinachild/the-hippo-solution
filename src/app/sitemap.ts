import type { MetadataRoute } from "next";

const BASE = "https://thehipposolution.com";

const ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/the-bill", priority: 0.9 },
  { path: "/lake-cow-bacon", priority: 0.8 },
  { path: "/water-hyacinth", priority: 0.8 },
  { path: "/what-if", priority: 0.8 },
  { path: "/hippos", priority: 0.8 },
  { path: "/louisiana", priority: 0.7 },
  { path: "/cautionary-tales", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
