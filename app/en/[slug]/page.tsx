import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPage } from "../../product-page";
import { getApp, getSiteData } from "../../../lib/apps";

export function generateStaticParams() { return getSiteData("en").apps.map((app) => ({ slug: app.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug, "en");
  return app ? { title: `${app.name} — Horama Apps`, description: app.summary } : {};
}

export default async function EnglishAppPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getApp(slug, "en")) notFound();
  return <ProductPage slug={slug} locale="en" />;
}
