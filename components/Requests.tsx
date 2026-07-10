import Image from "next/image";
import Reveal from "@/components/Reveal";

/* Иконки — по макету 184:2; отрисованы вручную, лежат в public/icons/.
   Для точного соответствия экспортни из фигмы поверх с теми же именами. */
const GROUPS = [
  {
    icon: "/icons/cometome-1.svg",
    title: "Самореализация и поиск себя",
    items: [
      "кажется, что вы не на своём месте",
      "сложно понять, чего вы хотите",
      "нет ощущения направления или смысла",
      "трудно принимать важные решения",
    ],
  },
  {
    icon: "/icons/cometome-2.svg",
    title: "Самооценка и отношение к себе",
    items: [
      "часто сомневаетесь в себе",
      "сравниваете себя с другими",
      "боитесь показаться недостаточно умным, успешным или интересным",
      "сложно принимать свои ошибки и несовершенства",
    ],
  },
  {
    icon: "/icons/cometome-3.svg",
    title: "Тревога и эмоциональное напряжение",
    items: [
      "не получается расслабиться",
      "мысли постоянно возвращаются к проблемам",
      "чувствуете стресс, тревогу или внутреннее напряжение",
      "эмоционально устали и не понимаете, как восстановиться",
    ],
  },
  {
    icon: "/icons/cometome-4.svg",
    title: "Отношения",
    items: [
      "возникают сложности в отношениях с партнёром",
      "трудно говорить о своих чувствах",
      "сложно выстраивать личные границы",
      "трудно отказывать и говорить «нет»",
      "непросто переживаются отношения с родителями или близкими",
    ],
  },
  {
    icon: "/icons/cometome-5.svg",
    title: "Одиночество и внутренняя пустота",
    items: [
      "чувствуете себя одиноко даже рядом с людьми",
      "кажется, что вас не понимают",
      "трудно строить новые отношения",
      "внутри появляется пустота или ощущение потерянности",
    ],
  },
];

export default function Requests() {
  return (
    <section id="requests" className="scroll-mt-24 px-5 py-14 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="heading text-center">Когда ко мне приходят</h2>

        <Reveal className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {GROUPS.map((group, i) => (
            <div
              key={group.title}
              className="reveal flex flex-col items-start rounded-[32px] bg-white p-7"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Image src={group.icon} alt="" width={64} height={64} />
              <h3 className="pt-4 text-xl leading-[1.2]">{group.title}</h3>
              <ul className="pt-4">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 pt-2 text-[15px] leading-[1.375] text-ink-50 first:pt-0"
                  >
                    <span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-ink-50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Последняя карточка — по макету: иконка и текст по центру */}
          <div
            className="reveal flex flex-col items-center justify-center gap-6 rounded-[32px] bg-lavender-card p-7 text-center"
            style={{ transitionDelay: `${GROUPS.length * 120}ms` }}
          >
            <Image src="/icons/cometome-6.svg" alt="" width={64} height={64} />
            <p className="max-w-[270px] text-xl leading-[1.3]">
              Не обязательно заранее понимать, как правильно назвать свою
              проблему. Мы можем начать с того, что сейчас беспокоит сильнее
              всего.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
