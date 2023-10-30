import {
    HiBriefcase,
    HiOutlineChartSquareBar,
    HiCurrencyDollar,
  } from "react-icons/hi"
  
  export function Services() {
    const services = [
      {
        title: "Ética Profissional",
        description:
          "A integridade é o alicerce da contabilidade, e entendo que minha responsabilidade inclui a manutenção da confidencialidade dos dados financeiros e o cumprimento rigoroso das regulamentações contábeis e fiscais.",
        icon: <HiBriefcase className="h-12 w-12" />,
      },
      {
        title: "Matemática Financeira",
        description: "Estou entusiasmado para aplicar minhas habilidades em matemática financeira na prática. Minha formação inclui cálculo de juros, depreciação e análise de investimentos.",
        icon: <HiOutlineChartSquareBar className="h-12 w-12" />,
      },
      {
        title: "Contabilidade Básica",
        description: "Tenho uma sólida compreensão dos princípios contábeis fundamentais, o que me permite contribuir efetivamente no campo da contabilidade. Minha experiência inclui a análise de balanços, demonstrações de resultados e fluxos de caixa.",
        icon: <HiCurrencyDollar className="h-12 w-12" />,
      },
    ]
  
    return (
      <section className="container mx-auto my-12 max-w-4xl p-4">
        <div className="p-4 text-center">
          <p className="text-sm font-semibold uppercase text-pink-400">
            O que faço de melhor
          </p>
          <h2 className="mb-2 font-bold text-pink-400">
            <span className="mr-2 font-headline text-3xl">Minhas</span>
            <span className="font-handwriting text-4xl">Aptidões</span>
          </h2>
          <p className=" text-sm text-gray-600">
          Estou pronta para abraçar uma ampla gama de desafios na área contábil, desde a gestão financeira até a análise de dados. Estou ansiosa para encontrar oportunidades que me permitam aplicar meu conhecimento e paixão pela contabilidade, contribuindo ativamente para o sucesso da equipe e dos projetos.
          </p>
        </div>
  
        <div className="mt-6 flex flex-col gap-2 md:flex-row">
          {services.map((service, index) => (
            <div
              className="basis-1/3 rounded-lg bg-pink-400 p-4 text-white"
              key={`service-${index}`}
            >
              <div className="mb-2">{service.icon}</div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }