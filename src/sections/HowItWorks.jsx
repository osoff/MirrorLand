import Container from "../components/layout/Container.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";

export default function HowItWorks() {
  return (
    <section id="how" className="border-t border-white/10">
      <Container className="py-16 sm:py-20">
        <SectionHeading align="center" className="text-3xl">
          <span className="font-bold text-fuchsia-500 text-4xl">
            Fugicar FC8
          </span>{" "}
          — бортовой компьютер в стильном ультратонком корпусе
        </SectionHeading>

        <div className="mt-10">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl shadow-fuchsia-500/40">
            <div className="pt-[56.25%]" />
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/2HpwjHqV0aE?rel=0"
              title="Fugicar — видео"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <p className="w-full mt-8  text-pretty text-base leading-7 text-white/95 sm:text-lg">
            Все оригинальные устройства «Fugicar» производятся на современном,
            высокотехнологичном оборудовании, что позволило нам создать
            уникальный,{" "}
            <span className="font-bold text-xl text-fuchsia-500">
              ультратонкий корпус толщиной всего 8 мм
            </span>
            , заключивший в себя самый богатый внутренний функционал среди
            аналогов
          </p>
        </div>
      </Container>
    </section>
  );
}
