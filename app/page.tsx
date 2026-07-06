import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Requests from "@/components/Requests";
import Process from "@/components/Process";
import Approach from "@/components/Approach";
import Format from "@/components/Format";
import Pricing from "@/components/Pricing";
// import Reviews from "@/components/Reviews"; // вернуть вместе с блоком отзывов
import Booking from "@/components/Booking";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import MobileCta from "@/components/MobileCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <Statement text="Ко мне можно обратиться, если внешне всё может выглядеть нормально, но внутри становится тяжело, тревожно или непонятно." />

        <Requests />
        <Process />

        <Statement text="Я не даю универсальных советов и не говорю, как вам правильно жить. Мы вместе ищем решения, которые подходят именно вам." />

        <Approach />

        <Statement text="Задача терапии — не сделать вас «правильным», а помочь лучше слышать себя и свободнее выбирать, как поступать." />

        <Format />
        <Pricing />
        {/* Отзывы скрыты до появления реальных: верни <Reviews />, когда будут */}
        {/* <Reviews /> */}
        <Booking />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
