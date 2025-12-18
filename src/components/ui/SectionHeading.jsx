export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}) {
  const alignClass =
    align === "center" ? "text-center mx-auto items-center" : "text-left";

  return (
    <div className={["max-w-2xl", alignClass].join(" ")}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-pretty text-sm leading-6 text-white/70 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}


