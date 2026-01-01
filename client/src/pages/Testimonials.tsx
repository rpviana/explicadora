import { useState } from "react";
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

type TestimonialCategory = "student" | "parent";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  improvement: string | null;
  category: TestimonialCategory;
  yearOrCourse?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Santos",
    role: "Aluna",
    content: "Obrigada a ti que ajudaste neste processo e contribuíste para que esta realização fosse possível. Foi um trabalho longo e árduo que compensou todo o esforço, foi um trabalho de dupla e não só individual. Mais uma vez, obrigada por caminhares junto comigo nesta etapa.",
    rating: 5,
    improvement: null,
    category: "student",
    yearOrCourse: "12.º Ano",
  },
  {
    id: 2,
    name: "Ana Sofia",
    role: "Aluna",
    content: "eu gostei muito das explicações pois com elas consegui superar muitas das dificuldades que tinha principalmente a nível da escrita. acho que o método que a professora usa é muito bom e dinâmico. obrigada",
    rating: 5,
    improvement: "melhoria na escrita",
    category: "student",
  },
  {
    id: 3,
    name: "Raquel Fernandes",
    role: "Encarregada de Educação",
    content: "Obrigada explicadora Diana por tudo... É simplesmente fantástica, obrigada por tudo o que ajudou e vai continuar a ajudar o Gustavo...recomendo 100%",
    rating: 5,
    improvement: null,
    category: "parent",
  },
  {
    id: 4,
    name: "Rodrigo Viana",
    role: "Aluno",
    yearOrCourse: "12.º Ano",
    content: "Estou com a minha explicadora há cerca de 9 anos e a minha experiência tem sido excecional. Comecei no terceiro ano e agora, no 12.º, ela teve um papel fundamental no meu crescimento académico e pessoal. Consigo melhorar significativamente as minhas notas e organizar melhor o meu tempo.",
    rating: 5,
    improvement: "Melhoria significativa de notas",
    category: "student",
  },
  {
    id: 5,
    name: "Simão Morais",
    role: "Aluno",
    content: "Entrei desde o 2 ano nas explicações e estou até agora. A professora é muito profissional e explica muito bem. Consegui subir notas de 3 para notas de 4 e faz muitas atividades nas férias.",
    rating: 5,
    improvement: "Subida de 3 para 4",
    category: "student",
  },
  {
    id: 6,
    name: "Inês Viana",
    role: "Encarregada de Educação",
    content: "Mais que uma Professora ou Explicadora… uma verdadeira Amiga. Acompanhou o meu filho desde os 8 anos, sempre presente, incansável e genuinamente preocupada com o seu sucesso.",
    rating: 5,
    improvement: null,
    category: "parent",
  },
  {
    id: 7,
    name: "Danii",
    role: "Aluna",
    content: "Ótima explicadora, super agradável e pronta para ajudar e tirar dúvidas!! Disponibiliza imensas fichas e exercícios para desenvolver as competências dos alunos!! Recomendo muito.",
    rating: 5,
    improvement: null,
    category: "student",
  },
  {
    id: 8,
    name: "Tiago Silva",
    role: "Aluno",
    content: "Preço bastante em conta sendo que se dedica completamente ao aluno, dá-lhe material para aprender como fotocópias com exercícios ou até mesmo exercícios feitos pela mesma.",
    rating: 5,
    improvement: null,
    category: "student",
  },
  {
    id: 9,
    name: "Martim (grop)",
    role: "Aluno",
    yearOrCourse: "12.º Ano",
    content: "Simplesmente de topo, acompanha do princípio ao fim. Em 2 meses de explicações, mesmo durante o estágio e uma PAP, consegui estudar para o exame de português e entrar na minha primeira opção na primeira fase.",
    rating: 5,
    improvement: "Entrada na 1.ª opção",
    category: "student",
  },
  {
    id: 10,
    name: "Ana Patricia Moreira",
    role: "Encarregada de Educação",
    content: "Gostaria de agradecer à explicadora Diana pelo excelente trabalho desempenhado com a minha filha. Demonstrou sempre profissionalismo, dedicação e muita paciência.",
    rating: 5,
    improvement: "Evolução na aprendizagem",
    category: "parent",
  },
  {
    id: 11,
    name: "Tomas Araujo",
    role: "Aluno",
    content: "É uma excelente professora e explica muito bem. Gosto muito de ir para a explicação.",
    rating: 5,
    improvement: null,
    category: "student",
  },
  {
    id: 12,
    name: "Bia Santos",
    role: "Aluna",
    content: "As explicações são boas e a professora espetacular.",
    rating: 5,
    improvement: null,
    category: "student",
  },
  {
    id: 13,
    name: "Mariana Kyselytsya",
    role: "Aluna",
    content: "A Diana é uma pessoa de muita confiança, e que se preocupa muito com os seus alunos.",
    rating: 5,
    improvement: null,
    category: "student",
  },
  {
    id: 14,
    name: "Maria P. M. Sant'Anna",
    role: "Encarregada de Educação",
    content: "Óptimo centro de explicações, recomendo!",
    rating: 5,
    improvement: null,
    category: "parent",
  },
  {
    id: 15,
    name: "Beatriza Lima",
    role: "Aluna",
    content: "Muito simpática e preocupada com o desempenho dos alunos.",
    rating: 5,
    improvement: null,
    category: "student",
  },
  {
    id: 16,
    name: "Tiago Santos",
    role: "Aluno",
    content: "Recomendo. Ajudou-me bastante a português.",
    rating: 5,
    improvement: "Melhoria a Português",
    category: "student",
  },
  {
    id: 17,
    name: "Hugo Lima",
    role: "Encarregado de Educação",
    content: "Muito competente e dedicada!",
    rating: 5,
    improvement: null,
    category: "parent",
  },
  {
    id: 18,
    name: "Maria Inês Ribeiro",
    role: "Encarregada de Educação",
    content: "Centro de estudos impecável.",
    rating: 5,
    improvement: null,
    category: "parent",
  },
  {
    id: 19,
    name: "Paulo Ramos",
    role: "Encarregado de Educação",
    content: "Excelente administração das necessidades dos estudantes e direcionamento eficaz do apoio à capacidade de aprendizado. Excelentes resultados individuais.",
    rating: 5,
    improvement: "Resultados individuais excelentes",
    category: "parent",
  },
  {
    id: 20,
    name: "Leonardo T",
    role: "Aluno",
    content: "Excelente explicadora, muito dedicada e sempre disponível para ajudar. Ajudou imenso na melhoria do Português, tanto na escrita quanto na gramática.",
    rating: 5,
    improvement: "Melhoria na escrita e gramática",
    category: "student",
  },
  {
    id: 21,
    name: "Carolina Malato",
    role: "Encarregada de Educação",
    content: "Incrível serviço! Com a Diana sei que qualquer um irá aprender e divertir-se. Profissional incrível, recomendo de olhos fechados.",
    rating: 5,
    improvement: null,
    category: "parent",
  },
  {
    id: 22,
    name: "Helder Martins",
    role: "Aluno",
    yearOrCourse: "Exames Nacionais",
    content: "A professora Diana Pimentel e o professor Paulo Acácio foram cruciais para as minhas aprendizagens, o que me levou a que esses conhecimentos se reflectissem nas notas dos exames nacionais.",
    rating: 5,
    improvement: "Sucesso nos Exames Nacionais",
    category: "student",
  },
  {
    id: 23,
    name: "Marta Pinheiro",
    role: "Encarregada de Educação",
    content: "Excelente profissional. Muito amiga e dedicada aos seus alunos.. Recomendo 100%",
    rating: 5,
    improvement: null,
    category: "parent",
  },
  {
    id: 24,
    name: "Tiago Ribeiro",
    role: "Encarregado de Educação",
    content: "A explicadora Diana demonstrou elevado profissionalismo e eficácia no acompanhamento da minha filha, contribuindo claramente para a sua evolução académica.",
    rating: 5,
    improvement: "Evolução académica",
    category: "parent",
  },
  {
    id: 25,
    name: "Leonor Santos",
    role: "Aluna",
    yearOrCourse: "Exames Nacionais",
    content: "A professora Diana é um amor, ajudou imenso na altura dos exames nacionais, sempre muito paciente e profissional!! Recomendo imenso !!",
    rating: 5,
    improvement: null,
    category: "student",
  },
  {
    id: 26,
    name: "Pedro José Carneiro Castro",
    role: "Encarregado de Educação",
    content: "Recomendo a explicadora Diana Pimentel! Pelo acompanhamento constante aos seus alunos e muito profissionalismo e dinâmica nas atividades curriculares!",
    rating: 5,
    improvement: null,
    category: "parent",
  },
  {
    id: 27,
    name: "José Azevedo",
    role: "Encarregado de Educação",
    content: "Uma grande profissional, com dedicação extrema.",
    rating: 5,
    improvement: null,
    category: "parent",
  },
  {
    id: 28,
    name: "Maria Eunice Azevedo",
    role: "Encarregada de Educação",
    content: "Serviço de excelência! Recomendo 👍",
    rating: 5,
    improvement: null,
    category: "parent",
  },
  {
    id: 29,
    name: "Neusa Dias",
    role: "Encarregada de Educação",
    content: "Muito bom serviço",
    rating: 5,
    improvement: null,
    category: "parent",
  },
  {
    id: 30,
    name: "Vasco Xavier",
    role: "Aluno",
    content: "Explicadora carinhosa e ensino impecável e divertido. Pronta para te ajudar! Altamente recomendada pelos alunos.",
    rating: 5,
    improvement: null,
    category: "student",
  },
  {
    id: 31,
    name: "Gustavo Filipe",
    role: "Aluno",
    content: "A professora Diana é: amorosa, carinhosa e ensina bem",
    rating: 5,
    improvement: null,
    category: "student",
  },
  {
    id: 32,
    name: "Gonçalo Ferreira",
    role: "Encarregado de Educação",
    content: "Bom serviço sempre!",
    rating: 5,
    improvement: null,
    category: "parent",
  },
  {
    id: 33,
    name: "Leonor Reis",
    role: "Aluna",
    content: "Centro de estudos muito bom! Explicadora muito empenhada e simpática. Recomendo!!!!",
    rating: 5,
    improvement: null,
    category: "student",
  },
  {
    id: 34,
    name: "Hugolinho Pinto do santos",
    role: "Aluno",
    content: "Boa explicação muito bom para subir nota",
    rating: 5,
    improvement: "Subida de nota",
    category: "student",
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Alunos Apoiados" },
  { icon: TrendingUp, value: "95%", label: "Taxa de Sucesso" },
  { icon: Award, value: "10+", label: "Anos de Experiência" },
  { icon: Star, value: "5.0", label: "Avaliação Média" },
];

