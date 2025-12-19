import Container from "../components/layout/Container.jsx";
import LeadFormCard from "../components/lead/LeadFormCard.jsx";
import heroImage from "../assets/hero.png";
import product2Image from "../assets/product2.png";
import { hero, brand } from "../content/landing.js";

export default function LeadFormSection() {
  return (
    <section
      id="order-form"
      className="relative overflow-hidden border-t border-white/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(217,70,239,0.25),rgba(24,24,27,0))]"
      />

      <Container className="py-16 sm:py-20">
        <div className="text-center -mb-8 sm:-mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 filter-[drop-shadow(0_0_12px_rgba(255,255,255,0.45))_drop-shadow(0_0_28px_rgba(217,70,239,0.25))]">
            {brand.name}
          </h2>
          <p className="text-base sm:text-lg text-white/70 px-4">
            Зеркало - бортовой компьютер + видеорегистратор
          </p>
        </div>

        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Левая часть - картинки и информация о скидке */}
          <div className="relative">
            <div className="relative">
              {/* Фоновая картинка hero - скрыта на мобильных */}
              <img
                src={heroImage}
                alt=""
                aria-hidden="true"
                className="hidden sm:block absolute -left-12 top-0 w-[400px] max-w-none -translate-y-1/4 rotate-[-8deg] opacity-60 transform-gpu filter-[drop-shadow(0_20px_60px_rgba(0,0,0,0.5))_drop-shadow(0_0_15px_rgba(255,255,255,0.2))] md:w-[500px] lg:w-[700px]"
              />

              {/* Основная картинка product2 */}
              <div className="relative z-10 mt-8 sm:mt-20 flex justify-center lg:justify-start">
                <img
                  src={product2Image}
                  alt="Fugicar FC8"
                  className="relative z-10 w-full max-w-[280px] h-auto rounded-3xl object-contain filter-[drop-shadow(0_24px_80px_rgba(0,0,0,0.6))_drop-shadow(0_0_20px_rgba(255,255,255,0.3))] sm:max-w-[400px] md:max-w-[500px]"
                />
              </div>
            </div>

            {/* Блок с информацией о скидке */}
            <div className="relative mt-6 sm:mt-8 overflow-hidden rounded-3xl border border-fuchsia-400/40 bg-white/3 p-4 sm:p-6 backdrop-blur-sm shadow-[0_0_0_1px_rgba(232,121,249,0.22),0_0_36px_rgba(255,255,255,0.12),0_0_90px_rgba(217,70,239,0.28)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-fuchsia-500/35 via-indigo-500/20 to-cyan-400/20"
              />
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  Специальное предложение
                </h3>
                <div className="flex items-baseline gap-2 sm:gap-3 mb-2">
                  <span className="text-xl sm:text-2xl text-white/50 line-through">
                    4780₽
                  </span>
                  <span className="text-3xl sm:text-4xl font-bold text-white">
                    2390₽
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center justify-center rounded-xl bg-fuchsia-500/20 px-3 py-1 text-xs sm:text-sm font-bold text-fuchsia-400">
                    -50%
                  </span>
                  <span className="text-sm sm:text-base text-white/80">
                    Экономия 2390₽
                  </span>
                </div>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/70">
                  Оставьте заявку сейчас и получите скидку 50% на Fugicar FC8
                </p>
              </div>
            </div>
          </div>

          {/* Правая часть - форма */}
          <div className="relative z-20">
            <LeadFormCard lead={hero.lead} id="lead-form" />
          </div>
        </div>
      </Container>
    </section>
  );
}
