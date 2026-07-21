import { siteData, siteTranslations } from "../data/apps.generated";

export type Locale = "es" | "en";

export type RoadmapItem = {
  title: string;
  description: string;
  state: "done" | "current" | "next";
};

export type AppData = {
  slug: string;
  name: string;
  monogram: string;
  logo?: string;
  theme?: "light" | "dark";
  tagline: string;
  summary: string;
  pitch: string;
  opportunity_title?: string;
  opportunity_body?: string;
  opportunity_highlights?: readonly string[];
  audience: readonly string[];
  features: readonly string[];
  version: string;
  status: string;
  status_label: string;
  color: string;
  ink: string;
  accent: string;
  repo?: string;
  product_url?: string;
  related_apps?: readonly string[];
  product_cta_label?: string;
  embed_url?: string;
  embed_label?: string;
  embed_title?: string;
  embed_caption?: string;
  demo?: string;
  demo_label?: string;
  demo_title?: string;
  demo_caption?: string;
  demo_alt?: string;
  support_ask: string;
  roadmap: readonly RoadmapItem[];
};

export type SiteData = {
  organization: {
    name: string;
    description: string;
    github: string;
    partnerships: readonly string[];
  };
  apps: readonly AppData[];
};

export function getSiteData(locale: Locale = "es"): SiteData {
  if (locale === "es") return siteData as SiteData;

  const translations = siteTranslations as unknown as {
    organization: Partial<SiteData["organization"]>;
    apps: Record<string, Partial<AppData>>;
  };

  return {
    organization: { ...siteData.organization, ...translations.organization },
    apps: siteData.apps.map((app) => ({ ...app, ...translations.apps[app.slug] })) as AppData[],
  };
}

export function getApp(slug: string, locale: Locale = "es"): AppData | undefined {
  return getSiteData(locale).apps.find((app) => app.slug === slug);
}
