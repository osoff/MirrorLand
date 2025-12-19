import logo from "../../assets/logo.png";

export default function Logo({ name = "MirrorLand", alt = "Logo" }) {
  return (
    <div className="inline-flex items-center gap-2">
      <img src={logo} alt={alt} className="h-18 w-20" />
      <span className="text-xl font-semibold text-white filter-[drop-shadow(0_0_12px_rgba(255,255,255,0.45))_drop-shadow(0_0_28px_rgba(217,70,239,0.25))]">
        {name}
      </span>
      <div className="w-px h-[40px] bg-fuchsia-500 hidden lg:block" />
      <div className="max-w-xs text-sm text-white/70 hidden lg:block">
        Производитель видеорегистраторов&nbsp;с&nbsp;2012&nbsp;года
      </div>
    </div>
  );
}
