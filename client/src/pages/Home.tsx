import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import {
  Car,
  CheckCircle2,
  Clock,
  Gauge,
  Mail,
  MapPin,
  Phone,
  Pipette,
  Ruler,
  Settings,
  Shield,
  Wrench,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Troca de Óleo e Filtros",
      description: "Manutenção preventiva completa com óleos e filtros de qualidade premium.",
    },
    // {
    //   icon: <Gauge className="w-8 h-8" />,
    //   title: "Alinhamento e Balanceamento",
    //   description: "Equipamentos de última geração para garantir estabilidade e economia.",
    // },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Freios e Suspensão",
      description: "Inspeção e manutenção completa do sistema de freios e suspensão.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Revisão Completa",
      description: "Check-up geral do veículo com relatório detalhado de condições.",
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Regulagem de Motor",
      description: "Ajuste de componentes e parametrização a fim de otimizar consumo e desempenho.",
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Injeção eletrônica",
      description: "Sistema que dosa eletronicamente o combustível e o ar para o motor, otimizando desempenho e economia.",
    },
  ];

  const differentials = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Garantia de Serviço",
      description: "Todos os serviços com garantia",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Atendimento Rápido",
      description: "Agilidade sem perder a qualidade",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Profissionais Qualificados",
      description: "Equipe certificada e experiente",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="inicio"
          className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32"
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url(/quintal.png)" }}
          ></div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Seu Carro em Boas Mãos
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-slate-200">
                Manutenção automotiva de qualidade.
                Cuidamos do seu veículo como se fosse nosso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg gap-2"  onClick={() => {
                const phoneNumber = "51993279317"; // número sem formatação
                const message = encodeURIComponent(
                  "Olá! Tudo bem? Gostaria de saber mais sobre os serviços da oficina."
                );
                window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
              }}>
                  <Phone className="w-5 h-5" />
                  Agendar Serviço
                </Button>
                <a
                  href="https://www.instagram.com/garage41_mecanica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                  >
                <Button size="lg" variant="outline" className="text-lg bg-white/10 hover:bg-white/20 text-white border-white/30 w-full">
                  Nossos Serviços
                </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-12 bg-primary text-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="py-20 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Oferecemos uma ampla gama de serviços automotivos com equipamentos modernos
                e profissionais qualificados.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Mais de 15 Anos de Experiência com mecânica
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  A Garage 41 nasceu com o propósito de oferecer serviços automotivos
                  de excelência. Nossa equipe é formada por
                  profissionais certificados e apaixonados por automóveis.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Trabalhamos com marcas originais de peças, garantindo qualidade em cada serviço realizado.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <div className="text-muted-foreground">Anos de Experiência</div>
                  </div>
                  {/* <div>
                    <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                    <div className="text-muted-foreground">Clientes Satisfeitos</div>
                  </div> */}
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-muted-foreground">Garantia de Qualidade</div>
                  </div>
                  {/* <div>
                    <div className="text-4xl font-bold text-primary mb-2">24h</div>
                    <div className="text-muted-foreground">Suporte Emergencial</div>
                  </div> */}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/mechanic.png"
                  alt="Mecânico trabalhando"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <img
                  src="/tools.png"
                  alt="Interior da oficina"
                  className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-20 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Estamos prontos para atender você. Agende seu serviço ou tire suas dúvidas.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Informações de Contato */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Endereço</h3>
                        <p className="text-muted-foreground">
                          Rua Vasco da Gama, 41<br />
                          Santa Cruz - Gravataí/RS<br />
                          CEP: 94170-060
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Telefone</h3>
                        <p className="text-muted-foreground">
                          (51) 99327-9317
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Horário de Funcionamento</h3>
                        <p className="text-muted-foreground">
                          Segunda a Sexta: 8h às 18h<br />
                          Sábado: 8h às 13h<br />
                          Domingo: Fechado
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Mapa */}
              <div>
                <Card className="h-full">
                  <CardContent className="p-0 h-full min-h-[500px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3480.525742860017!2d-51.0064275!3d-29.921538299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95190ca97075325b%3A0x9b5ef54689200d78!2sR.%20Vasco%20da%20Gama%2C%2041%20-%20Santa%20Cruz%2C%20Gravata%C3%AD%20-%20RS%2C%2094170-060!5e1!3m2!1spt-BR!2sbr!4v1761191121392!5m2!1spt-BR!2sbr"
                      width="100%"
                      height="100%"
                      style={{ border: 0, borderRadius: "0.5rem" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização da Oficina Mecânica"
                    ></iframe>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Final */}
            <div className="mt-12 text-center bg-primary text-white rounded-2xl p-12">
              <h3 className="text-3xl font-bold mb-4">Pronto para Cuidar do Seu Carro?</h3>
              <p className="text-xl mb-8 text-white/90">
                Entre em contato agora e agende seu serviço com nossa equipe especializada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg gap-2" onClick={() => {
                  const phoneNumber = "51993279317"; // número sem formatação
                  const message = encodeURIComponent(
                    "Olá! Tudo bem? Gostaria de saber mais sobre os serviços da oficina."
                  );
                  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
                }}
                >
                  <Phone className="w-5 h-5" />
                  (51) 99327-9317
                </Button>
                {/* <Button size="lg" variant="outline" className="text-lg bg-white/10 hover:bg-white/20 text-white border-white/30 gap-2">
                  <Mail className="w-5 h-5" />
                  Enviar E-mail
                </Button> */}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

