"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TG_URL } from "@/lib/site";

export default function Header() {
  // после первого экрана (hero) кнопка перекрашивается в брендовый индиго
  const [past, setPast] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setPast(window.scrollY > window.innerHeight * 0.9);
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
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="flex h-[88px] items-center justify-between px-5">
        <a href="#top" className="shrink-0">
          <Image src="/logo.svg" alt="Shamey" width={96} height={44} priority />
        </a>
        <a
          href={TG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center rounded-full px-6 py-2.5 text-base font-normal backdrop-blur-[12px] transition-colors duration-300 ${
            past
              ? "bg-ink-90 text-white hover:bg-ink"
              : "bg-frost text-ink hover:bg-[rgba(232,232,255,0.85)]"
          }`}
        >
          Записаться
        </a>
      </div>
    </header>
  );
}
