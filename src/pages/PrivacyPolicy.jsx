import SiteHeader from "../components/layout/SiteHeader.jsx";
import SiteFooter from "../components/layout/SiteFooter.jsx";
import Container from "../components/layout/Container.jsx";
import { brand, footer } from "../content/landing.js";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-dvh">
      <SiteHeader brandName={brand.name} navLinks={[]} points={[]} />

      <main>
        <section className="py-16 sm:py-20">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-8">
                Политика конфиденциальности
              </h1>

              <div className="prose prose-invert prose-lg max-w-none space-y-6">
                <p className="text-white/80 leading-relaxed">
                  Наш интернет-магазин уважительно относится к правам клиента.
                  Соблюдается строгая конфиденциальность при оформлении заказа.
                  Сведения надёжно сохраняются и защищены от передачи.
                </p>

                <p className="text-white/80 leading-relaxed">
                  Согласием на обработку данных клиента исключительно с целью
                  оказания услуг является размещение заказа на сайте.
                </p>

                <p className="text-white/80 leading-relaxed">
                  К персональным данным относится личная информация о клиенте:
                  домашний адрес; имя, фамилия, отчество; сведения о рождении;
                  имущественное, семейное положение; личные контакты (телефон,
                  электронная почта) и прочие сведения, которые перечислены в
                  Законе РФ № 152-ФЗ «О персональных данных» от 27 июля 2006 г.
                </p>

                <p className="text-white/80 leading-relaxed">
                  Клиент вправе отказаться от обработки персональных данных.
                  Нами в данном случае гарантируется удаление с сайта всех
                  персональных данных в трёхдневный срок в рабочее время.
                  Подобный отказ клиент может оформить простым электронным
                  письмом на адрес, указанный на странице нашего сайта.
                </p>
              </div>

              <div className="mt-12">
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl bg-fuchsia-500 text-white hover:bg-fuchsia-400 active:bg-fuchsia-500/90 px-6 py-3 font-medium transition focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60 focus:ring-offset-2 focus:ring-offset-zinc-950">
                  Вернуться на главную
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter links={footer.links} copyright={footer.copyright} />
    </div>
  );
}
