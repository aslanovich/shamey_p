"use client";

import { useEffect, useMemo, useRef } from "react";

/**
 * Statement-блок из макета: крупный центрированный текст, который
 * при скролле плавно «закрашивается» посимвольно (сверху вниз,
 * в порядке чтения) из 50%-прозрачного индиго в полный.
 */
export default function Statement({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  // слова -> символы, чтобы переносы строк оставались по словам
  const words = useMemo(() => text.split(" "), [text]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const chars = el.querySelectorAll<HTMLElement>("[data-ch]");
    const total = chars.length;
    let lit = 0;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(0, (vh * 0.9 - rect.top) / (vh * 0.6)),
      );
      const target = Math.round(progress * total);
      if (target === lit) return;
      if (target > lit) {
        for (let i = lit; i < target; i++) chars[i].classList.add("lit");
      } else {
        for (let i = target; i < lit; i++) chars[i].classList.remove("lit");
      }
      lit = target;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [words]);

  return (
    <section className="px-5 py-16 md:py-24">
      <p
        ref={ref}
        aria-label={text}
        className="statement mx-auto max-w-4xl text-center [&_[data-ch]]:text-ink-50 [&_[data-ch]]:transition-colors [&_[data-ch]]:duration-500 [&_[data-ch].lit]:text-ink"
      >
        {words.map((word, wi) => (
          <span key={wi} aria-hidden>
            <span className="inline-block whitespace-nowrap">
              {Array.from(word).map((ch, ci) => (
                <span key={ci} data-ch>
                  {ch}
                </span>
              ))}
            </span>
            {wi < words.length - 1 && " "}
          </span>
        ))}
      </p>
    </section>
  );
}
