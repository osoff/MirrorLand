import SiteHeader from "../components/layout/SiteHeader.jsx";
import SiteFooter from "../components/layout/SiteFooter.jsx";

import Hero from "../sections/Hero.jsx";
import Features from "../sections/Features.jsx";
import HowItWorks from "../sections/HowItWorks.jsx";
import Pricing from "../sections/Pricing.jsx";
import FAQ from "../sections/FAQ.jsx";
import CTA from "../sections/CTA.jsx";

import {
  brand,
  navLinks,
  headerPoints,
  hero,
  features,
  steps,
  pricingTiers,
  faqs,
  footer,
} from "../content/landing.js";

export default function LandingPage() {
  const heroData = {
    kicker: brand.tagline,
    title: hero.title,
    subtitle: hero.subtitle,
    primaryCta: hero.primaryCta,
    secondaryCta: hero.secondaryCta,
    stats: [
      { value: "Vite", label: "Fast dev & builds" },
      { value: "React", label: "Component-first UI" },
      { value: "Tailwind", label: "Utility styling" },
    ],
  };

  return (
    <div className="min-h-dvh">
      <SiteHeader
        brandName={brand.name}
        navLinks={navLinks}
        points={headerPoints}
      />

      <main>
        <Hero data={heroData} />
        <Features items={features} />
        <HowItWorks steps={steps} />
        <Pricing tiers={pricingTiers} />
        <FAQ items={faqs} />
        <CTA brandName={brand.name} />
      </main>

      <SiteFooter links={footer.links} copyright={footer.copyright} />
    </div>
  );
}
