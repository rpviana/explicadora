import { Layout } from "@/components/layout/Layout";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/ui/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Quote, 
  GraduationCap,
  TrendingUp,
  Users,
  Award,
  ArrowRight
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Aluna 12.º Ano - Português",
    content: "Graças ao apoio da Diana, consegui subir a minha nota de Português de 12 para 17. O método de ensino é fantástico e sinto-me muito mais confiante para o exame nacional.",
    rating: 5,
    improvement: "+5 valores",
  },
  {
    id: 2,
    name: "João Santos",
    role: "Pai de Aluno - 9.º Ano",
    content: "O meu filho melhorou significativamente em Matemática. A dedicação e paciência da equipa são extraordinárias. Recomendo a todos os pais que procuram apoio escolar de qualidade.",
    rating: 5,
    improvement: null,
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Aluna Universitária - Tese",
    content: "Excelente apoio na elaboração da minha tese de mestrado. Profissionalismo e atenção ao detalhe impecáveis. A Diana ajudou-me a estruturar as ideias e a melhorar a escrita.",
    rating: 5,
    improvement: null,
  },
  {
    id: 4,
    name: "Pedro Ferreira",
    role: "Aluno 11.º Ano - Matemática",
    content: "Estava com muitas dificuldades em Matemática e pensava que nunca iria conseguir. Depois de começar as explicações, a matéria começou a fazer sentido e as notas subiram.",
    rating: 5,
    improvement: "+4 valores",
  },
  {
    id: 5,
    name: "Teresa Oliveira",
    role: "Mãe de Aluna - 6.º Ano",
    content: "A minha filha adora as aulas! O ambiente é muito acolhedor e a Diana tem uma paciência enorme. Notámos uma grande melhoria nas notas e na autoconfiança dela.",
    rating: 5,
    improvement: null,
  },
  {
    id: 6,
    name: "Ricardo Mendes",
    role: "Aluno 12.º Ano - Biologia",
    content: "Preparação excelente para o exame de Biologia e Geologia. Os exercícios e simulações de exame foram fundamentais para o meu sucesso. Consegui 18 valores!",
    rating: 5,
    improvement: "18 valores",
  },
  {
    id: 7,
    name: "Carla Rodrigues",
    role: "Aluna 10.º Ano - Físico-Química",
    content: "As explicações de Físico-Química são muito claras e bem organizadas. A professora explica de forma simples e usa muitos exemplos práticos que ajudam a perceber melhor.",
    rating: 5,
    improvement: "+3 valores",
  },
  {
    id: 8,
    name: "Miguel Almeida",
    role: "Pai de Aluno - 4.º Ano",
    content: "O meu filho estava com dificuldades no Português e a Diana ajudou-o imenso. Agora ele gosta de ler e escrever! O acompanhamento é muito personalizado.",
    rating: 5,
    improvement: null,
  },
  {
    id: 9,
    name: "Sofia Martins",
    role: "Aluna 9.º Ano - Português",
    content: "Preparação muito boa para os exames do 9.º ano. A Diana ensinou-me técnicas de interpretação de texto e redação que me ajudaram muito. Recomendo!",
    rating: 5,
    improvement: "+4 valores",
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Alunos Apoiados" },
  { icon: TrendingUp, value: "95%", label: "Taxa de Sucesso" },
  { icon: Award, value: "10+", label: "Anos de Experiência" },
  { icon: Star, value: "5.0", label: "Avaliação Média" },
];

export default function Testimonials() {
  return (
    <Layout>
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-primary/95 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyem0wLTR2MkgyNHYtMmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6" data-testid="badge-testimonials-hero">
              <Star className="h-4 w-4" />
              Histórias de Sucesso
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6" data-testid="heading-testimonials">
              O Que Dizem os Nossos Alunos
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              A satisfação dos nossos alunos e suas famílias é a nossa maior recompensa. 
              Conheça algumas das suas histórias.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StaggerItem key={index}>
                <div className="text-center" data-testid={`testimonials-stat-${index}`}>
                  <div className="p-3 rounded-md bg-accent/10 w-fit mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-foreground" data-testid={`testimonials-stat-value-${index}`}>{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.id}>
                <Card className="h-full" data-testid={`card-testimonial-${testimonial.id}`}>
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                      {testimonial.improvement && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium">
                          <TrendingUp className="h-3 w-3" />
                          {testimonial.improvement}
                        </span>
                      )}
                    </div>

                    <Quote className="h-8 w-8 text-accent/20 mb-2" />
                    
                    <p className="text-foreground mb-6 leading-relaxed flex-1">
                      {testimonial.content}
                    </p>

                    <div className="border-t border-border pt-4 mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-semibold text-primary">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Card className="bg-primary text-primary-foreground" data-testid="card-cta-testimonials">
              <CardContent className="p-8 lg:p-12 text-center">
                <GraduationCap className="h-12 w-12 text-accent mx-auto mb-4" />
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  Seja o Próximo Caso de Sucesso
                </h2>
                <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Junte-se aos centenas de alunos que alcançaram os seus objetivos académicos 
                  com o nosso apoio. Marque já a sua primeira aula!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="https://wa.me/351919977198" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2" data-testid="button-testimonials-whatsapp">
                      Marcar Aula Agora
                      <ArrowRight className="h-5 w-5" />
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
