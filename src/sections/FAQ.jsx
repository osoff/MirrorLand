import Container from "../components/layout/Container.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";

export default function FAQ({ items }) {
  return (
    <section id="faq" className="border-t border-white/10">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers, upfront."
          subtitle="Use a simple data structure for FAQs so it’s easy to add/remove entries."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {items.map((i) => (
            <details
              key={i.q}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-white">
                <span className="mr-2 text-white/60 group-open:hidden">+</span>
                <span className="mr-2 text-white/60 hidden group-open:inline">
                  –
                </span>
                {i.q}
              </summary>
              <p className="mt-3 text-sm leading-6 text-white/70">{i.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}


