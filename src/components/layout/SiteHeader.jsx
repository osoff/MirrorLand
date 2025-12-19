import Container from "./Container.jsx";
import Button from "../ui/Button.jsx";
import Logo from "../ui/Logo.jsx";
import Icon from "../ui/Icon.jsx";

export default function SiteHeader({ brandName, navLinks = [], points = [] }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="no-underline">
          <Logo name={brandName} />
        </a>

        {points.length ? (
          <div
            className="hidden items-center gap-3 md:flex"
            aria-label="Key points">
            {points.slice(0, 2).map((p) => (
              <div
                key={typeof p === "string" ? p : p.text}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3 py-1 text-sm text-white/80">
                {typeof p === "string" ? (
                  <span className="h-2 w-2 rounded-full bg-fuchsia-400/80" />
                ) : (
                  <Icon name={p.icon} className="h-4 w-4 text-fuchsia-200" />
                )}
                <span className="whitespace-nowrap">
                  {typeof p === "string" ? p : p.text}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <nav
            className="hidden items-center gap-6 md:flex"
            aria-label="Primary">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/70 no-underline hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-2">
          <Button href="#lead" size="sm">
            Заказать
          </Button>
        </div>
      </Container>
    </header>
  );
}
