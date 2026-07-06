import Image from "next/image";
import { TG_URL } from "@/lib/site";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-[88px] max-w-5xl items-center justify-between px-5">
        <a href="#top" className="shrink-0">
          <Image src="/logo.svg" alt="Shamey" width={96} height={44} priority />
        </a>
        <a
          href={TG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-frost"
        >
          Записаться
        </a>
      </div>
    </header>
  );
}
