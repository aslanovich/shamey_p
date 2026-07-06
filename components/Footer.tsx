import { TG_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="px-5 pb-28 pt-6 md:pb-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-3 text-lg font-normal text-ink-50 md:flex-row md:justify-between">
          <p>{new Date().getFullYear()} © Шамей Джандарова</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <a href={TG_URL} className="hover:text-ink">Telegram</a>
            <a href="/privacy" className="underline underline-offset-2 hover:text-ink">
              Политика конфиденциальности
            </a>
          </div>
          <p>Задизайнено — kerrrrrim</p>
        </div>

        <p className="mt-8 text-center text-xs font-normal leading-relaxed text-ink-50">
          Информация на сайте не является медицинской рекомендацией.
          Психологическое консультирование не заменяет медицинскую помощь,
          диагностику и лечение.
        </p>
      </div>
    </footer>
  );
}
