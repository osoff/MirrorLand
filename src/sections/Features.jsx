import Container from "../components/layout/Container.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Button from "../components/ui/Button.jsx";

export default function Features({ items }) {
  return (
    <section id="features" className="border-t border-white/10">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          title={"Почему Fugicar FC8\nлучше других регистраторов?"}
          subtitle="Сравнение с обычными видеорегистраторами — по удобству, внешнему виду и эксплуатации."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {items.map((f) => (
            <div
              key={f.title}
              className={[
                "relative overflow-hidden rounded-3xl border p-8 sm:p-10",
                f.featured
                  ? "border-fuchsia-400/40 shadow-[0_0_0_1px_rgba(232,121,249,0.22),0_0_36px_rgba(255,255,255,0.12),0_0_90px_rgba(217,70,239,0.28)]"
                  : "border-white/10 bg-white/3",
              ].join(" ")}>
              {f.featured ? (
                <>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-fuchsia-500/35 via-indigo-500/20 to-cyan-400/20"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-16 top-10 -z-10 h-48 w-48 rounded-full bg-fuchsia-400/35 blur-3xl"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 bottom-6 -z-10 h-56 w-56 rounded-full bg-cyan-300/25 blur-3xl"
                  />
                </>
              ) : null}
              <h3
                className={[
                  "text-balance text-xl font-semibold tracking-tight sm:text-2xl",
                  f.featured
                    ? "bg-linear-to-r from-fuchsia-200 via-white to-cyan-200 bg-clip-text filter-[drop-shadow(0_0_18px_rgba(255,255,255,0.55))_drop-shadow(0_0_46px_rgba(255,255,255,0.22))_drop-shadow(0_0_70px_rgba(217,70,239,0.35))] text-white"
                    : "text-white",
                ].join(" ")}>
                {f.title}
              </h3>
              {Array.isArray(f.points) ? (
                <ul className="mt-6 space-y-4 text-base leading-7 text-white">
                  {f.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className={[
                          "mt-2.5 inline-block shrink-0 h-2.5 w-2.5 rounded-full",
                          f.featured ? "bg-fuchsia-400/80" : "bg-white/40",
                        ].join(" ")}
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-base leading-7 text-white/75">
                  {f.description}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 flex">
          <Button
            href="#lead"
            variant="heroCta"
            size="lg"
            className="mx-auto h-18 w-2xl font-bold">
            Оформить заказ
          </Button>
        </div>
      </Container>
    </section>
  );
}
