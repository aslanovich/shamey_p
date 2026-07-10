export const FAQ_ITEMS = [
  {
    q: "Нужно ли заранее формулировать запрос?",
    a: "Нет. Часто запрос становится понятнее уже в процессе первой встречи.",
  },
  {
    q: "Что будет на первой встрече?",
    a: "Мы познакомимся, обсудим вашу ситуацию и поймём, подойдёт ли вам формат совместной работы.",
  },
  {
    q: "Обязательно ли продолжать после первой встречи?",
    a: "Нет. После знакомства вы сможете спокойно решить, хотите ли продолжать работу.",
  },
  {
    q: "Можно ли прийти, если я просто чувствую тревогу, но не понимаю почему?",
    a: "Да. Не всегда причины тревоги понятны сразу. С этого можно начать работу.",
  },
  {
    q: "Вы будете давать советы?",
    a: "Я не даю готовых инструкций о том, как правильно жить. Мы вместе разбираемся в ситуации и ищем решения, которые подходят именно вам.",
  },
  {
    q: "Где проходят встречи?",
    a: "Онлайн, по видеосвязи. Ссылка на встречу придёт вам после записи — ничего устанавливать не нужно.",
  },
  {
    q: "Сколько длится консультация?",
    a: "50 минут.",
  },
  {
    q: "Как часто нужно встречаться?",
    a: "Обычно встречи проходят один раз в неделю, но частоту можно обсудить индивидуально.",
  },
  {
    q: "Что делать, если я опаздываю?",
    a: "Сообщите об этом в Telegram. Встреча завершится в запланированное время.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 px-5 py-14 md:py-20">
      <div className="mx-auto max-w-5xl rounded-[40px] border border-bone bg-white p-8 md:p-10">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <h2 className="text-5xl leading-none md:text-[64px] md:tracking-[-2.88px]">
            FAQ
          </h2>

          <div>
            {FAQ_ITEMS.map((item, i) => (
              <details
                key={item.q}
                className={`group py-5 ${
                  i < FAQ_ITEMS.length - 1 ? "border-b border-[rgba(41,40,36,0.1)]" : ""
                }`}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg leading-[1.25] md:text-xl marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden
                    className="mt-1 shrink-0 transition-transform group-open:rotate-45"
                  >
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="mt-3 max-w-xl leading-[1.35] text-ink-50">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
