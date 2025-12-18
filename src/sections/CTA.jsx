import Container from "../components/layout/Container.jsx";
import Button from "../components/ui/Button.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";

export default function CTA({ brandName }) {
  return (
    <section id="cta" className="border-t border-white/10">
      <Container className="py-16 sm:py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 sm:p-10">
          <SectionHeading
            eyebrow="Get started"
            title={`Launch ${brandName} with a clean structure.`}
            subtitle="Replace copy, wire up your real CTAs, then iterate. This section is a great place for a form or newsletter."
          />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#" size="lg">
              Email us
            </Button>
            <Button href="#features" variant="secondary" size="lg">
              Back to features
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}


