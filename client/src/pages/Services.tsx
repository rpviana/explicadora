import { Layout } from "@/components/layout/Layout";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/ui/animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Calculator,
  FlaskConical,
  FileCheck,
  GraduationCap,
  ArrowRight,
  Users,
  User,
  Clock,
  Target,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Língua Portuguesa",
    description: "Especialização completa em Língua Portuguesa, desde o ensino básico até ao nível superior. Apoio na elaboração de teses, dissertações e trabalhos académicos.",
    levels: ["1.º ao 4.º Ano", "5.º ao 9.º Ano", "Secundário", "Ensino Superior"],
    color: "from-blue-500/10 to-indigo-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Calculator,
    title: "Matemática",
    description: "Explicador dedicado exclusivamente a Matemática, garantindo máximo rigor e atenção. Abordagem prática com exercícios focados nos pontos de dificuldade.",
    levels: ["1.º ao 4.º Ano", "5.º ao 9.º Ano", "Secundário"],
    color: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-600",
  },
  {
    icon: FlaskConical,
    title: "Ciências & Biologia",
    description: "Apoio sólido em Físico-Química e Biologia até ao Secundário. Aulas teóricas complementadas com exemplos práticos e exercícios de aplicação.",
    levels: ["5.º ao 9.º Ano", "Secundário"],
    color: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-600",
  },
  {
    icon: FileCheck,
    title: "Preparação para Exames",
    description: "Treino intensivo e focado para Exames Nacionais e Frequências universitárias. Simulações de exame e técnicas de gestão de tempo.",
    levels: ["9.º Ano", "Secundário", "Ensino Superior"],
    color: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-600",
  },
];

const classTypes = [
  {
    icon: User,
    title: "Aulas Individuais",
    description: "Atenção 100% personalizada com foco total nas necessidades específicas do aluno",
    features: ["Ritmo adaptado", "Horário flexível", "Máximo aproveitamento"],
  },
  {
    icon: Users,
    title: "Aulas de Grupo",
    description: "Aprendizagem colaborativa em pequenos grupos com partilha de conhecimentos",
    features: ["Ambiente motivador", "Partilha de ideias", "Preço mais acessível"],
  },
];

const benefits = [
  {
    icon: Target,
    title: "Objetivos Claros",
    description: "Metas definidas e progresso acompanhado regularmente",
  },
  {
    icon: Clock,
    title: "Horários Flexíveis",
    description: "Adaptamos às necessidades da sua família",
  },
  {
    icon: CheckCircle2,
    title: "Resultados Comprovados",
    description: "95% de taxa de sucesso dos nossos alunos",
  },
];

export default function Services() {
  return (
    <Layout>
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-primary/95 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyem0wLTR2MkgyNHYtMmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6" data-testid="badge-services-hero">
              <GraduationCap className="h-4 w-4" />
              Apoio Escolar Especializado
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6" data-testid="heading-services">
              Os Nossos Serviços
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Oferecemos explicações personalizadas em diversas disciplinas,
              desde o 1.º Ciclo até ao Ensino Superior.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Class Types Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Escolha o Formato Ideal
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos aulas individuais e de grupo para se adaptar às suas preferências
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {classTypes.map((type, index) => (
              <StaggerItem key={index}>
                <Card className="h-full hover-elevate" data-testid={`card-class-type-${index}`}>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 rounded-lg bg-accent/10">
                        <type.icon className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{type.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {type.description}
                    </p>
                    <ul className="space-y-3">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <div className="flex items-center gap-4 p-4" data-testid={`benefit-${index}`}>
                  <div className="p-3 rounded-md bg-accent/10">
                    <benefit.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground" data-testid={`benefit-title-${index}`}>{benefit.title}</div>
                    <div className="text-sm text-muted-foreground">{benefit.description}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Disciplinas Disponíveis
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Apoio especializado nas principais disciplinas escolares
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <Card
                  className="h-full group hover-elevate overflow-hidden"
                  data-testid={`card-service-detail-${index}`}
                >
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br ${service.color}">
                        <service.icon className={`h-7 w-7 ${service.iconColor}`} />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" />
                        Níveis de Ensino
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.levels.map((level, i) => (
                          <Badge key={i} variant="secondary" className="text-xs px-3 py-1">
                            {level}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <a href="https://wa.me/351919977198" target="_blank" rel="noopener noreferrer" className="block">
                      <Button
                        className="w-full gap-2 group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                        variant="outline"
                        data-testid={`button-service-${index}`}
                      >
                        Saber Mais
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Card className="bg-primary text-primary-foreground" data-testid="card-cta-services">
              <CardContent className="p-8 lg:p-12 text-center">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  Não Encontrou o Que Procura?
                </h2>
                <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Contacte-nos para discutir as suas necessidades específicas.
                  Oferecemos apoio personalizado e podemos adaptar os nossos serviços
                  às suas necessidades.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="https://wa.me/351919977198" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2" data-testid="button-services-whatsapp">
                      Falar no WhatsApp
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </a>
                  <a href="tel:+351919977198">
                    <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-white/10" data-testid="button-services-call">
                      Ligar Agora
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
