"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { TG_URL } from "@/lib/site";

/**
 * Hero со scroll-переходом: секция выше экрана, контент прилипает.
 * По умолчанию фото чистое; по мере скролла нарастают блюр и заливка
 * в цвет канвы — hero «растворяется», и на его месте появляется
 * следующий блок. Дальше — обычный скролл.
 */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const veil = veilRef.current;
    if (!section || !veil) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let target = 0;
    let cur = 0;
    let raf = 0;

    const measure = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 — верх страницы, 1 — sticky-контент почти доскроллен
      target = Math.min(1, Math.max(0, -rect.top / (rect.height - vh)));
    };

    const loop = () => {
      // инерция: высота плавно, «волной», догоняет скролл
      cur += (target - cur) * (reduced ? 1 : 0.06);
      if (Math.abs(target - cur) < 0.001) cur = target;
      veil.style.height = `${(cur * 150).toFixed(2)}%`;
      veil.style.opacity = cur > 0.005 ? "1" : "0";
      raf = requestAnimationFrame(loop);
    };

    measure();
    cur = target;
    raf = requestAnimationFrame(loop);
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section ref={sectionRef} id="top" className="relative h-[170vh] bg-hero">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="relative z-10 mx-auto flex max-w-5xl shrink-0 flex-col items-center px-5 pt-24 text-center md:pt-28">
          <p className="text-lg md:text-xl">Гештальт-психолог</p>

          {/* чуть меньше базового display, чтобы всё уместилось над фото */}
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
            <a href="#booking" className="btn-primary md:text-xl md:tracking-[-0.9px]">
              Записаться
            </a>
            <a
              href={TG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-lavender-card/90 px-8 py-4 font-normal text-ink transition-colors hover:bg-lavender-card md:text-xl md:tracking-[-0.9px]"
            >
              Телеграм
            </a>
          </div>
        </div>

        {/* Фото: чистое, без градиента по умолчанию; занимает остаток экрана,
            не налезая на текст (object-contain) */}
        <div className="relative z-0 mx-auto mt-5 min-h-0 w-full max-w-2xl flex-1">
          <Image
            src="/hero_image.png"
            alt="Шамай Джандарова"
            fill
            priority
            sizes="(min-width: 768px) 672px, 100vw"
            className="object-contain object-top"
          />
        </div>

        {/* Вуаль: мягкий градиент, поднимается снизу с инерцией */}
        <div
          ref={veilRef}
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-0 opacity-0"
        >
          <div className="absolute -top-40 h-40 w-full bg-gradient-to-t from-porcelain to-transparent" />
          <div className="absolute inset-0 bg-porcelain" />
        </div>
      </div>
    </section>
  );
}
