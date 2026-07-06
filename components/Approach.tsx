import Reveal from "@/components/Reveal";

/** «Исследуем» — по макету 170:5355: текст по центру, лавандовые пилюли строкой */
const TAGS = [
  "как делать свой выбор",
  "что вы чувствуете",
  "почему ситуации повторяются",
  "как слышать себя",
  "где вы теряете контакт с собой",
  "какие потребности остаются незамеченными",
];

export default function Approach() {
  return (
    <section id="approach" className="scroll-mt-24 px-5 py-14 md:py-20">
      <Reveal className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-md text-center">
          <h2 className="heading">Исследуем</h2>
          <p className="pt-6 text-lg leading-[1.4]">
            Работаю в гештальт-подходе: он помогает замечать, что происходит
            с вами сейчас — что вы чувствуете, чего хотите и чего избегаете.
          </p>
        </div>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {TAGS.map((tag, i) => (
            <li
              key={tag}
              className="cloud-tag rounded-full bg-lavender-card p-4 text-center text-lg leading-[1.4]"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {tag}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
