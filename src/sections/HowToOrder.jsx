import Container from "../components/layout/Container.jsx";
import Button from "../components/ui/Button.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import product2Image from "../assets/product2.png";

export default function HowToOrder() {
  const steps = [
    {
      title: "Заявка",
      description: "Оставьте заявку на нашем сайте.",
      hasButton: true,
    },
    {
      title: "Доставка и оплата",
      description:
        "Вы получаете заказ через 3-10 рабочих дней и оплачиваете после получения.",
    },
    {
      title: "Гарантии",
      description:
        "Мы тщательно проверяем все комплекты перед отправкой, поэтому можем гарантировать вам 100% качество продукции.",
    },
  ];

  return (
    <section id="how-to-order" className="border-t border-white/10">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          title="Как заказать"
          subtitle="Простой процесс оформления заказа."
        />

        <div className="mt-10 grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-fuchsia-400/30 bg-white/3 p-4 sm:p-6 backdrop-blur-sm shadow-[0_0_0_1px_rgba(232,121,249,0.15),0_0_24px_rgba(255,255,255,0.08),0_0_60px_rgba(217,70,239,0.2)]">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-fuchsia-500/20 text-base sm:text-lg font-bold text-fuchsia-400">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-white/70">
                      {step.description}
                    </p>
                    {step.hasButton && (
                      <div className="mt-4">
                        <Button href="#order-form" variant="heroCta" size="lg" className="w-full sm:w-auto">
                          Заказать со скидкой
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative order-1 lg:order-2">
            <img
              src={product2Image}
              alt="Fugicar FC8"
              className="w-full h-auto rounded-3xl object-contain max-w-[400px] mx-auto lg:max-w-none"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

