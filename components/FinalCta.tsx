import Image from "next/image";
import Parallax from "@/components/Parallax";
import { TG_URL } from "@/lib/site";

/**
 * Финальный CTA из макета: лавандовая карточка,
 * два слоя фона (базовое изображение + оверлей) с лёгким параллаксом.
 */
export default function FinalCta() {
  return (
    <section className="px-5 py-14 md:py-20">
      <div className="relative mx-auto min-h-[420px] max-w-5xl overflow-hidden rounded-[48px] bg-lavender-card">
        <Parallax speed={0.05} className="absolute -inset-y-6 inset-x-0">
          <Image
            src="/cta_bg_image_1.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
          <Image
            src="/cta_bg_image_2_overlay.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover mix-blend-darken"
          />
        </Parallax>

        <div className="relative flex min-h-[420px] max-w-md flex-col justify-between p-8 md:p-11">
          <div>
            <h2 className="text-4xl leading-none md:text-[40px]">
              Можно начать
              <br />с одной встречи
            </h2>
            <p className="mt-6 text-lg leading-[1.25]">
              На ней не нужно быть «готовым к терапии», правильно формулировать
              мысли или сразу рассказывать всё
            </p>
          </div>

          <a
            href={TG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 w-fit !py-3.5 text-base"
          >
            Записаться
          </a>
        </div>
      </div>
    </section>
  );
}
