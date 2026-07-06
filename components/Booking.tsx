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
const CAL_LINK = "shamay/booking";
const NAMESPACE = "session";
// Аккаунт живёт на европейском инстансе Cal.eu — поэтому свой origin
const CAL_ORIGIN = "https://app.cal.eu";
const EMBED_JS = "https://app.cal.eu/embed/embed.js";

export default function Booking() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE, embedJsUrl: EMBED_JS });
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
          В календаре показано только свободное время. Если сложно
          сформулировать запрос, в форме достаточно написать: «Хочу
          разобраться в себе».
        </p>

        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[40px] bg-white">
          <Cal
            namespace={NAMESPACE}
            calLink={CAL_LINK}
            calOrigin={CAL_ORIGIN}
            embedJsUrl={EMBED_JS}
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
