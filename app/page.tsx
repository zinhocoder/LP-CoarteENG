import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Building, ClipboardCheck, Home, Search, Phone, Mail, BookOpen, Users, Target } from "lucide-react"

const WHATSAPP_LINK =
  "https://wa.me/5516996042857?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Coarte%20Engenharia."

const WhatsAppFloatingButton = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-[#25D366] hover:bg-[#1DAE50] text-white p-3 md:p-3.5 rounded-full shadow-lg z-50 flex items-center justify-center transition-transform hover:scale-110"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 md:h-8 md:w-8">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.35 3.43 16.84L2.05 22L7.31 20.62C8.75 21.39 10.36 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM12.04 20.13C10.56 20.13 9.14 19.73 7.91 19.01L7.53 18.78L4.48 19.58L5.3 16.61L5.06 16.22C4.26 14.93 3.82 13.45 3.82 11.91C3.82 7.39 7.52 3.69 12.04 3.69C16.56 3.69 20.26 7.39 20.26 11.91C20.26 16.43 16.56 20.13 12.04 20.13ZM17.46 14.47C17.24 14.36 16.05 13.81 15.86 13.73C15.67 13.66 15.53 13.62 15.38 13.84C15.24 14.06 14.76 14.64 14.61 14.82C14.47 14.99 14.32 15.03 14.05 14.92C13.78 14.81 12.91 14.51 11.86 13.59C11.05 12.86 10.52 12.01 10.38 11.79C10.23 11.57 10.35 11.44 10.47 11.32C10.58 11.21 10.72 11.03 10.87 10.87C11.01 10.71 11.06 10.6 11.17 10.42C11.28 10.23 11.23 10.09 11.16 9.98C11.09 9.87 10.65 8.78 10.48 8.38C10.31 7.98 10.14 8.04 10.01 8.03C9.89 8.02 9.75 8.02 9.6 8.02C9.46 8.02 9.21 8.07 9.02 8.29C8.82 8.51 8.33 8.95 8.33 9.98C8.33 11.01 9.05 11.99 9.16 12.13C9.28 12.27 10.68 14.42 12.78 15.29C13.71 15.68 14.34 15.88 14.81 16.01C15.48 16.19 16.03 16.16 16.44 16.1C16.9 16.02 17.63 15.54 17.82 15.13C18.01 14.72 18.01 14.38 17.95 14.27C17.9 14.16 17.68 14.58 17.46 14.47Z" />
      </svg>
    </a>
  )
}

