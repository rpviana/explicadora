import { Layout } from "@/components/layout/Layout";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/ui/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  GraduationCap,
  Heart,
  Target,
  Users,
  Award,
  BookOpen,
  Lightbulb,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import fotoExplicadora from "@assets/foto-explicadora.jpeg";

const timelineItems = [
  {
    year: "2014",
    title: "Início da Jornada",
    description: "Começou a dar explicações particulares em casa, descobrindo a paixão pelo ensino personalizado.",
  },
  {
    year: "2019",
    title: "Expansão dos Serviços",
    description: "Ampliação para novas disciplinas e níveis de ensino, do 1.º Ciclo ao Secundário.",
  },
  {
    year: "2022",
    title: "Centro de Explicações",
    description: "Abertura do espaço dedicado na Sala 212, Edifício América, com ambiente profissional.",
  },
  {
    year: "2024",
    title: "10 Anos de Excelência",
    description: "Celebração de uma década de sucesso com centenas de alunos apoiados.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Dedicação",
    description: "Comprometemo-nos totalmente com o sucesso de cada aluno.",
  },
  {
    icon: Target,
    title: "Foco",
    description: "Trabalhamos com objetivos claros e metas definidas.",
  },
  {
    icon: Users,
    title: "Personalização",
    description: "Cada aluno recebe um plano de estudo adaptado às suas necessidades.",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Utilizamos métodos de ensino modernos e eficazes.",
  },
];

const differentials = [
  "Mais de 10 anos de experiência comprovada",
  "Ambiente calmo e profissional",
  "Métodos de estudo personalizados",
  "Preparação intensiva para Exames Nacionais",
  "Acompanhamento contínuo do progresso",
  "Horários flexíveis",
];

export default function About() {
  return (
    <Layout>
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-primary/95 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyem0wLTR2MkgyNHYtMmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6" data-testid="badge-about-hero">
              <GraduationCap className="h-4 w-4" />
              A Nossa História
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6" data-testid="heading-about">
              Sobre Nós
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Conheça a história do Centro de Explicações Diana Pimentel e descubra
              o que nos torna diferentes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <AnimatedSection direction="left">
              <div className="aspect-[9/16] w-64 mx-auto lg:mx-0 lg:ml-auto rounded-lg overflow-hidden shadow-xl">
                <img
                  src={fotoExplicadora}
                  alt="Diana Pimentel - Explicadora"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                A Nossa Experiência
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Tudo começou em 2014, na simplicidade de casa</strong>,
                  com a paixão pelo ensino e o desejo genuíno de ajudar os alunos a alcançarem
                  o seu potencial máximo. O que era apenas uma sala transformou-se numa verdadeira
                  missão de vida.
                </p>
                <p>
                  Com o passar dos anos e o <strong className="text-foreground">reconhecimento do trabalho dedicado</strong>,
                  a procura cresceu naturalmente. Os resultados positivos dos alunos e as recomendações
                  de famílias satisfeitas levaram à expansão dos serviços em 2019, abrangendo mais
                  disciplinas e níveis de ensino.
                </p>
                <p>
                  Em 2022, devido ao crescimento contínuo e ao compromisso com a excelência,
                  nasceu o <strong className="text-foreground">Centro de Explicações Diana Pimentel</strong> na
                  Sala 212 do Edifício América. Um espaço profissional e acolhedor, pensado para
                  proporcionar as melhores condições de aprendizagem aos nossos alunos.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/contactos">
                  <Button className="gap-2" data-testid="button-about-contact">
                    Fale Connosco
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              A Nossa Jornada
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma década de dedicação ao ensino e ao sucesso dos nossos alunos.
            </p>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <StaggerChildren className="space-y-8">
              {timelineItems.map((item, index) => (
                <StaggerItem key={index}>
                  <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <Card className="inline-block" data-testid={`card-timeline-${index}`}>
                        <CardContent className="p-6">
                          <div className="text-accent font-bold text-lg mb-2">{item.year}</div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-accent z-10" />

                    <div className="flex-1 hidden md:block" />
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Os Nossos Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam o nosso trabalho e compromisso com os alunos.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <Card className="h-full text-center" data-testid={`card-value-${index}`}>
                  <CardContent className="p-6">
                    <div className="p-3 rounded-md bg-accent/10 w-fit mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                O Que Nos Diferencia
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                No Centro de Explicações Diana Pimentel, oferecemos uma experiência de aprendizagem
                única, focada no sucesso individual de cada aluno.
              </p>

              <ul className="space-y-4">
                {differentials.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="bg-primary text-primary-foreground" data-testid="card-cta-about">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="h-8 w-8 text-accent" />
                    <h3 className="text-2xl font-bold">Taxa de Sucesso de 95%</h3>
                  </div>
                  <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                    Os nossos alunos alcançam consistentemente os seus objetivos académicos,
                    seja melhorar notas, passar nos exames ou entrar na universidade.
                  </p>
                  <a href="https://wa.me/351919977198" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 gap-2" data-testid="button-about-whatsapp">
                      Marcar Aula Experimental
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
