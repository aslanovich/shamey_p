"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

/**
 * Инлайн-виджет Cal.com.
 *
 * ЗАМЕНИ calLink на свой: "имя-аккаунта/название-события",
 * например "shamay/session". Как настроить — в README, шаг 2.
 *
 * Занятые слоты скрываются автоматически: Cal.com читает
 * подключённый календарь и показывает только свободное время.
 */
const CAL_LINK = "your-username/session";
const NAMESPACE = "session";

export default function Booking() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      cal("ui", {
        styles: { branding: { brandColor: "#1c137c" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section id="booking" className="scroll-mt-24 px-5 py-14 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="heading text-center">Выберите удобное время</h2>
        <p className="mx-auto mt-5 max-w-2xl text-center leading-[1.35] text-ink-50">
          Можно записаться на первую бесплатную встречу или выбрать время для
          следующей консультации. Если сложно сформулировать запрос, в форме
          достаточно написать: «Хочу разобраться в себе».
        </p>

        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[40px] bg-white">
          <Cal
            namespace={NAMESPACE}
            calLink={CAL_LINK}
            style={{ width: "100%", height: "100%", minHeight: "620px" }}
            config={{ layout: "month_view", theme: "light" }}
          />
        </div>

        <p className="mx-auto mt-6 max-w-xl text-center text-sm text-ink-50">
          После записи вы получите подтверждение и ссылку на встречу.
        </p>
      </div>
    </section>
  );
}
