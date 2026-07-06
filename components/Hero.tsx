import Image from "next/image";
import Parallax from "@/components/Parallax";
import { TG_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-[linear-gradient(to_bottom,var(--color-hero)_0%,var(--color-hero)_65%,var(--color-porcelain)_100%)]"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center px-5 pt-32 text-center md:pt-40">
        <p className="text-lg md:text-2xl">Психолог-консультант · онлайн</p>

        <h1 className="display mt-4">
          Джандарова
          <br />
          Шамай
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-[1.25] md:text-2xl">
          Помогаю разобраться в себе, снизить тревогу и найти опору там,
          <br className="hidden md:block" /> где сейчас много напряжения,
          сомнений или пустоты
        </p>

        <a
          href={TG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-9 md:text-xl"
        >
          Записаться
        </a>
      </div>

      {/* Фото: параллакс + плавное растворение в следующий блок */}
      <div className="relative mx-auto -mt-2 max-w-4xl overflow-hidden">
        <Parallax speed={0.06}>
          <Image
            src="/hero_image.png"
            alt="Шамай Джандарова"
            width={1920}
            height={1492}
            priority
            className="mx-auto h-auto w-full max-w-3xl object-cover object-top"
          />
        </Parallax>
        {/* лёгкий блюр по нижней кромке */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 backdrop-blur-[6px] [mask-image:linear-gradient(to_top,black_20%,transparent)]" />
        {/* градиент в цвет следующей секции */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-porcelain via-porcelain/70 to-transparent" />
      </div>
    </section>
  );
}
