import Container from "../components/layout/Container.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";

export default function Features({ items }) {
  return (
    <section id="features" className="border-t border-white/10">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Features"
          title="A structure that stays clean as you grow."
          subtitle="Keep your landing readable: sections are isolated, content is data-driven, and primitives are reusable."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-base font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


