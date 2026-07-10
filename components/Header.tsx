"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import AnimatedLogo from "@/components/AnimatedLogo";
import { TG_URL } from "@/lib/site";

/**
 * На первом экране: логотип по центру (48px), НЕ фиксированный —
 * уезжает вместе с hero. Когда hero-кнопка «Записаться» уходит
 * за экран, появляется фиксированная шапка: логотип 42px слева,
 * брендовая кнопка справа.
 */
export default function Header() {
  const [past, setPast] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setPast(window.scrollY > window.innerHeight * 0.62);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Логотип первого экрана: в потоке страницы, скроллится с hero */}
      <div className="absolute inset-x-0 top-0 z-40 flex h-[96px] items-center justify-center">
        <a href="#top" className="block h-12">
          <AnimatedLogo className="h-full" />
        </a>
      </div>

      {/* Фиксированная шапка: появляется со второй секции */}
      <header
        aria-hidden={!past}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
          past ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="flex h-[72px] items-center justify-between px-5">
          <a href="#top" tabIndex={past ? 0 : -1} className="block h-[42px]">
            <img src="/logo.svg" alt="Shamey" className="h-full w-auto" />
          </a>
          <a
            href={TG_URL}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={past ? 0 : -1}
            className="inline-flex items-center justify-center rounded-full bg-ink-90 px-6 py-2.5 text-base font-normal text-white backdrop-blur-[12px] transition-colors hover:bg-ink"
          >
            Записаться
          </a>
        </div>
      </header>
    </>
  );
}
