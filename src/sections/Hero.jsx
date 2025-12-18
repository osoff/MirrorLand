import Container from "../components/layout/Container.jsx";
import Button from "../components/ui/Button.jsx";
import LeadFormCard from "../components/lead/LeadFormCard.jsx";
import Icon from "../components/ui/Icon.jsx";
import heroImage from "../assets/hero.png";

export default function Hero({ data }) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(217,70,239,0.35),rgba(24,24,27,0))]"
      />

      <Container className="py-16 sm:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="relative z-20 lg:col-span-7">
            {data.kicker ? (
              <p className="text-sm font-medium text-white/70">{data.kicker}</p>
            ) : null}
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl filter-[drop-shadow(0_0_12px_rgba(255,255,255,0.45))_drop-shadow(0_0_28px_rgba(217,70,239,0.25))]">
              {data.title}
            </h1>
            <p className="mt-5 text-pretty text-base leading-7 text-white sm:text-xl">
              {data.subtitle}
            </p>

            {data.usps?.length ? (
              <ul className="mt-6 space-y-3 max-w-[340px]">
                {data.usps.map((u) => (
                  <li key={u.title} className="flex gap-3">
                    <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-2xl bg-white/5 text-fuchsia-200 ring-1 ring-white/10">
                      <Icon name={u.icon} className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {u.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-white/70">
                        {u.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Button href={data.primaryCta.href} variant="heroCta">
                {data.primaryCta.label}
              </Button>
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg text-white/50 line-through">
                    4780₽
                  </span>
                  <span className="text-3xl font-bold text-white">2390₽</span>
                </div>
                <span className="text-sm text-white/70">Скидка 50%</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 lg:col-span-5">
            <div className="relative">
              <div className="relative z-0 min-h-[420px] flex justify-end">
                <img
                  src={heroImage}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute -z-10 -left-24 top-[75%] w-[620px] max-w-none -translate-y-1/2 rotate-[-10deg] opacity-90 transform-gpu filter-[drop-shadow(0_28px_80px_rgba(0,0,0,0.6))_drop-shadow(0_0_18px_rgba(255,255,255,0.28))] sm:-left-36 sm:w-[720px] lg:-left-[420px] lg:w-[860px]"
                />

                <div className="relative z-10 max-w-[380px]">
                  <LeadFormCard lead={data.lead} id="lead" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-30 mt-12 grid gap-4 sm:grid-cols-3">
          {data.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl backdrop-blur-sm border border-white/10 bg-white/3 p-5">
              <p className="text-2xl font-semibold text-white">{s.value}</p>
              <p className="mt-1 text-sm text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
