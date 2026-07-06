const PLANS = [
  {
    title: "Одна консультация",
    price: "1 500 ₽",
    text: "Подходит, если вы хотите двигаться постепенно или пока не готовы планировать несколько встреч.",
    items: ["60 минут", "Онлайн", "Оплата перед сессией"],
    cta: "Записаться",
    featured: false,
    badge: null,
  },
  {
    title: "Пакет из 10 консультаций",
    price: "10 000 ₽",
    text: "Для регулярной работы с запросом. Обычная стоимость 10 встреч — 15 000 ₽.",
    items: [
      "10 консультаций по 60 минут",
      "Онлайн",
      "Можно заранее согласовать график",
    ],
    cta: "Выбрать пакет",
    featured: true,
    badge: "Выгода 5 000 ₽",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 px-5 py-14 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="display text-center">Стоимость</h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.title}
              className={`relative flex flex-col rounded-[32px] p-8 ${
                plan.featured ? "bg-ink text-white" : "bg-white"
              }`}
            >
              {plan.badge && (
                <span className="absolute right-6 top-6 rounded-full bg-white/15 px-4 py-1.5 text-sm font-normal text-white">
                  {plan.badge}
                </span>
              )}
              <h3 className="max-w-[240px] text-xl leading-[1.2]">{plan.title}</h3>
              <p className="mt-4 text-5xl leading-none">{plan.price}</p>
              <p
                className={`mt-4 text-[15px] leading-snug ${
                  plan.featured ? "text-white/70" : "text-ink-50"
                }`}
              >
                {plan.text}
              </p>
              <ul className="mt-4 mb-8 space-y-2">
                {plan.items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-center gap-2.5 text-sm ${
                      plan.featured ? "text-white/85" : "text-ink-50"
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path
                        d="M2.5 7.5L5.5 10.5L11.5 4"
                        stroke={plan.featured ? "#fff" : "var(--color-verified)"}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className={`mt-auto inline-flex items-center justify-center rounded-full px-8 py-3.5 font-normal transition-colors ${
                  plan.featured
                    ? "bg-white text-ink hover:bg-porcelain"
                    : "bg-porcelain text-ink hover:bg-frost"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-ink-50">
          Первая встреча-знакомство — бесплатно и не входит в пакет.
        </p>

        {/* Условия отмены и переноса */}
        <div className="mt-10 grid items-center gap-6 rounded-[32px] bg-lavender-card p-8 md:grid-cols-[auto_1fr] md:gap-10 md:p-10">
          <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-1">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden>
              <circle cx="22" cy="22" r="19" stroke="var(--color-ink)" strokeWidth="2.5" />
              <path d="M22 12v10l7 5" stroke="var(--color-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-4xl leading-none md:mt-3 md:text-5xl">
              24 часа
            </p>
          </div>
          <div>
            <h3 className="text-xl">Если планы изменились</h3>
            <p className="mt-2 max-w-2xl text-[15px] leading-snug text-ink/70">
              Отменить или перенести встречу можно не позднее чем за 24 часа
              до начала — при отмене в день встречи консультация оплачивается
              полностью. Это правило помогает сохранять время сессии за вами
              и поддерживать устойчивый график.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
