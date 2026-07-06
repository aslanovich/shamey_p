const FACTS = ["Гештальт-терапия", "Онлайн", "Работа со взрослыми"];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-14 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="heading">Обо мне</h2>

        <div className="mt-8 space-y-5 text-lg leading-[1.4]">
          <p>
            Я пришла в психологию из искреннего интереса к человеку — к его
            внутреннему миру, чувствам, поступкам и выборам.
          </p>
          <p className="text-ink-50">
            До этого работала в продажах и HR: много общалась с людьми и всё
            чаще замечала, что мне важнее понимать, что происходит с человеком
            внутри.
          </p>
          <p>
            Мне важно создавать пространство, где можно быть собой — без
            осуждения, давления и необходимости соответствовать чужим
            ожиданиям.
          </p>
        </div>

        <ul className="mt-9 flex flex-wrap justify-center gap-2">
          {FACTS.map((fact) => (
            <li key={fact} className="rounded-full bg-white px-5 py-2.5 text-sm">
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
