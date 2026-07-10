import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Requests from "@/components/Requests";
import Process from "@/components/Process";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Format from "@/components/Format";
import Pricing from "@/components/Pricing";
// import Reviews from "@/components/Reviews"; // вернуть вместе с блоком отзывов
// import Booking from "@/components/Booking"; // вернём с кастомным календарём
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />

        <Statement text="Ко мне можно обратиться, если внешне всё может выглядеть нормально, но внутри становится тяжело, тревожно или непонятно." />

        <Requests />
        <Process />

        <Statement text="Я не даю универсальных советов и не говорю, как вам правильно жить. Мы вместе ищем решения, которые подходят именно вам." />

        <About />
        <Approach />

        <Statement text="Задача терапии — не сделать вас «правильным», а помочь лучше слышать себя и свободнее выбирать, как поступать." />

        <Format />
        <Pricing />
        {/* Отзывы скрыты до появления реальных: верни <Reviews />, когда будут */}
        {/* <Reviews /> */}
        {/* <Booking /> — временно скрыт, будет кастомный календарь на Cal API */}
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
