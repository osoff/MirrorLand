import Container from "../components/layout/Container.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";

export default function HowItWorks({ steps }) {
  return (
    <section id="how" className="border-t border-white/10">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="How it works"
          title="Edit copy, rearrange sections, ship."
          subtitle="A simple flow designed for iteration. Add or remove sections without losing clarity."
        />

        <ol className="mt-10 grid gap-4 sm:grid-cols-3">
          {steps.map((s, idx) => (
            <li
              key={s.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-xs font-semibold text-white/60">
                Step {idx + 1}
              </p>
              <h3 className="mt-2 text-base font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                {s.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}


