/** Градиентный «лепестковый» блоб — как иконка в макете */
function Blob({ id }: { id: string }) {
  return (
    <svg width="110" height="112" viewBox="0 0 110 112" fill="none" aria-hidden>
      <defs>
        <linearGradient id={id} x1="8" y1="98" x2="102" y2="14" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#667fff" />
          <stop offset="0.5" stopColor="#cea2ff" />
          <stop offset="1" stopColor="#ff85b1" />
        </linearGradient>
        <filter id={`${id}-soft`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
      </defs>
      <path
        d="M55 8c12 0 20 8 20 20 0 2.6-.5 5-1.3 7.3 2.2-.8 4.7-1.3 7.3-1.3 12 0 21 9 21 21s-9 21-21 21c-2.6 0-5.1-.5-7.3-1.3.8 2.3 1.3 4.7 1.3 7.3 0 12-8 21-20 21s-20-9-20-21c0-2.6.5-5 1.3-7.3-2.2.8-4.7 1.3-7.3 1.3-12 0-21-9-21-21s9-21 21-21c2.6 0 5.1.5 7.3 1.3A20.8 20.8 0 0 1 35 28c0-12 8-20 20-20Z"
        fill={`url(#${id})`}
        filter={`url(#${id}-soft)`}
      />
    </svg>
  );
}

const CARDS_TOP = [
  { icon: "blob-a", label: "Индивидуальная консультация" },
  { icon: "blob-b", label: "Онлайн-консультация" },
];

const CARDS_BOTTOM = [
  { big: "1 час", label: ["длительность", "сессии"] },
  { big: "1500 р.", label: ["стоимость", "одной сессии"] },
];

export default function Format() {
  return (
    <section id="format" className="scroll-mt-24 px-5 py-14 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="display text-center">Формат</h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          {CARDS_TOP.map((card) => (
            <div
              key={card.label}
              className="flex flex-col items-center justify-center gap-6 rounded-[48px] bg-white py-8"
            >
              <Blob id={card.icon} />
              <p className="max-w-[228px] text-center text-xl leading-[1.25] md:text-2xl">
                {card.label}
              </p>
            </div>
          ))}
          {CARDS_BOTTOM.map((card) => (
            <div
              key={card.big}
              className="flex flex-col items-center justify-center gap-6 rounded-[48px] bg-white py-8"
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
        <div className="mt-4 grid items-center gap-8 overflow-hidden rounded-[48px] bg-white p-8 md:mt-6 md:grid-cols-2 md:p-12">
          <div>
            <h3 className="text-2xl leading-[1.15] md:text-3xl">
              Встречи проходят
              <br />в Яндекс Телемосте
            </h3>
            <p className="mt-4 leading-[1.4] text-ink-50">
              Ничего устанавливать не нужно — созвон открывается в браузере
              по ссылке, которая приходит перед сессией. Работает на
              компьютере и телефоне.
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
      </div>
    </section>
  );
}
