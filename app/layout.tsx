import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://horama-apps.github.io"),
  title: "Horama Apps — Ideas que merecen existir",
  description: "Incubadora de aplicaciones independientes. Patrocina, colabora o invierte en productos digitales con futuro.",
  icons: { icon: "/horama-mark.png", shortcut: "/horama-mark.png" },
  openGraph: {
    title: "Horama Apps — Ideas que merecen existir",
    description: "Cinco productos independientes buscando comunidad, alianzas e impulso.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Horama Apps — Ideas que merecen existir" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Horama Apps — Ideas que merecen existir",
    description: "Cinco productos independientes buscando comunidad, alianzas e impulso.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
