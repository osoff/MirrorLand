export const brand = {
  name: "Fugicar FC8",
};

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "Характеристики", href: "#faq" },
];

export const headerPoints = [
  { icon: "users", text: "выбор 255 тысяч автолюбителей" },
  { icon: "shieldCheck", text: "3 года гарантии" },
];

export const hero = {
  kicker: "Скидка 50% + консультация",
  title: "Зеркало - бортовой компьютер",
  subtitle: "+ видеорегистратор",
  primaryCta: { label: "Оставить заявку", href: "#lead" },
  secondaryCta: { label: "Смотреть цены", href: "#pricing" },
  usps: [
    {
      icon: "chip",
      title: "Бортовой компьютер в зеркале",
      text: "Удобный формат без лишних устройств на панели.",
    },
    {
      icon: "camera",
      title: "Встроенный видеорегистратор",
      text: "Безопаснее и аккуратнее в салоне.",
    },

    {
      icon: "shieldCheck",
      title: "Гарантия 3 года",
      text: "Сервис и поддержка после покупки.",
    },
  ],
  lead: {
    badge: { icon: "percentBadge", text: "-50%" },
    title: "Оставьте заявку",
    subtitle: "Перезвоним и уточним детали заказа и сделаем скидку 50%",
    nameLabel: "Имя",
    namePlaceholder: "Иван",
    phoneLabel: "Телефон",
    phonePlaceholder: "+7 (___) ___-__-__",
    submitLabel: "Оформить заказ",
  },
};

export const features = [
  {
    title: "Обычный регистратор",
    points: [
      "После заполнения памяти нужно самостоятельно удалять файлы и осуществлять перезапись",
      "Требует ручного включения и отключения",
      "Очень ограниченный набор функций",
      "Узкий угол обзора",
    ],
  },
  {
    title: "Fugicar FC8",
    featured: true,
    points: [
      "Когда память заполняется, устройство удаляет наиболее старые материалы для сохранения новых",
      "Не требует ручного включения и отключения",
      "Имеет датчик движения, систему «Антисон», радар-детектор и др",
      "Широкий угол обзора",
    ],
  },
];

export const steps = [
  {
    title: "Edit content",
    description:
      "Update copy in one file and see it reflected across sections.",
  },
  {
    title: "Tweak layout",
    description:
      "Swap sections, add new ones, or rearrange in `LandingPage.jsx`.",
  },
  {
    title: "Ship",
    description:
      "Deploy with Vite build output. Keep it simple or grow it into an app.",
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    price: "$0",
    note: "Perfect for prototypes",
    features: ["Landing skeleton", "Tailwind styles", "Reusable components"],
    cta: { label: "Use template", href: "#cta" },
  },
  {
    name: "Pro",
    price: "$19",
    note: "For serious launches",
    featured: true,
    features: ["All Starter", "Extra sections", "Polished UI defaults"],
    cta: { label: "Choose Pro", href: "#cta" },
  },
  {
    name: "Team",
    price: "$49",
    note: "For teams",
    features: [
      "All Pro",
      "Design system growth",
      "Collaboration-ready structure",
    ],
    cta: { label: "Talk to us", href: "#cta" },
  },
];

export const faqs = [
  {
    q: "Is this a full design system?",
    a: "No — it’s a clean structure and a small set of primitives, meant to be customized.",
  },
  {
    q: "Do I need extra Tailwind config?",
    a: "Not necessarily. This project uses Tailwind v4 via `@tailwindcss/vite`.",
  },
  {
    q: "Can I add more pages later?",
    a: "Yes. Add more files under `src/pages` and swap in routing when you need it.",
  },
];

export const specs = [
  { label: "Дисплей", value: '4.0" IPS' },
  { label: "Разрешение экрана", value: "1280×480" },
  { label: "Карта памяти", value: "до 512 GB" },
  { label: "Основная камера", value: "Full HD 1080 px | 170°" },
  { label: "Разрешение видео", value: "1920×1080 px, 30 fps" },
  { label: "Микрофон", value: "Встроенный, шумоподавление" },
  { label: "Циклическая запись", value: "есть" },
];

export const footer = {
  links: [
    { label: "Политика конфиденциальности", href: "/privacy" },
    { label: "Пользовательское соглашение", href: "/terms" },
  ],
  copyright: `${new Date().getFullYear()} ${brand.name}`,
};
