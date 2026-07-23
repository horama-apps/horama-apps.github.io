"use client";

import { useRef } from "react";
import type { Locale } from "../lib/apps";

const copy = {
  es: {
    eyebrow: "HABLEMOS",
    title: "¿Qué podemos construir juntos?",
    intro: "Cuéntanos qué producto te interesa y cómo imaginas la colaboración. Te responderemos directamente por correo.",
    name: "Nombre",
    email: "Correo de trabajo",
    organization: "Organización",
    app: "Aplicación de interés",
    appPrompt: "Selecciona una aplicación",
    collaboration: "Tipo de colaboración",
    collaborationPrompt: "Selecciona una opción",
    options: ["Patrocinio", "Partnership", "Piloto", "Funding", "Infraestructura / hosting", "Distribución", "Colaboración técnica", "Otro"],
    contribution: "Rango o forma de apoyo",
    contributionPrompt: "Podemos conversarlo",
    contributions: ["Apoyo en especie", "Menos de USD $5k", "USD $5k–$25k", "USD $25k–$100k", "Más de USD $100k"],
    message: "¿Qué tienes en mente?",
    placeholder: "Objetivo, oportunidad, comunidad o recursos que podríamos compartir…",
    consent: "Acepto que Horama Apps me contacte sobre esta conversación.",
    send: "Enviar a Horama",
    close: "Cerrar formulario",
  },
  en: {
    eyebrow: "LET’S TALK",
    title: "What can we build together?",
    intro: "Tell us which product interests you and what collaboration could look like. We will reply directly by email.",
    name: "Name",
    email: "Work email",
    organization: "Organization",
    app: "Product of interest",
    appPrompt: "Select a product",
    collaboration: "Collaboration type",
    collaborationPrompt: "Select an option",
    options: ["Sponsorship", "Partnership", "Pilot", "Funding", "Infrastructure / hosting", "Distribution", "Technical collaboration", "Other"],
    contribution: "Support type or range",
    contributionPrompt: "Let’s discuss it",
    contributions: ["In-kind support", "Under USD $5k", "USD $5k–$25k", "USD $25k–$100k", "Over USD $100k"],
    message: "What do you have in mind?",
    placeholder: "Goal, opportunity, community, or resources we could share…",
    consent: "I agree that Horama Apps may contact me about this conversation.",
    send: "Send to Horama",
    close: "Close form",
  },
} as const;

export function ContactForm({ locale, triggerLabel }: { locale: Locale; triggerLabel: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const t = copy[locale];

  return <>
    <button className="button button-yellow" type="button" onClick={() => dialogRef.current?.showModal()}>{triggerLabel} <span aria-hidden="true">↗</span></button>
    <dialog className="contact-dialog" ref={dialogRef} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}>
      <div className="contact-panel">
        <button className="contact-close" type="button" aria-label={t.close} onClick={() => dialogRef.current?.close()}>×</button>
        <div className="contact-intro"><p className="section-label">{t.eyebrow}</p><h2>{t.title}</h2><p>{t.intro}</p></div>
        <form action="https://formsubmit.co/horama.3d@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="Nueva conversación — Horama Apps" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://horama-apps.github.io/?sent=true#colaborar" />
          <div className="contact-grid">
            <label><span>{t.name}</span><input name="name" autoComplete="name" required /></label>
            <label><span>{t.email}</span><input name="email" type="email" autoComplete="email" required /></label>
            <label><span>{t.organization}</span><input name="organization" autoComplete="organization" /></label>
            <label><span>{t.app}</span><select name="app" required defaultValue=""><option value="" disabled>{t.appPrompt}</option><option>Horama Apps</option><option>Framewise</option><option>ITP</option><option>Horama 3D</option><option>MED</option></select></label>
            <label><span>{t.collaboration}</span><select name="collaboration_type" required defaultValue=""><option value="" disabled>{t.collaborationPrompt}</option>{t.options.map((option) => <option key={option}>{option}</option>)}</select></label>
            <label><span>{t.contribution}</span><select name="support_range" defaultValue=""><option value="">{t.contributionPrompt}</option>{t.contributions.map((option) => <option key={option}>{option}</option>)}</select></label>
            <label className="contact-message"><span>{t.message}</span><textarea name="message" rows={5} placeholder={t.placeholder} required /></label>
          </div>
          <label className="contact-consent"><input type="checkbox" name="contact_consent" value="yes" required /><span>{t.consent}</span></label>
          <button className="contact-submit" type="submit">{t.send} <span aria-hidden="true">→</span></button>
        </form>
      </div>
    </dialog>
  </>;
}
