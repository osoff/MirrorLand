export const brand = {
  name: "Fugicar FC8",
};

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const headerPoints = [
  { icon: "users", text: "выбор 255 тысяч автолюбителей" },
  { icon: "shieldCheck", text: "3 года гарантии" },
];

export const hero = {
  title: "Build your landing page in days, not weeks.",
  subtitle:
    "A tidy React + Tailwind structure with reusable sections, UI primitives, and a layout you can extend.",
  primaryCta: { label: "Get started", href: "#cta" },
  secondaryCta: { label: "See pricing", href: "#pricing" },
};

export const features = [
  {
    title: "Sections-first architecture",
    description:
      "Hero, Features, Pricing, FAQ and more live in `src/sections` so the page stays readable.",
  },
  {
    title: "Reusable UI primitives",
    description:
      "Buttons, container, headings — small building blocks you can reuse across pages.",
  },
  {
    title: "Data-driven content",
    description:
      "Text and lists are centralized in `src/content/landing.js` to avoid JSX clutter.",
  },
];

export const steps = [
  {
    title: "Edit content",
    description:
      "Update copy in one file and see it reflected across sections.",
  },
  {
    title: "Tweak layout",
    description:
      "Swap sections, add new ones, or rearrange in `LandingPage.jsx`.",
  },
  {
    title: "Ship",
    description:
      "Deploy with Vite build output. Keep it simple or grow it into an app.",
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    price: "$0",
    note: "Perfect for prototypes",
    features: ["Landing skeleton", "Tailwind styles", "Reusable components"],
    cta: { label: "Use template", href: "#cta" },
  },
  {
    name: "Pro",
    price: "$19",
    note: "For serious launches",
    featured: true,
    features: ["All Starter", "Extra sections", "Polished UI defaults"],
    cta: { label: "Choose Pro", href: "#cta" },
  },
  {
    name: "Team",
    price: "$49",
    note: "For teams",
    features: [
      "All Pro",
      "Design system growth",
      "Collaboration-ready structure",
    ],
    cta: { label: "Talk to us", href: "#cta" },
  },
];

export const faqs = [
  {
    q: "Is this a full design system?",
    a: "No — it’s a clean structure and a small set of primitives, meant to be customized.",
  },
  {
    q: "Do I need extra Tailwind config?",
    a: "Not necessarily. This project uses Tailwind v4 via `@tailwindcss/vite`.",
  },
  {
    q: "Can I add more pages later?",
    a: "Yes. Add more files under `src/pages` and swap in routing when you need it.",
  },
];

export const footer = {
  links: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Contact", href: "#cta" },
  ],
  copyright: `© ${new Date().getFullYear()} MirrorLand`,
};
