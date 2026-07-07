import Image from "next/image";
import { TG_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen flex-col bg-[linear-gradient(to_bottom,var(--color-hero)_0%,var(--color-hero)_65%,var(--color-porcelain)_100%)]"
    >
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 pt-28 text-center md:pt-32">
        <p className="text-lg md:text-xl">Гештальт-психолог</p>

        <h1
          className="display mt-3"
          style={{ fontSize: "clamp(40px, 5.5vw, 68px)" }}
        >
          Джандарова
          <br />
          Шамай
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-[1.25] md:text-xl">
          Помогаю разобраться в себе, снизить тревогу и найти опору там,
          <br className="hidden md:block" /> где сейчас много напряжения,
          сомнений или пустоты
        </p>

        {/* Кнопки — по макету 170:5363 */}
        <div className="mt-7 flex items-stretch gap-2.5">
          {/* пока календаря нет — запись через Telegram */}
          <a
            href={TG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary md:text-xl md:tracking-[-0.9px]"
          >
            Записаться
          </a>
        </div>
      </div>

      {/* Фото: чистое, прибито к низу экрана */}
      <div className="relative z-0 mx-auto mt-auto flex w-full max-w-2xl items-end pt-5">
        <Image
          src="/hero_image.png"
          alt="Шамай Джандарова"
          width={1920}
          height={1492}
          priority
          className="mx-auto block h-auto w-full object-cover object-top"
        />
      </div>
    </section>
  );
}
