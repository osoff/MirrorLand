import Container from "../components/layout/Container.jsx";
import Button from "../components/ui/Button.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";

export default function Pricing({ tiers }) {
  return (
    <section id="pricing" className="border-t border-white/10">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple tiers for a simple landing."
          subtitle="Swap this section for your real pricing, or remove it entirely — the structure stays intact."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={[
                "relative rounded-2xl border bg-white/[0.03] p-6",
                t.featured
                  ? "border-fuchsia-400/40 shadow-[0_0_0_1px_rgba(232,121,249,0.25)]"
                  : "border-white/10",
              ].join(" ")}
            >
              {t.featured ? (
                <div className="absolute right-4 top-4 rounded-full bg-fuchsia-500/15 px-3 py-1 text-xs font-semibold text-fuchsia-200">
                  Popular
                </div>
              ) : null}

              <h3 className="text-base font-semibold text-white">{t.name}</h3>
              <p className="mt-1 text-sm text-white/60">{t.note}</p>

              <p className="mt-6 text-4xl font-semibold tracking-tight text-white">
                {t.price}
              </p>

              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-fuchsia-400/70" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  href={t.cta.href}
                  variant={t.featured ? "primary" : "secondary"}
                  className="w-full"
                >
                  {t.cta.label}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


