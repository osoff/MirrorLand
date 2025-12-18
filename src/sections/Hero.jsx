import Container from "../components/layout/Container.jsx";
import Button from "../components/ui/Button.jsx";

export default function Hero({ data }) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(217,70,239,0.35),rgba(24,24,27,0))]"
      />

      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-white/70">{data.kicker}</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {data.title}
          </h1>
          <p className="mt-5 text-pretty text-base leading-7 text-white/70 sm:text-lg">
            {data.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={data.primaryCta.href} size="lg">
              {data.primaryCta.label}
            </Button>
            <Button href={data.secondaryCta.href} variant="secondary" size="lg">
              {data.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {data.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-2xl font-semibold text-white">{s.value}</p>
              <p className="mt-1 text-sm text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


