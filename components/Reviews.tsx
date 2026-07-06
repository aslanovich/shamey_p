import Image from "next/image";
import Parallax from "@/components/Parallax";

/**
 * «Что говорят клиенты»: имена пикселизированы (SVG-фильтр мозаики),
 * карусель крутится бесконечно (пауза при наведении).
 * Тексты пока плейсхолдерные — заменить на реальные отзывы.
 */
const REVIEWS = [
  {
    name: "Катя Р.",
    meta: "Апрель, 2026 / Россия",
    text: "Здесь придумать короткую реакцию о терапии, объём текста — чтобы уместилось в эту карточку, ну или половина этой карты.",
    image: null,
  },
  {
    name: "Варвара Р.",
    meta: "Апрель, 2026 / Россия",
    text: "Здесь придумать короткую реакцию о терапии.",
    image: "/testimonial_1.png",
  },
  {
    name: "Артур М.",
    meta: "Апрель, 2026 / Россия",
    text: "Здесь придумать короткую реакцию о терапии, объём текста — чтобы уместилось в эту карточку, ну или половина этой карты.",
    image: null,
  },
  {
    name: "Мария К.",
    meta: "Май, 2026 / Россия",
    text: "Здесь придумать короткую реакцию о терапии, объём текста — чтобы уместилось в эту карточку.",
    image: null,
  },
];

function Card({ review }: { review: (typeof REVIEWS)[number] }) {
  return (
    <div className="flex w-[300px] shrink-0 flex-col gap-6 rounded-[24px] bg-white p-8">
      <div>
        <p
          className="w-fit text-lg leading-[1.25] [filter:url(#pixelate-name)]"
          aria-label="Имя скрыто"
        >
          {review.name}
        </p>
        <p className="text-lg leading-[1.25] text-ink-50">{review.meta}</p>
      </div>
      {review.image && (
        <div className="overflow-hidden rounded-[16px]">
          <Parallax speed={0.05}>
            <Image
              src={review.image}
              alt=""
              width={536}
              height={284}
              className="h-auto w-full scale-110 object-cover"
            />
          </Parallax>
        </div>
      )}
      <p className="text-lg leading-[1.25]">{review.text}</p>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 overflow-hidden py-14 md:py-20">
      {/* SVG-фильтр пикселизации имён */}
      <svg width="0" height="0" aria-hidden className="absolute">
        <filter id="pixelate-name" x="-5%" y="-5%" width="110%" height="110%">
          <feFlood x="2" y="2" width="4" height="4" />
          <feComposite width="8" height="8" />
          <feTile result="tiles" />
          <feComposite in="SourceGraphic" in2="tiles" operator="in" />
          <feMorphology operator="dilate" radius="4" />
        </filter>
      </svg>

      <h2 className="display px-5 text-center">
        Что говорят
        <br />
        клиенты
      </h2>

      <div className="mt-12 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex w-max">
          {[0, 1].map((half) => (
            <div key={half} aria-hidden={half === 1} className="flex gap-2 pr-2">
              {REVIEWS.map((review, i) => (
                <Card key={i} review={review} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