export default function Testimonials() {
  const [filter, setFilter] = useState<"all" | TestimonialCategory>("all");

  const filteredTestimonials = filter === "all"
    ? testimonials
    : testimonials.filter(t => t.category === filter);

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
              A satisfação dos nossos alunos e as suas famílias é a nossa maior recompensa.
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
          {/* Filter Buttons */}
          <div className="flex justify-center gap-3 mb-12">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="min-w-[140px]"
              data-testid="filter-all"
            >
              Todos ({testimonials.length})
            </Button>
            <Button
              variant={filter === "student" ? "default" : "outline"}
              onClick={() => setFilter("student")}
              className="min-w-[140px]"
              data-testid="filter-students"
            >
              <GraduationCap className="h-4 w-4 mr-2" />
              Alunos ({testimonials.filter(t => t.category === "student").length})
            </Button>
            <Button
              variant={filter === "parent" ? "default" : "outline"}
              onClick={() => setFilter("parent")}
              className="min-w-[140px]"
              data-testid="filter-parents"
            >
              <Users className="h-4 w-4 mr-2" />
              Encarregados ({testimonials.filter(t => t.category === "parent").length})
            </Button>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((testimonial) => (
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
                          <div className="text-sm text-muted-foreground">
                            {testimonial.category === "student" && testimonial.yearOrCourse
                              ? `${testimonial.role} - ${testimonial.yearOrCourse}`
                              : testimonial.role
                            }
                          </div>
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
