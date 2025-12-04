import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  MapPin, 
  Building2,
  BookOpen,
  Users,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "all", label: "Todos" },
  { id: "space", label: "Espaço" },
  { id: "classes", label: "Aulas" },
  { id: "materials", label: "Materiais" },
];

const galleryImages = [
  {
    id: 1,
    category: "space",
    title: "Sala de Estudo Principal",
    description: "Ambiente calmo e profissional para aprendizagem",
  },
  {
    id: 2,
    category: "space",
    title: "Área de Receção",
    description: "Espaço acolhedor para alunos e pais",
  },
  {
    id: 3,
    category: "classes",
    title: "Aula Individual",
    description: "Atenção personalizada para cada aluno",
  },
  {
    id: 4,
    category: "materials",
    title: "Material Didático",
    description: "Recursos actualizados e organizados",
  },
  {
    id: 5,
    category: "space",
    title: "Secretária de Trabalho",
    description: "Espaço de trabalho ergonómico",
  },
  {
    id: 6,
    category: "classes",
    title: "Preparação para Exames",
    description: "Sessões focadas e intensivas",
  },
  {
    id: 7,
    category: "materials",
    title: "Biblioteca de Apoio",
    description: "Livros e manuais de consulta",
  },
  {
    id: 8,
    category: "space",
    title: "Vista do Edifício",
    description: "Edifício América, localização central",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const getGradientColor = (id: number) => {
    const gradients = [
      "from-blue-500/20 to-indigo-500/20",
      "from-amber-500/20 to-orange-500/20",
      "from-emerald-500/20 to-teal-500/20",
      "from-purple-500/20 to-pink-500/20",
      "from-cyan-500/20 to-blue-500/20",
      "from-rose-500/20 to-red-500/20",
      "from-lime-500/20 to-green-500/20",
      "from-violet-500/20 to-purple-500/20",
    ];
    return gradients[id % gradients.length];
  };

  return (
    <Layout>
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-primary/95 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyem0wLTR2MkgyNHYtMmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6" data-testid="badge-gallery-hero">
              <Building2 className="h-4 w-4" />
              Sala 212 - Edifício América
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6" data-testid="heading-gallery">
              O Nosso Espaço
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Conheça as instalações do Centro de Explicações Diana Pimentel, 
              um ambiente pensado para a aprendizagem.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-8 bg-background border-b border-border sticky top-16 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={activeCategory === category.id ? "bg-primary" : ""}
                data-testid={`button-filter-${category.id}`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card 
                    className="group cursor-pointer overflow-hidden hover-elevate"
                    onClick={() => setSelectedImage(image.id)}
                    data-testid={`card-gallery-${image.id}`}
                  >
                    <div className={`aspect-square bg-gradient-to-br ${getGradientColor(image.id)} relative`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-4">
                          {image.category === "space" && <Building2 className="h-12 w-12 text-foreground/40 mx-auto mb-2" />}
                          {image.category === "classes" && <Users className="h-12 w-12 text-foreground/40 mx-auto mb-2" />}
                          {image.category === "materials" && <BookOpen className="h-12 w-12 text-foreground/40 mx-auto mb-2" />}
                          <p className="text-sm text-foreground/60">{image.title}</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-primary-foreground font-medium">Ver Detalhes</span>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-1">{image.title}</h3>
                      <p className="text-sm text-muted-foreground">{image.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              A Nossa Localização
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encontre-nos facilmente no centro da Trofa.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="overflow-hidden" data-testid="card-location">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-md bg-accent/10">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Endereço</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Edifício América<br />
                        Rua 1.º de Maio<br />
                        2.º Andar, Sala 212<br />
                        4785-000 Trofa, Portugal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-8">
                    <div className="p-3 rounded-md bg-accent/10">
                      <Building2 className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Sobre o Espaço</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        O nosso centro está localizado num edifício moderno, 
                        com fácil acesso e estacionamento nas proximidades. 
                        As instalações foram pensadas para proporcionar um 
                        ambiente calmo e propício à aprendizagem.
                      </p>
                    </div>
                  </div>

                  <a 
                    href="https://maps.google.com/?q=Trofa,Portugal" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="gap-2" data-testid="button-directions">
                      <MapPin className="h-4 w-4" />
                      Obter Direções
                    </Button>
                  </a>
                </div>

                <div className="h-64 lg:h-auto bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11937.945095750064!2d-8.566094!3d41.3389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24649c0b9eef85%3A0x500ebbde49036d0!2s4785%20Trofa!5e0!3m2!1spt-PT!2spt!4v1701234567890!5m2!1spt-PT!2spt"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "300px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização do Centro de Explicações"
                  />
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
                aria-label="Fechar"
                data-testid="button-close-modal"
              >
                <X className="h-8 w-8" />
              </button>
              <Card className="overflow-hidden">
                {(() => {
                  const image = galleryImages.find(img => img.id === selectedImage);
                  if (!image) return null;
                  return (
                    <>
                      <div className={`aspect-video bg-gradient-to-br ${getGradientColor(image.id)} flex items-center justify-center`}>
                        <div className="text-center">
                          {image.category === "space" && <Building2 className="h-24 w-24 text-foreground/40 mx-auto mb-4" />}
                          {image.category === "classes" && <Users className="h-24 w-24 text-foreground/40 mx-auto mb-4" />}
                          {image.category === "materials" && <BookOpen className="h-24 w-24 text-foreground/40 mx-auto mb-4" />}
                          <p className="text-lg text-foreground/60">Imagem ilustrativa</p>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-2">{image.title}</h3>
                        <p className="text-muted-foreground">{image.description}</p>
                      </CardContent>
                    </>
                  );
                })()}
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
