import { FAQ_ITEMS } from "@/components/Faq";
import { TG_URL } from "@/lib/site";

const SITE_URL = "https://shamey.ru";

/**
 * Структурированные данные (schema.org) для поисковиков и ИИ-ботов:
 * профессиональная услуга психолога с ценами + FAQ.
 * На отображаемый контент не влияет.
 */
export default function JsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Шамай Джандарова — гештальт-психолог",
      alternateName: "Shamey",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      image: `${SITE_URL}/hero_image.png`,
      description:
        "Индивидуальные онлайн-консультации гештальт-психолога для взрослых: тревога, самооценка, отношения, эмоциональное выгорание, поиск себя.",
      priceRange: "1500-10000 RUB",
      currenciesAccepted: "RUB",
      areaServed: "Онлайн",
      availableLanguage: "ru",
      sameAs: [TG_URL],
      founder: {
        "@type": "Person",
        name: "Шамай Джандарова",
        jobTitle: "Гештальт-психолог",
        url: SITE_URL,
      },
      makesOffer: [
        {
          "@type": "Offer",
          name: "Индивидуальная онлайн-консультация (50 минут)",
          price: "1500",
          priceCurrency: "RUB",
        },
        {
          "@type": "Offer",
          name: "Пакет из 10 консультаций по 50 минут",
          price: "10000",
          priceCurrency: "RUB",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
