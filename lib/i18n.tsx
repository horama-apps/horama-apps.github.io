import type { Locale } from "./apps";

const translations = {
  es: {
    nav: { apps: "Aplicaciones", partners: "Partnerships", support: "Apoyar a Horama", home: "Inicio", label: "Navegación principal" },
    home: {
      eyebrow: "INCUBADORA DE PRODUCTOS DIGITALES", title: <>Software con futuro necesita <em>tiempo para crecer.</em></>,
      together: "Construyamos juntos", explore: "Conoce las apps", made: "HECHO EN MÉXICO", products: "3 PRODUCTOS",
      ecosystem: "Ecosistema de aplicaciones Horama", orbit: <>ideas<br />en órbita</>, open: "Abrir",
      thesisLabel: "01 — NUESTRA TESIS", thesisTitle: "Las buenas herramientas no deberían morir por falta de servidor.",
      thesisBody: "Prototipamos, publicamos y escuchamos. Cuando una app encuentra a su comunidad, buscamos la alianza correcta para convertir tracción en continuidad.", potential: "potencial cuando producto y comunidad se encuentran",
      portfolioLabel: "02 — PORTAFOLIO VIVO", portfolioTitle: <>Tres apuestas.<br />Una misma casa.</>,
      portfolioBody: "Cada producto conserva su identidad y comparte una promesa: resolver algo real, crecer de forma abierta y encontrar a las personas correctas para llevarlo más lejos.", headers: ["PRODUCTO", "EN UNA FRASE", "VERSIÓN", "ESTADO"],
      modelLabel: "03 — CÓMO CRECEMOS", model: [["Explorar", "Convertimos una necesidad concreta en un producto pequeño, útil y demostrable."], ["Validar", "Publicamos temprano, medimos interés y construimos con feedback de usuarios reales."], ["Aliarnos", "Sumamos patrocinio, infraestructura, distribución o capital para sostener lo que funciona."], ["Escalar", "Transformamos experimentos prometedores en servicios confiables y de largo plazo."]],
      partnerLabel: "04 — HAGAMOS EQUIPO", partnerTitle: <>No buscamos solo inversión.<br /><em>Buscamos cómplices.</em></>,
      partnerBody: "Si una app conecta con tu industria, comunidad o visión, conversemos. Podemos diseñar un patrocinio, un partnership técnico o una ruta de funding a la medida.", talk: "Abrir conversación", motto: "Ideas que merecen existir.", footer: <>Construyendo software independiente<br />desde México para el mundo.</>, footerApps: "Aplicaciones ↑",
    },
    product: {
      back: "← Volver al portafolio", appOf: "UNA APP DE HORAMA", roadmapButton: "Ver roadmap", status: "PRODUCT STATUS", stage: "ETAPA ACTUAL", building: "BUILDING IN PUBLIC · HORAMA APPS", opportunity: "01 — LA OPORTUNIDAD", builtFor: "CONSTRUIDO PARA", features: "02 — LO QUE HACE", roadmap: "03 — ROADMAP", roadmapTitle: <>De experimento<br />a producto sostenible.</>, roadmapBody: "Una ruta pública para saber qué ya existe, qué estamos construyendo y qué sigue.", states: { done: "COMPLETADO", current: "EN CONSTRUCCIÓN", next: "SIGUIENTE" }, needs: "04 — LO QUE NECESITAMOS", help: "Ayuda a que", grow: "siga creciendo.", contact: "Contactar a Horama Apps", pending: "POR CONFIRMAR",
    },
  },
  en: {
    nav: { apps: "Apps", partners: "Partnerships", support: "Support Horama", home: "Home", label: "Main navigation" },
    home: {
      eyebrow: "DIGITAL PRODUCT INCUBATOR", title: <>Software with a future needs <em>time to grow.</em></>,
      together: "Let’s build together", explore: "Meet the apps", made: "MADE IN MEXICO", products: "3 PRODUCTS",
      ecosystem: "Horama application ecosystem", orbit: <>ideas<br />in orbit</>, open: "Open",
      thesisLabel: "01 — OUR THESIS", thesisTitle: "Good tools should not disappear for lack of a server.", thesisBody: "We prototype, publish, and listen. When an app finds its community, we seek the right alliance to turn traction into continuity.", potential: "potential when product and community meet",
      portfolioLabel: "02 — LIVING PORTFOLIO", portfolioTitle: <>Three bets.<br />One home.</>, portfolioBody: "Each product keeps its own identity and shares one promise: solve something real, grow openly, and find the right people to take it further.", headers: ["PRODUCT", "IN ONE SENTENCE", "VERSION", "STATUS"],
      modelLabel: "03 — HOW WE GROW", model: [["Explore", "We turn a specific need into a small, useful, demonstrable product."], ["Validate", "We publish early, measure interest, and build with feedback from real users."], ["Partner", "We add sponsorship, infrastructure, distribution, or capital to sustain what works."], ["Scale", "We turn promising experiments into reliable, long-term services."]],
      partnerLabel: "04 — LET’S TEAM UP", partnerTitle: <>We are not only looking for investment.<br /><em>We are looking for accomplices.</em></>, partnerBody: "If an app connects with your industry, community, or vision, let’s talk. We can shape a sponsorship, technical partnership, or funding path together.", talk: "Start a conversation", motto: "Ideas that deserve to exist.", footer: <>Building independent software<br />from Mexico for the world.</>, footerApps: "Apps ↑",
    },
    product: {
      back: "← Back to portfolio", appOf: "A HORAMA APP", roadmapButton: "View roadmap", status: "PRODUCT STATUS", stage: "CURRENT STAGE", building: "BUILDING IN PUBLIC · HORAMA APPS", opportunity: "01 — THE OPPORTUNITY", builtFor: "BUILT FOR", features: "02 — WHAT IT DOES", roadmap: "03 — ROADMAP", roadmapTitle: <>From experiment<br />to sustainable product.</>, roadmapBody: "A public path showing what exists, what we are building, and what comes next.", states: { done: "COMPLETED", current: "IN PROGRESS", next: "NEXT" }, needs: "04 — WHAT WE NEED", help: "Help", grow: "keep growing.", contact: "Contact Horama Apps", pending: "TO CONFIRM",
    },
  },
} as const;

export function getCopy(locale: Locale) { return translations[locale]; }
