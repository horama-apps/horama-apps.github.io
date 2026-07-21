/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { AppData, Locale } from "../lib/apps";
import { getCopy } from "../lib/i18n";

export function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export function StatusDot({ status }: { status: string }) {
  return <i className={`status-dot status-${status}`} aria-hidden="true" />;
}

export function AppMark({ app, compact = false }: { app: AppData; compact?: boolean }) {
  return (
    <span className={`app-mark ${compact ? "app-mark-compact" : ""}`} style={{ background: app.color, color: app.ink }} aria-hidden="true">
      {app.logo ? <img src={app.logo} alt="" /> : app.monogram}
    </span>
  );
}

export function Header({ inverse = false, locale = "es", slug }: { inverse?: boolean; locale?: Locale; slug?: string }) {
  const t = getCopy(locale);
  const prefix = locale === "en" ? "/en" : "";
  const home = prefix || "/";
  const alternate = locale === "en" ? (slug ? `/${slug}` : "/") : (slug ? `/en/${slug}` : "/en");
  return (
    <header className={`site-header wrap ${inverse ? "header-inverse" : ""}`}>
      <Link href={home} className="brand" aria-label={`Horama Apps — ${t.nav.home}`}>
        <img src="/horama-mark.png" alt="" width="44" height="44" />
        <span>HORAMA<small>APPS</small></span>
      </Link>
      <nav aria-label={t.nav.label}>
        <Link href={`${prefix}/#apps`}>{t.nav.apps}</Link>
        <Link href={`${prefix}/#colaborar`}>{t.nav.partners}</Link>
      </nav>
      <Link className="language-switch" href={alternate} hrefLang={locale === "en" ? "es" : "en"} aria-label={locale === "en" ? "Cambiar a español" : "Switch to English"}>{locale === "en" ? "ES" : "EN"}</Link>
      <Link className="header-cta" href={`${prefix}/#colaborar`}>{t.nav.support} <ArrowIcon /></Link>
    </header>
  );
}
