import { useState } from "react";

export default function LeadFormCard({ lead, id = "lead" }) {
  const [status, setStatus] = useState("idle"); // idle | success
  const [phoneDigits, setPhoneDigits] = useState("");
  const [agreed, setAgreed] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      phone: phoneDigits ? `+${phoneDigits}` : "",
    };

    // TODO: wire to backend / CRM
    console.log("Lead:", payload);

    setStatus("success");
    setPhoneDigits("");
    e.currentTarget.reset();
  }

  return (
    <div
      id={id}
      className="relative rounded-3xl border border-fuchsia-400/20 bg-zinc-950/35 p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] shadow-fuchsia-500/10 backdrop-blur-md">
      <div className="absolute -top-10 -right-10 z-20">
        <div className="relative grid h-28 w-28 place-items-center sm:h-32 sm:w-32">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-br from-fuchsia-500 to-indigo-400 shadow-2xl shadow-fuchsia-500/30 [clip-path:polygon(50%_0%,60%_8%,72%_4%,76%_16%,88%_14%,86%_26%,96%_34%,86%_42%,92%_54%,80%_56%,82%_70%,70%_66%,66%_80%,54%_72%,50%_92%,46%_72%,34%_80%,30%_66%,18%_70%,20%_56%,8%_54%,14%_42%,4%_34%,14%_26%,12%_14%,24%_16%,28%_4%,40%_8%)]"
          />

          <div className="relative text-center text-white -mt-6">
            <div className="text-[10px] font-bold tracking-[0.2em] text-white/95">
              СКИДКА
            </div>
            <div className="mt-1 text-3xl font-extrabold leading-none tracking-tight sm:text-4xl">
              {lead?.badge?.text ?? "-50%"}
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-3xl font-semibold tracking-tight text-white">
        {lead?.title ?? "Оставьте заявку"}
      </h3>
      <p className="mt-1 text-sm text-white/70">
        {lead?.subtitle ?? "Перезвоним и ответим на вопросы."}
      </p>

      <form className="mt-5 space-y-3" onSubmit={onSubmit}>
        <label className="block">
          <span className="text-xs font-medium text-white/70">
            {lead?.nameLabel ?? "Имя"}
          </span>
          <input
            name="name"
            autoComplete="name"
            required
            placeholder={lead?.namePlaceholder ?? "Иван"}
            className="mt-1 h-12 w-full rounded-2xl border border-white/15 bg-zinc-950/50 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-fuchsia-400/50 focus:ring-4 focus:ring-fuchsia-400/20"
          />
        </label>

        <label className="block">
          <span className="text-xs font-medium text-white/70">
            {lead?.phoneLabel ?? "Телефон"}
          </span>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            value={phoneDigits ? `+${phoneDigits}` : ""}
            onChange={(e) => {
              const digits = e.target.value.replace(/\D/g, "");
              setPhoneDigits(digits);
            }}
            pattern="\\+\\d+"
            title="Введите номер в формате + и далее только цифры"
            placeholder={lead?.phonePlaceholder ?? "+7 (___) ___-__-__"}
            className="mt-1 h-12 w-full rounded-2xl border border-white/15 bg-zinc-950/50 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-fuchsia-400/50 focus:ring-4 focus:ring-fuchsia-400/20"
          />
        </label>

        <div className="pt-1">
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="agreement"
              required
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-zinc-950/50 text-fuchsia-500 focus:ring-2 focus:ring-fuchsia-400/50 focus:ring-offset-0 cursor-pointer"
            />
            <span className="text-xs text-white/70 leading-relaxed">
              Нажимая кнопку, я соглашаюсь с{" "}
              <a
                href="/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fuchsia-400 hover:text-fuchsia-300 underline">
                пользовательским соглашением
              </a>{" "}
            </span>
          </label>

          <button
            type="submit"
            disabled={!agreed}
            className="mt-3 inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-2xl bg-linear-to-r from-fuchsia-500 to-indigo-400 px-5 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110 active:brightness-95 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:brightness-100">
            {lead?.submitLabel ?? "Оформить заказ"}
          </button>
          {status === "success" ? (
            <p className="mt-2 text-xs leading-5 text-emerald-200/90">
              Заявка отправлена — скоро свяжемся.
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
