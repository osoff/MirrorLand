import Container from "./Container.jsx";

export default function SiteFooter({ links, copyright }) {
  return (
    <footer className="border-t border-white/10">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/60">{copyright}</p>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Footer">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-white/60 no-underline hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}


