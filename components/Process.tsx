const STEPS = [
  {
    n: "1",
    title: "Знакомимся",
    text: "Вы рассказываете, что сейчас происходит и что привело вас к психологу. Можно говорить коротко, путаться, волноваться или не понимать, с чего начать.",
  },
  {
    n: "2",
    title: "Проясняем запрос",
    text: "Вместе разбираемся, что сейчас беспокоит сильнее всего и на чём стоит сосредоточиться в первую очередь.",
  },
  {
    n: "3",
    title: "Исследуем",
    text: "Обращаем внимание на чувства, реакции, внутренние противоречия, отношения и повторяющиеся ситуации.",
  },
  {
    n: "4",
    title: "Ищем новые опоры",
    text: "Постепенно находим способы лучше понимать себя, замечать свои потребности и по-новому реагировать на привычные ситуации.",
  },
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 px-5 py-14 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="heading text-center">Как проходит наша работа</h2>
        <p className="mx-auto mt-5 max-w-2xl text-center leading-[1.35] text-ink-50">
          Сессия — это спокойный разговор, в котором не нужно подбирать
          правильные слова, стараться понравиться или сразу рассказывать всё.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {STEPS.map((step) => (
            <div key={step.n} className="rounded-[32px] bg-white p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-porcelain text-lg">
                {step.n}
              </span>
              <h3 className="mt-5 text-xl leading-[1.2]">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-snug text-ink-50">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
