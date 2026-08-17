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

function Horama3DMark() {
  return (
    <svg viewBox="0 0 400 400" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <g transform="translate(25 25) scale(.875)">
        <path d="M187 62 C153 35 104 47 92 89 C54 90 34 131 52 163 C20 190 31 239 66 255 C55 299 91 342 136 338 C167 336 188 316 188 286 V238" stroke="#111111" strokeWidth="18" />
        <path d="M213 62 C247 35 296 47 308 89 C346 90 366 131 348 163 C380 190 369 239 334 255 C345 299 309 342 264 338 C233 336 212 316 212 286 V238" stroke="#111111" strokeWidth="18" />
        <path d="M151 137 C134 123 112 136 112 157 V245 C112 268 139 279 155 260 C160 254 162 246 162 235" stroke="#111111" strokeWidth="18" />
        <path d="M249 137 C266 123 288 136 288 157 V245 C288 268 261 279 245 260 C240 254 238 246 238 235" stroke="#111111" strokeWidth="18" />
        <path d="M200 150 244 176 200 202 156 176Z" stroke="#111111" strokeWidth="12" />
        <path d="M156 176v54l44 26 44-26v-54M200 202v54" stroke="#111111" strokeWidth="12" />
        <path d="m156 211 44 26 44-26" stroke="#111111" strokeWidth="12" />
        <circle cx="61" cy="255" r="11" fill="#fff" stroke="#ffc400" strokeWidth="8" />
        <circle cx="310" cy="90" r="11" fill="#fff" stroke="#ffc400" strokeWidth="8" />
      </g>
    </svg>
  );
}

export function AppMark({ app, compact = false }: { app: AppData; compact?: boolean }) {
  return (
    <span className={`app-mark app-mark-${app.slug} ${compact ? "app-mark-compact" : ""}`} style={{ background: app.color, color: app.ink }} aria-hidden="true">
      {app.slug === "horama-3d" ? <Horama3DMark /> : app.logo ? <img src={app.logo} alt="" /> : app.monogram}
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
