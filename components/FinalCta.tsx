"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { TG_URL } from "@/lib/site";

/**
 * Финальный CTA: два слоя фона плавно двигаются относительно
 * друг друга за курсором (mouse-параллакс с инерцией).
 */
export default function FinalCta() {
  const cardRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const bg = bgRef.current;
    const overlay = overlayRef.current;
    if (!card || !bg || !overlay) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let raf = 0;

    const loop = () => {
      // плавная инерция
      curX += (targetX - curX) * 0.06;
      curY += (targetY - curY) * 0.06;
      bg.style.transform = `translate3d(${curX * 14}px, ${curY * 10}px, 0) scale(1.06)`;
      overlay.style.transform = `translate3d(${curX * -22}px, ${curY * -16}px, 0) scale(1.08)`;
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1..1
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    raf = requestAnimationFrame(loop);
    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="px-5 py-14 md:py-20">
      <div
        ref={cardRef}
        className="relative mx-auto min-h-[420px] max-w-5xl overflow-hidden rounded-[48px] bg-lavender-card"
      >
        <div ref={bgRef} className="absolute inset-0 will-change-transform">
          <Image
            src="/cta_bg_image_1.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </div>
        <div ref={overlayRef} className="absolute inset-0 will-change-transform">
          <Image
            src="/cta_bg_image_2_overlay.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover mix-blend-darken"
          />
        </div>

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
