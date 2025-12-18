const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-fuchsia-500 text-white hover:bg-fuchsia-400 active:bg-fuchsia-500/90",
  secondary:
    "bg-white/10 text-white hover:bg-white/15 active:bg-white/10 border border-white/10",
  ghost: "text-white hover:bg-white/10 active:bg-white/5",
  heroCta:
    "h-12 rounded-2xl bg-linear-to-r from-fuchsia-500 to-indigo-400 px-10 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:brightness-110 active:brightness-95",
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
  // Put `size` before `variant` so special variants can override padding/height.
  const classes = [
    base,
    sizes[size] ?? sizes.md,
    variants[variant] ?? variants.primary,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return <a className={classes} href={href} {...props} />;
  }

  return <button className={classes} type="button" {...props} />;
}
