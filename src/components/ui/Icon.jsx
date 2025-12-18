const icons = {
  users: (
    <path d="M16 11.5c1.657 0 3-1.455 3-3.25S17.657 5 16 5s-3 1.455-3 3.25 1.343 3.25 3 3.25ZM8 11c1.657 0 3-1.343 3-3S9.657 5 8 5 5 6.343 5 8s1.343 3 3 3Zm8 2c-1.96 0-3.64.69-4.75 1.79.36.55.62 1.17.75 1.85C13.09 16.11 14.42 16 16 16c2.87 0 5.18.98 6 2.25V19H12v-.5c0-.19-.02-.38-.05-.56C12.8 15.36 14.17 14 16 14ZM8 13c-3.87 0-7 1.58-7 3.5V19h10.1c.58-1.02 1.57-1.89 2.86-2.52C13.17 14.45 10.78 13 8 13Z" />
  ),
  shieldCheck: (
    <path d="M12 2 4 5.5V12c0 5.08 3.41 9.76 8 10 4.59-.24 8-4.92 8-10V5.5L12 2Zm4.7 7.7-5 5a1 1 0 0 1-1.4 0l-2-2a1 1 0 1 1 1.4-1.4l1.3 1.29 4.3-4.29a1 1 0 1 1 1.4 1.4Z" />
  ),
};

export default function Icon({ name, className = "h-4 w-4" }) {
  const path = icons[name];
  if (!path) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true">
      {path}
    </svg>
  );
}


