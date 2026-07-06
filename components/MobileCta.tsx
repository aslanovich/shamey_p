import { TG_URL } from "@/lib/site";

/** Липкая кнопка записи внизу экрана — только на мобильных */
export default function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 bg-gradient-to-t from-porcelain via-porcelain/95 to-transparent px-5 pb-4 pt-6 md:hidden">
      <a
        href={TG_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full"
      >
        Записаться на первую встречу
      </a>
    </div>
  );
}
