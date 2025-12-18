const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-fuchsia-500 text-white hover:bg-fuchsia-400 active:bg-fuchsia-500/90",
  secondary:
    "bg-white/10 text-white hover:bg-white/15 active:bg-white/10 border border-white/10",
  ghost: "text-white hover:bg-white/10 active:bg-white/5",
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

export default function Button({
  className = "",
  variant = "primary",
  size = "md",
  href,
  ...props
}) {
  const classes = [base, variants[variant] ?? variants.primary, sizes[size] ?? sizes.md, className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return <a className={classes} href={href} {...props} />;
  }

  return <button className={classes} type="button" {...props} />;
}


