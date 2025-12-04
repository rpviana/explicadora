import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Clock, BookOpen, Calculator, FlaskConical, FileCheck, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/ui/animated-section";

const stats = [
  { icon: Clock, value: "10+", label: "Anos de Experiência" },
  { icon: Users, value: "500+", label: "Alunos Apoiados" },
  { icon: Award, value: "95%", label: "Taxa de Sucesso" },
];

const services = [
  {
    icon: BookOpen,
    title: "Língua Portuguesa",
    description: "Especialização completa desde o Básico até ao Ensino Superior e Teses.",
    href: "/servicos",
  },
  {
    icon: Calculator,
    title: "Matemática",
    description: "Explicador dedicado exclusivamente a Matemática para máximo rigor.",
    href: "/servicos",
  },
  {
    icon: FlaskConical,
    title: "Ciências & Biologia",
    description: "Apoio sólido a Físico-Química e Biologia até ao Secundário.",
    href: "/servicos",
  },
  {
    icon: FileCheck,
    title: "Preparação Exames",
    description: "Treino intensivo para Exames Nacionais e Frequências.",
    href: "/servicos",
  },
];

const testimonials = [
  {
    name: "Maria Silva",
    role: "Aluna 12.º Ano",
    content: "Graças ao apoio da Diana, consegui subir a minha nota de Português de 12 para 17. O método de ensino é fantástico!",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Pai de Aluno",
    content: "O meu filho melhorou significativamente em Matemática. A dedicação e paciência da equipa são extraordinárias.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Aluna Universitária",
    content: "Excelente apoio na elaboração da minha tese. Profissionalismo e atenção ao detalhe impecáveis.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <Layout>
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-primary via-primary to-primary/95 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyem0wLTR2MkgyNHYtMmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6" data-testid="badge-hero">
                <Award className="h-4 w-4" />
                Centro de Explicações de Excelência
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              data-testid="heading-hero"
            >
              Mais de 10 Anos a Construir{" "}
              <span className="text-accent">Sucesso Escolar</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Apoio personalizado desde o 1.º Ciclo até ao Ensino Superior.
              Especialistas em Português, Matemática e Ciências.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="https://wa.me/351919977198" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold gap-2" data-testid="button-hero-cta">
                  Começar Agora
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
              <Link href="/servicos">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-white/10 font-semibold" data-testid="button-hero-services">
                  Ver Serviços
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StaggerItem key={index}>
                <div className="flex items-center gap-4 p-6" data-testid={`stat-item-${index}`}>
                  <div className="p-3 rounded-md bg-accent/10">
                    <stat.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground" data-testid={`stat-value-${index}`}>{stat.value}</div>
                    <div className="text-sm text-muted-foreground" data-testid={`stat-label-${index}`}>{stat.label}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Os Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos apoio especializado em diversas disciplinas, adaptado às necessidades de cada aluno.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <Link href={service.href}>
                  <Card className="group h-full hover-elevate cursor-pointer border-border transition-all duration-300 hover:border-accent/50" data-testid={`card-service-${index}`}>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="p-3 rounded-md bg-primary/10 group-hover:bg-accent/20 transition-colors">
                        <service.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <AnimatedSection delay={0.4} className="text-center mt-8">
            <Link href="/servicos">
              <Button variant="outline" className="gap-2" data-testid="button-view-all-services">
                Ver Todos os Serviços
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              O Que Dizem os Nossos Alunos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A satisfação dos nossos alunos é a nossa maior recompensa.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <Card className="h-full" data-testid={`card-testimonial-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-foreground mb-4 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="border-t border-border pt-4">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <AnimatedSection delay={0.4} className="text-center mt-8">
            <Link href="/testemunhos">
              <Button variant="outline" className="gap-2" data-testid="button-view-all-testimonials">
                Ver Mais Testemunhos
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Pronto Para Começar?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Marque já a sua primeira aula e descubra como podemos ajudar a alcançar o sucesso escolar.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/351919977198" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold gap-2" data-testid="button-cta-whatsapp">
                  Falar no WhatsApp
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
              <Link href="/contactos">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-white/10 font-semibold" data-testid="button-cta-contact">
                  Ver Contactos
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
