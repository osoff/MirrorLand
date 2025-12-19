import Container from "../components/layout/Container.jsx";
import Button from "../components/ui/Button.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import productImage from "../assets/product.png";

export default function FAQ({ specs = [] }) {
  return (
    <section id="faq" className="border-t border-white/10">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <SectionHeading
            title="Характеристики Fugicar FC8"
            subtitle="Основные параметры устройства."
          />
        </div>

        <div className="mt-10 grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-start">
          <div className="relative flex flex-col justify-between gap-6">
            <img
              src={productImage}
              alt="Fugicar FC8"
              className="w-full h-auto rounded-3xl object-contain max-w-[400px] mx-auto lg:max-w-none"
            />
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-4">
              <Button
                href="#order-form"
                variant="heroCta"
                size="lg"
                className="w-full sm:w-auto font-bold">
                Заказать со скидкой
              </Button>
              <div className="flex flex-col gap-1 items-center sm:items-start">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg text-white/50 line-through">
                    4780₽
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold text-white">
                    2390₽
                  </span>
                </div>
                <span className="text-sm text-white/70">Скидка 50%</span>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-fuchsia-400/40 bg-white/3 shadow-[0_0_0_1px_rgba(232,121,249,0.22),0_0_36px_rgba(255,255,255,0.12),0_0_90px_rgba(217,70,239,0.28)]">
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
            <dl className="relative divide-y divide-white/10">
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="grid gap-2 px-4 py-4 sm:px-8 sm:py-5 sm:grid-cols-2 sm:items-center sm:gap-6">
                  <dt className="text-xs sm:text-sm font-medium text-white/70">
                    {s.label}
                  </dt>
                  <dd className="text-xs sm:text-sm font-semibold text-white">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
