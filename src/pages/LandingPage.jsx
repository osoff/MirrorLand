import SiteHeader from "../components/layout/SiteHeader.jsx";
import SiteFooter from "../components/layout/SiteFooter.jsx";

import Hero from "../sections/Hero.jsx";
import Features from "../sections/Features.jsx";
import HowItWorks from "../sections/HowItWorks.jsx";
import FAQ from "../sections/FAQ.jsx";
import HowToOrder from "../sections/HowToOrder.jsx";
import LeadFormSection from "../sections/LeadFormSection.jsx";
import Reviews from "../sections/Reviews.jsx";
import CTA from "../sections/CTA.jsx";

import {
  brand,
  navLinks,
  headerPoints,
  hero,
  features,
  specs,
  footer,
} from "../content/landing.js";

export default function LandingPage() {
  const heroData = {
    kicker: hero.kicker,
    title: hero.title,
    subtitle: hero.subtitle,
    primaryCta: hero.primaryCta,
    secondaryCta: hero.secondaryCta,
    usps: hero.usps,
    lead: hero.lead,
    stats: [
      {
        value: "Уникальная технология",
        label: "С использованием камеры регистратора в дневное и ночное время",
      },
      {
        value: "Постоянно в сети",
        label: "Регистратор работает даже когда вы спите",
      },
      { value: "Простая установка", label: "На любую марку автомобиля" },
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
        <HowItWorks />
        <FAQ specs={specs} />
        <HowToOrder />
        <LeadFormSection />

        <Reviews />
      </main>

      <SiteFooter links={footer.links} copyright={footer.copyright} />
    </div>
  );
}
