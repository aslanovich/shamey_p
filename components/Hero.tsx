"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { TG_URL } from "@/lib/site";

/** Одна секция бесшовной волны (стыкуется сама с собой по горизонтали) */
function Wave() {
  return (
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      className="h-full w-1/2 shrink-0"
      aria-hidden
    >
      <path
        d="M0,30 C100,55 200,55 300,30 S500,5 600,30 S800,55 900,30 S1100,5 1200,30 L1200,60 L0,60 Z"
        fill="var(--color-porcelain)"
      />
    </svg>
  );
}

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
      // инерция: высота плавно догоняет скролл
      cur += (target - cur) * (reduced ? 1 : 0.09);
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

        {/* Вуаль: поднимается снизу волной, высота растёт по скроллу */}
        <div
          ref={veilRef}
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-0 opacity-0"
        >
          {/* мягкая дымка над волной */}
          <div className="absolute -top-32 h-32 w-full bg-gradient-to-t from-porcelain/60 to-transparent" />
          {/* две дрейфующие волны в противофазе */}
          <div className="absolute -top-14 h-14 w-full overflow-hidden opacity-60">
            <div className="wave-track wave-track--slow">
              <Wave />
              <Wave />
            </div>
          </div>
          <div className="absolute -top-10 h-10 w-full overflow-hidden">
            <div className="wave-track">
              <Wave />
              <Wave />
            </div>
          </div>
          {/* сплошная заливка */}
          <div className="absolute inset-0 bg-porcelain" />
        </div>
      </div>
    </section>
  );
}
