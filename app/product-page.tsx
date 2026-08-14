import Link from "next/link";
import Image from "next/image";
import { AppMark, Header, StatusDot } from "./components";
import { getApp, type Locale } from "../lib/apps";
import { getCopy } from "../lib/i18n";

export function ProductPage({ slug, locale }: { slug: string; locale: Locale }) {
  const app = getApp(slug, locale);
  if (!app) return null;
  const t = getCopy(locale);
  const home = locale === "en" ? "/en" : "/";
  const versionLabel = app.version === "pending" ? t.product.pending : `v${app.version}`;
  const relatedApps = (app.related_apps ?? []).flatMap((relatedSlug) => {
    const relatedApp = getApp(relatedSlug, locale);
    return relatedApp ? [relatedApp] : [];
  });

  return <main className={`product-page product-theme-${app.theme ?? "light"}`} style={{ "--app-color": app.color, "--app-ink": app.ink, "--app-accent": app.accent } as React.CSSProperties}>
    <div className="product-top"><Header inverse locale={locale} slug={slug} /></div>
    <section className="product-hero wrap"><div className="product-intro"><Link href={home} className="back-link">{t.product.back}</Link><div className="product-title"><AppMark app={app} /><div><p>{t.product.appOf}</p><h1>{app.name}</h1></div></div><h2>{app.tagline}</h2><p className="product-summary">{app.summary}</p><div className="product-actions"><a className="button product-button" href="#roadmap">{t.product.roadmapButton} <span>↓</span></a>{app.embed_url && <a className="text-link" href="#configurator">{app.product_cta_label}</a>}</div></div>
      <div className="product-console"><div className="console-head"><span><StatusDot status={app.status} /> {t.product.status}</span><b>{versionLabel}</b></div><div className="console-body"><p>{t.product.stage}</p><h3>{app.status_label}</h3><div className="console-wave"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><small>{t.product.building}</small></div></div>
    </section>

    <section className={`product-story wrap${app.demo ? " product-story-with-demo" : ""}`}>
      <p className="section-label">{t.product.opportunity}</p>
      <div className="story-copy">
        <h2>{app.opportunity_title ?? app.pitch}</h2>
        {app.opportunity_body && <p className="story-lede">{app.opportunity_body}</p>}
        {app.opportunity_highlights && <div className="story-highlights">{app.opportunity_highlights.map((item) => <span key={item}><i />{item}</span>)}</div>}
        <div className="audience-block story-audience"><small>{t.product.builtFor}</small><div>{app.audience.map((item) => <span key={item}>{item}</span>)}</div></div>
      </div>
      {app.demo && <div className="story-aside"><figure className="demo-frame demo-frame-compact"><div className="demo-window-bar"><span /><span /><span /><small>{app.demo_label}</small></div><Image src={app.demo} alt={app.demo_alt ?? `${app.name} demo`} width={960} height={600} unoptimized /><figcaption><strong>{app.demo_title}</strong><span>{app.demo_caption}</span></figcaption></figure></div>}
    </section>
    <section className="features-wrap"><div className="wrap"><p className="section-label">{t.product.features}</p><div className="feature-grid">{app.features.map((feature, index) => <article key={feature}><span>0{index + 1}</span><h3>{feature}</h3><div className={`feature-shape shape-${index + 1}`} /></article>)}</div></div></section>

    {relatedApps.length > 0 && <section className="related-section wrap"><p className="section-label">{t.product.related}</p><div className="related-grid">{relatedApps.map((relatedApp) => <Link className="related-card" href={locale === "en" ? `/en/${relatedApp.slug}` : `/${relatedApp.slug}`} key={relatedApp.slug} style={{ "--related-color": relatedApp.color, "--related-ink": relatedApp.ink } as React.CSSProperties}><AppMark app={relatedApp} /><div><small>{relatedApp.status_label} · v{relatedApp.version}</small><h3>{relatedApp.name}</h3><p>{relatedApp.tagline}</p></div><span>↗</span></Link>)}</div></section>}

    <section className="roadmap-section wrap" id="roadmap"><div className="roadmap-heading"><p className="section-label">{t.product.roadmap}</p><h2>{t.product.roadmapTitle}</h2><p>{t.product.roadmapBody}</p></div><div className="roadmap-list">{app.roadmap.map((item, index) => <article className={`roadmap-item roadmap-${item.state}`} key={`${item.title}-${index}`}><div><span>{item.state === "done" ? "✓" : String(index + 1).padStart(2, "0")}</span><i /></div><div><small>{t.product.states[item.state]}</small><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div></section>

    {app.embed_url && <section className="configurator-section" id="configurator"><div className="wrap"><div className="configurator-heading"><p className="section-label">{app.embed_label}</p><div><h2>{app.embed_title}</h2><p>{app.embed_caption}</p></div></div><div className="configurator-frame"><div className="configurator-bar"><span /><span /><span /><small>{app.name} · DEMO MODE</small></div><iframe src={app.embed_url} title={app.embed_title ?? `${app.name} configurator`} loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock" allow="fullscreen" /></div></div></section>}

    <section className="product-support"><div className="wrap support-grid"><p className="section-label">{t.product.needs}</p><div><h2>{t.product.help} {app.name}<br /><em>{t.product.grow}</em></h2><p>{app.support_ask}</p></div></div></section>
    <footer className="product-footer wrap"><Link href={home}>HORAMA APPS</Link><span>{app.name} · {versionLabel}</span></footer>
  </main>;
}
