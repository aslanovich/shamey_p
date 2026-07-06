import Reveal from "@/components/Reveal";

const POINTS = [
  "что вы чувствуете",
  "какие потребности остаются незамеченными",
  "где вы теряете контакт с собой",
  "почему ситуации повторяются",
  "как слышать себя",
  "как делать свой выбор",
];

export default function Approach() {
  return (
    <section id="approach" className="scroll-mt-24 px-5 py-14 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="heading">Как я работаю</h2>

        <p className="mt-8 text-lg leading-[1.4]">
          Работаю в гештальт-подходе: он помогает замечать, что происходит с
          вами сейчас — что вы чувствуете, чего хотите и чего избегаете.
        </p>

        <p className="mt-5 text-ink-50">
          Вместо вопроса «что со мной не так?» мы исследуем:
        </p>

        <Reveal>
          <ul className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-2.5">
            {POINTS.map((point, i) => (
              <li
                key={point}
                className="cloud-tag rounded-full bg-white px-5 py-2.5 text-sm"
                style={{
                  transitionDelay: `${i * 160}ms`,
                  animationDelay: `${(i % 3) * 1.2}s`,
                }}
              >
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
