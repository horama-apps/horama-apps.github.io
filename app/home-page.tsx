/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { AppMark, ArrowIcon, Header, StatusDot } from "./components";
import { ContactForm } from "./contact-form";
import { getSiteData, type Locale } from "../lib/apps";
import { getCopy } from "../lib/i18n";

export function HomePage({ locale }: { locale: Locale }) {
  const data = getSiteData(locale);
  const t = getCopy(locale);
  const prefix = locale === "en" ? "/en" : "";
  const versionLabel = (version: string) => version === "pending" ? t.product.pending : `v${version}`;

  return <main>
    <Header locale={locale} />
    <section className="hero wrap"><div className="hero-copy">
      <p className="eyebrow"><span>●</span> {t.home.eyebrow}</p><h1>{t.home.title}</h1><p className="hero-lede">{data.organization.description}</p>
      <div className="hero-actions"><a className="button button-dark" href="#colaborar">{t.home.together} <ArrowIcon /></a><a className="button button-light" href="#apps">{t.home.explore} <span>↓</span></a></div>
      <div className="trust-row"><span>OPEN SOURCE FIRST</span><i /><span>{t.home.products}</span><i /><span>{t.home.made}</span></div>
    </div><div className="orbit-card" aria-label={t.home.ecosystem}><div className="orbit-grid" /><div className="orbit-axis orbit-axis-x" /><div className="orbit-axis orbit-axis-y" /><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="orbit-ring ring-three" /><i className="orbit-marker marker-one" /><i className="orbit-marker marker-two" /><i className="orbit-marker marker-three" /><i className="orbit-marker marker-four" /><div className="orbit-center"><img src="/horama-mark.png" alt="Horama" width="115" height="115" /></div>
      {data.apps.map((app, index) => <Link href={`${prefix}/${app.slug}`} className={`orbit-node orbit-node-${index + 1}`} style={{ "--app-color": app.color } as React.CSSProperties} key={app.slug} aria-label={`${t.home.open} ${app.name}`}><span className="orbit-node-shell"><AppMark app={app} compact /></span><b>{app.name}</b></Link>)}
      <div className="orbit-note"><b>{data.apps.length}</b><span>{t.home.orbit}</span></div>
    </div></section>

    <section className="manifesto-band"><div className="wrap manifesto-grid"><p className="section-label">{t.home.thesisLabel}</p><div><h2>{t.home.thesisTitle}</h2><p>{t.home.thesisBody}</p></div><div className="manifesto-stat"><strong>∞</strong><span>{t.home.potential}</span></div></div></section>

    <section className="apps-section wrap" id="apps"><div className="section-heading"><div><p className="section-label">{t.home.portfolioLabel}</p><h2>{t.home.portfolioTitle}</h2></div><p>{t.home.portfolioBody}</p></div>
      <div className="app-ledger"><div className="ledger-head"><span>{t.home.headers[0]}</span><span>{t.home.headers[1]}</span><span>{t.home.headers[2]}</span><span>{t.home.headers[3]}</span><span /></div>
        {data.apps.map((app, index) => <Link href={`${prefix}/${app.slug}`} className="ledger-row" key={app.slug} style={{ "--app-color": app.color } as React.CSSProperties}><span className="ledger-product"><small>{String(index + 1).padStart(2, "0")}</small><AppMark app={app} /><b>{app.name}</b></span><span>{app.tagline}</span><span className="mono">{versionLabel(app.version)}</span><span className="status"><StatusDot status={app.status} />{app.status_label}</span><span className="round-arrow"><ArrowIcon /></span></Link>)}
      </div></section>

    <section className="model-section"><div className="wrap"><p className="section-label">{t.home.modelLabel}</p><div className="model-grid">{t.home.model.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

    <section className="partner-section wrap" id="colaborar"><div className="partner-card"><div><p className="section-label light">{t.home.partnerLabel}</p><h2>{t.home.partnerTitle}</h2></div><div className="partner-copy"><p>{t.home.partnerBody}</p><ContactForm locale={locale} triggerLabel={t.home.talk} /></div><div className="partner-tags">{data.organization.partnerships.map((item) => <span key={item}>+ {item}</span>)}</div></div></section>

    <footer className="footer wrap"><div className="footer-brand"><img src="/horama-mark.png" alt="" width="50" height="50" /><span><b>HORAMA APPS</b><small>{t.home.motto}</small></span></div><p>{t.home.footer}</p><div><a href="#apps">{t.home.footerApps}</a></div><small>© {new Date().getFullYear()} Horama Apps</small></footer>
  </main>;
}