export default function CoarteLandingPage() {
  const servicesSummary = [
    {
      icon: <Home className="h-8 w-8 md:h-10 md:w-10 text-amber-400" />,
      title: "Avaliação de Imóveis",
      description:
        "Laudo técnico que determina o valor de mercado de casas, apartamentos ou terrenos, conforme normas da ABNT.",
      id: "servico-avaliacao-detalhe",
    },
    {
      icon: <Building className="h-8 w-8 md:h-10 md:w-10 text-amber-400" />,
      title: "Laudo Estrutural",
      description:
        "Avalia a segurança e integridade das estruturas do imóvel, identificando problemas e recomendando soluções.",
      id: "servico-laudo-detalhe",
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 md:h-10 md:w-10 text-amber-400" />,
      title: "Vistoria Técnica",
      description:
        "Inspeção detalhada para registrar o estado de conservação do imóvel, identificando danos e anomalias.",
      id: "servico-vistoria-tecnica-detalhe",
    },
    {
      icon: <Search className="h-8 w-8 md:h-10 md:w-10 text-amber-400" />,
      title: "Vistoria em Apartamento Novo",
      description: "Avaliação minuciosa antes da entrega das chaves, verificando conformidade com projeto e normas.",
      id: "servico-vistoria-apto-novo-detalhe",
    },
  ]

  const detailedServices = [
    {
      id: "servico-avaliacao-detalhe",
      icon: <Home className="h-10 w-10 md:h-12 md:w-12 text-amber-400 mb-4" />,
      title: "Avaliação de Imóveis",
      subtitle: "Precisa e Confiável",
      fullDescription:
        "Nosso serviço de avaliação de imóveis fornece um laudo técnico detalhado, determinando o valor de mercado justo para casas, apartamentos, terrenos e outros tipos de propriedades. Seguimos rigorosamente as normas da ABNT, considerando fatores cruciais como localização privilegiada, padrão construtivo, estado de conservação atual e uma análise comparativa de mercado aprofundada. Este laudo é indispensável para processos de compra e venda, inventários, partilhas amigáveis ou judiciais, financiamentos, garantias, processos judiciais diversos e para a simples atualização patrimonial. Com a Coarte, você garante segurança, transparência e embasamento técnico para todas as partes envolvidas na negociação.",
      imageSrc: "/placeholder.svg?width=500&height=400",
      imageAlt: "Engenheiro analisando planta de imóvel para avaliação",
      ctaText: "Solicitar Avaliação via WhatsApp",
      layout: "imageLeft",
    },
    {
      id: "servico-laudo-detalhe",
      icon: <Building className="h-10 w-10 md:h-12 md:w-12 text-amber-400 mb-4" />,
      title: "Laudo Estrutural",
      subtitle: "Segurança e Integridade",
      fullDescription:
        "O laudo estrutural é um documento técnico essencial, elaborado por nossos engenheiros civis especializados, focado em avaliar a segurança e a integridade das estruturas de um imóvel. Identificamos potenciais problemas como rachaduras, fissuras, deformações, corrosão de armaduras ou qualquer outra patologia estrutural. O laudo inclui um diagnóstico preciso e recomendações técnicas claras para correção, reforço ou prevenção, visando garantir a estabilidade e a durabilidade da edificação. É altamente indicado em casos de suspeita de danos estruturais, antes de grandes reformas, para compra de imóveis antigos ou quando exigido por órgãos públicos e fiscalizadores.",
      imageSrc: "/placeholder.svg?width=500&height=400",
      imageAlt: "Inspeção de estrutura de concreto para laudo estrutural",
      ctaText: "Consultar Laudo Estrutural via WhatsApp",
      layout: "imageRight",
    },
    {
      id: "servico-vistoria-tecnica-detalhe",
      icon: <ClipboardCheck className="h-10 w-10 md:h-12 md:w-12 text-amber-400 mb-4" />,
      title: "Vistoria Técnica",
      subtitle: "Registro Detalhado do Imóvel",
      fullDescription:
        "Realizamos uma inspeção detalhada e criteriosa, conduzida por profissional habilitado, com o objetivo principal de registrar o estado de conservação atual do imóvel. Durante a vistoria, identificamos e documentamos danos existentes, anomalias construtivas, falhas de acabamento ou quaisquer não conformidades em relação às normas técnicas e boas práticas. O resultado é um relatório técnico robusto, enriquecido com registros fotográficos e descrições precisas, extremamente útil para processos de entrega e recebimento de obras, contratos de locação (vistoria de entrada e saída), acompanhamento de reformas ou como prova técnica em disputas judiciais.",
      imageSrc: "/placeholder.svg?width=500&height=400",
      imageAlt: "Engenheiro com prancheta realizando vistoria técnica em obra",
      ctaText: "Agendar Vistoria Técnica via WhatsApp",
      layout: "imageLeft",
    },
    {
      id: "servico-vistoria-apto-novo-detalhe",
      icon: <Search className="h-10 w-10 md:h-12 md:w-12 text-amber-400 mb-4" />,
      title: "Vistoria em Apartamento Novo",
      subtitle: "Garantia de Qualidade na Entrega",
      fullDescription:
        "Este serviço consiste em uma avaliação minuciosa e técnica realizada antes do proprietário receber as chaves do apartamento novo. Verificamos se o imóvel foi entregue em conformidade com o projeto arquitetônico, memorial descritivo, especificações de materiais e todas as normas técnicas aplicáveis. A vistoria aponta eventuais vícios construtivos, falhas de acabamento, não conformidades em instalações elétricas e hidráulicas, ou itens pendentes de finalização pela construtora. Este processo é essencial para garantir os direitos do consumidor, facilitar as tratativas com a construtora para correções e assegurar que o apartamento esteja em perfeitas condições antes da aceitação definitiva.",
      imageSrc: "/placeholder.svg?width=500&height=400",
      imageAlt: "Inspeção de apartamento novo com checklist",
      ctaText: "Solicitar Vistoria de Apto Novo via WhatsApp",
      layout: "imageRight",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-200">
      <WhatsAppFloatingButton />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-20 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="mb-6 md:mb-8 flex justify-center">
              <Image
                src="/logo-coart.png"
                alt="Coarte Engenharia Civil Logo"
                width={240}
                height={80}
                className="object-contain md:w-[280px] md:h-[90px]"
                priority
              />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight">
              Engenharia Civil de Precisão:
              <br />
              <span className="text-amber-400">Segurança e Valor para Seu Patrimônio.</span>
            </h1>
            <p className="mt-4 md:mt-6 max-w-3xl mx-auto text-base md:text-lg lg:text-xl text-gray-300 px-2">
              Na Coarte Engenharia Civil, transformamos desafios em soluções sólidas. Oferecemos expertise técnica e
              compromisso com a qualidade em cada projeto, garantindo a integridade e a valorização do seu investimento.
            </p>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4">
              <Button
                asChild
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 md:px-8 text-base md:text-lg w-full sm:w-auto"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Fale com um Especialista
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-semibold px-6 py-3 md:px-8 text-base md:text-lg w-full sm:w-auto"
              >
                <a href="#services">Nossos Serviços</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Storytelling Section */}
        <section id="storytelling" className="py-12 md:py-16 lg:py-24 bg-gray-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl px-2">
                Nossa História: <span className="text-amber-400">Paixão por Construir o Futuro</span>
              </h2>
              <p className="mt-3 md:mt-4 max-w-3xl mx-auto text-base md:text-lg text-gray-300 px-2">
                Conheça a trajetória da Coarte Engenharia Civil, moldada pela dedicação à excelência e ao compromisso
                com nossos clientes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4 md:space-y-6 order-2 md:order-1">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-amber-500/20 p-2.5 md:p-3 rounded-full flex-shrink-0">
                    <BookOpen className="h-6 w-6 md:h-7 md:w-7 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-amber-400">A Fundação</h3>
                    <p className="text-gray-300 mt-1 text-sm md:text-base leading-relaxed">
                      A Coarte Engenharia Civil nasceu do sonho de transformar o conhecimento técnico em soluções
                      práticas e seguras para o setor da construção. Fundada por engenheiros apaixonados pela precisão e
                      pela inovação, nossa jornada começou com o objetivo claro de oferecer serviços de diagnóstico que
                      realmente fizessem a diferença na vida e nos investimentos de nossos clientes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-amber-500/20 p-2.5 md:p-3 rounded-full flex-shrink-0">
                    <Users className="h-6 w-6 md:h-7 md:w-7 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-amber-400">Nossa Missão e Valores</h3>
                    <p className="text-gray-300 mt-1 text-sm md:text-base leading-relaxed">
                      Nossa missão é garantir a segurança, a conformidade e a valorização de imóveis através de laudos e
                      vistorias técnicas de alta precisão. Atuamos com integridade, transparência e um compromisso
                      inabalável com a qualidade. Cada projeto é tratado com a máxima atenção, buscando sempre superar
                      as expectativas e construir relações de confiança duradouras.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-amber-500/20 p-2.5 md:p-3 rounded-full flex-shrink-0">
                    <Target className="h-6 w-6 md:h-7 md:w-7 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-amber-400">Visão de Futuro</h3>
                    <p className="text-gray-300 mt-1 text-sm md:text-base leading-relaxed">
                      Olhamos para o futuro com o objetivo de sermos referência em engenharia diagnóstica, expandindo
                      nossa atuação e incorporando as mais recentes tecnologias e metodologias. Queremos continuar
                      contribuindo para um mercado imobiliário mais seguro, transparente e eficiente, sempre ao lado de
                      nossos clientes em cada etapa de seus projetos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center order-1 md:order-2">
                <Image
                  src="/placeholder.svg?width=500&height=500"
                  alt="Equipe Coarte Engenharia Civil em planejamento"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-2xl object-cover aspect-square md:w-[500px] md:h-[500px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Summary Section */}
        <section id="services" className="py-12 md:py-16 lg:py-24 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl px-2">
                Nossos <span className="text-amber-400">Serviços Especializados</span>
              </h2>
              <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-base md:text-lg text-gray-300 px-2">
                Soluções completas em engenharia diagnóstica para garantir a segurança, conformidade e valorização do
                seu imóvel. Clique em um serviço para saber mais.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {servicesSummary.map((service) => (
                <a href={`#${service.id}`} key={service.title} className="block group">
                  <Card className="bg-gray-900 border-gray-800 text-gray-200 shadow-lg group-hover:shadow-amber-500/20 transition-all duration-300 group-hover:scale-105 h-full flex flex-col">
                    <CardHeader className="flex flex-col items-center text-center gap-2 md:gap-3 pb-3 md:pb-4 pt-4 md:pt-6">
                      <div className="bg-gray-800 p-3 md:p-4 rounded-full">{service.icon}</div>
                      <CardTitle className="text-lg md:text-xl font-semibold text-amber-400 leading-tight">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center flex-grow px-3 md:px-6">
                      <CardDescription className="text-gray-300 text-xs md:text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services Sections */}
        {detailedServices.map((service, index) => (
          <section
            id={service.id}
            key={service.id}
            className={`py-12 md:py-16 lg:py-24 ${index % 2 === 0 ? "bg-gray-950" : "bg-black"}`}
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div
                  className={`flex justify-center order-1 ${service.layout === "imageLeft" ? "md:order-1" : "md:order-2"}`}
                >
                  <Image
                    src={service.imageSrc || "/placeholder.svg"}
                    alt={service.imageAlt}
                    width={400}
                    height={320}
                    className="rounded-lg shadow-2xl object-cover w-full max-w-md md:max-w-none md:w-[500px] md:h-[400px]"
                  />
                </div>
                <div className={`order-2 ${service.layout === "imageLeft" ? "md:order-2" : "md:order-1"}`}>
                  {service.icon}
                  <h3 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl mb-3 md:mb-2 leading-tight">
                    {service.title} <span className="text-amber-400">{service.subtitle}</span>
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">{service.fullDescription}</p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-amber-500 hover:bg-amber-600 text-black font-semibold w-full md:w-auto"
                  >
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      {service.ctaText}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Call to Action Section */}
        <section id="contact" className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-gray-900 p-6 md:p-8 lg:p-12 rounded-xl shadow-2xl text-center border border-amber-500/50">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl px-2 leading-tight">
                Pronto para <span className="text-amber-400">Garantir a Segurança e o Valor</span> do Seu Imóvel?
              </h2>
              <p className="mt-3 md:mt-4 max-w-xl mx-auto text-base md:text-lg text-gray-300 px-2">
                Entre em contato conosco hoje mesmo para um orçamento personalizado ou para esclarecer suas dúvidas.
                Nossa equipe está pronta para atendê-lo.
              </p>
              <div className="mt-6 md:mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 md:px-10 text-lg md:text-xl w-full sm:w-auto"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Fale Conosco via WhatsApp
                  </a>
                </Button>
              </div>
              <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-center md:text-left max-w-2xl mx-auto">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-amber-400" />
                  <a
                    href="mailto:contato@coarteengenharia.com.br"
                    className="text-gray-300 hover:text-amber-400 text-sm md:text-base break-all"
                  >
                    contato@coarteengenharia.com.br
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-amber-400" />
                  <span className="text-gray-300 text-sm md:text-base">(16) 99604-2857</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="py-6 md:py-8 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="flex items-center">
            <Image
              src="/logo-coart.png"
              alt="Coarte Engenharia Civil Logo"
              width={120}
              height={40}
              className="object-contain md:w-[150px] md:h-[50px]"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs md:text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Coarte Engenharia Civil. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-500 mt-1">Soluções Inteligentes para Construções Seguras.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
