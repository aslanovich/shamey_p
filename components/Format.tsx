import Image from "next/image";
import Reveal from "@/components/Reveal";

/* Иконки из фигмы: положи экспорт в public/icons/format-1.svg и format-2.svg
   (сейчас там заглушки-блобы) */
const CARDS_TOP = [
  { icon: "/icons/format-1.svg", label: "Индивидуальная консультация" },
  { icon: "/icons/format-2.svg", label: "Онлайн-консультация" },
];

const CARDS_BOTTOM = [
  { big: "50 минут", label: ["длительность", "сессии"] },
  { big: "1500 р.", label: ["стоимость", "одной сессии"] },
];

export default function Format() {
  return (
    <section id="format" className="scroll-mt-24 px-5 py-14 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="display text-center">Формат</h2>

        <Reveal>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          {CARDS_TOP.map((card, i) => (
            <div
              key={card.label}
              className="reveal flex flex-col items-center justify-center gap-6 rounded-[48px] bg-white py-8"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Image src={card.icon} alt="" width={110} height={112} />
              <p className="max-w-[228px] text-center text-xl leading-[1.25] md:text-2xl">
                {card.label}
              </p>
            </div>
          ))}
          {CARDS_BOTTOM.map((card, i) => (
            <div
              key={card.big}
              className="reveal flex flex-col items-center justify-center gap-6 rounded-[48px] bg-white py-8"
              style={{ transitionDelay: `${(i + 2) * 120}ms` }}
            >
              <p className="text-5xl leading-none md:text-[64px] md:tracking-[-2.88px]">
                {card.big}
              </p>
              <p className="text-center text-xl leading-[1.25] md:text-2xl">
                {card.label[0]}
                <br />
                {card.label[1]}
              </p>
            </div>
          ))}
        </div>

        {/* Горизонтальный блок: приложение для созвонов */}
        <div
          className="reveal mt-4 grid items-center gap-8 overflow-hidden rounded-[48px] bg-white p-8 md:mt-6 md:grid-cols-2 md:p-12"
          style={{ transitionDelay: "480ms" }}
        >
          <div>
            <h3 className="text-2xl leading-[1.15] md:text-3xl">
              Встречи проходят
              <br />
              по видеосвязи
            </h3>
            <p className="mt-4 leading-[1.4] text-ink-50">
              Ничего устанавливать не нужно — созвон открывается в браузере
              по ссылке, которая придёт после записи. Работает на компьютере
              и телефоне.
            </p>
          </div>

          {/* Мокап окна видеозвонка */}
          <div aria-hidden className="rounded-[24px] bg-porcelain p-3">
            <div className="rounded-[16px] bg-ink/95 p-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex aspect-[4/3] items-end justify-start rounded-[10px] bg-[linear-gradient(135deg,#667fff66,#cea2ff66)] p-2">
                  <span className="rounded-full bg-black/30 px-2 py-0.5 text-[10px] font-normal text-white">
                    Шамай
                  </span>
                </div>
                <div className="flex aspect-[4/3] items-end justify-start rounded-[10px] bg-[linear-gradient(135deg,#cea2ff66,#ff85b166)] p-2">
                  <span className="rounded-full bg-black/30 px-2 py-0.5 text-[10px] font-normal text-white">
                    Вы
                  </span>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-center gap-2 pb-1">
                <span className="h-8 w-8 rounded-full bg-white/15" />
                <span className="h-8 w-8 rounded-full bg-white/15" />
                <span className="h-8 w-12 rounded-full bg-[#f25c75]" />
                <span className="h-8 w-8 rounded-full bg-white/15" />
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
