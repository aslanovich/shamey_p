import { TG_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="px-5 pb-28 pt-6 md:pb-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-3 text-lg font-normal text-ink-50 md:flex-row md:justify-between">
          <p>{new Date().getFullYear()} © Шамай Джандарова</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <a href={TG_URL} className="underline underline-offset-2 hover:text-ink">
              Telegram
            </a>
            <a href="/privacy" className="underline underline-offset-2 hover:text-ink">
              Политика конфиденциальности
            </a>
          </div>
          <p>Задизайнено — kerrrrrim</p>
        </div>
      </div>
    </footer>
  );
}
