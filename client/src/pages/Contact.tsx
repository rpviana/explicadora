import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/ui/animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle
} from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Phone,
    title: "Telefone",
    value: "+351 919 977 198",
    href: "tel:+351919977198",
    description: "Ligue-nos diretamente",
  },
  {
    icon: SiWhatsapp,
    title: "WhatsApp",
    value: "919 977 198",
    href: "https://wa.me/351919977198",
    description: "Resposta rápida",
    external: true,
  },
  {
    icon: SiInstagram,
    title: "Instagram",
    value: "@diana_pimentel_explicadora",
    href: "https://www.instagram.com/diana_pimentel_explicadora",
    description: "Siga-nos",
    external: true,
  },
];

const officeHours = [
  { day: "Segunda a Sexta", hours: "09:00 - 20:00" },
  { day: "Sábado", hours: "Sob-consulta" },
  { day: "Domingo", hours: "Sob-consulta" },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 3)} ${numbers.slice(3)}`;
    return `${numbers.slice(0, 3)} ${numbers.slice(3, 6)} ${numbers.slice(6, 9)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    e.target.value = formatted;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Mensagem enviada!",
          description: "Entraremos em contacto consigo brevemente.",
        });
        form.reset();
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Por favor, tente novamente ou contacte-nos diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-primary/95 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyem0wLTR2MkgyNHYtMmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6" data-testid="badge-contact-hero">
              <MessageCircle className="h-4 w-4" />
              Fale Connosco
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6" data-testid="heading-contact">
              Contactos
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Estamos disponíveis para esclarecer todas as suas dúvidas
              e ajudá-lo a iniciar o caminho para o sucesso escolar.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <AnimatedSection>
                <Card data-testid="card-contact-form">
                  <CardHeader>
                    <CardTitle className="text-2xl">Envie-nos uma Mensagem</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Mensagem Enviada!
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          Obrigado pelo seu contacto. Responderemos o mais brevemente possível.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} variant="outline" data-testid="button-new-message">
                          Enviar Nova Mensagem
                        </Button>
                      </div>
                    ) : (
                      <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        data-netlify="true"
                        name="contact"
                        method="POST"
                      >
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="O seu nome"
                            required
                            data-testid="input-name"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Telemóvel *</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="912 345 678"
                              required
                              maxLength={11}
                              onChange={handlePhoneChange}
                              data-testid="input-phone"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="subject">Disciplina/Assunto *</Label>
                            <Input
                              id="subject"
                              name="subject"
                              placeholder="Ex: Português 12.º Ano"
                              required
                              data-testid="input-subject"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Mensagem *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Descreva as suas necessidades ou dúvidas..."
                            rows={5}
                            required
                            data-testid="input-message"
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full gap-2"
                          disabled={isSubmitting}
                          data-testid="button-submit"
                        >
                          {isSubmitting ? (
                            "A enviar..."
                          ) : (
                            <>
                              Enviar Mensagem
                              <Send className="h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection delay={0.2}>
                <Card data-testid="card-contact-methods">
                  <CardHeader>
                    <CardTitle>Contacto Direto</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <a
                        key={index}
                        href={method.href}
                        target={method.external ? "_blank" : undefined}
                        rel={method.external ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 p-3 rounded-md hover-elevate transition-colors"
                        data-testid={`link-contact-${method.title.toLowerCase()}`}
                      >
                        <div className="p-2 rounded-md bg-accent/10">
                          <method.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{method.title}</div>
                          <div className="text-sm text-muted-foreground">{method.value}</div>
                        </div>
                      </a>
                    ))}
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <Card data-testid="card-office-hours">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-accent" />
                      Horário de Funcionamento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {officeHours.map((item, index) => (
                        <li key={index} className="flex items-center justify-between">
                          <span className="text-foreground">{item.day}</span>
                          <span className="text-muted-foreground">{item.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <Card data-testid="card-address">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-accent" />
                      Morada
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Edifício América<br />
                      Rua 1.º de Maio<br />
                      2.º Andar, Sala 212<br />
                      4785-353 Trofa, Portugal
                    </p>
                    <a
                      href="https://maps.app.goo.gl/jgTZjseAb9MBcNiN8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="gap-2" data-testid="button-map">
                        <MapPin className="h-4 w-4" />
                        Ver no Mapa
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Card className="overflow-hidden" data-testid="card-map-embed">
              <div className="h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.6522115861517!2d-8.563459088436932!3d41.33817547118656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd245f91c5d174fd%3A0x132e2e5b2884a4cc!2sDiana%20Pimentel%20Explica%C3%A7%C3%B5es!5e0!3m2!1spt-PT!2spt!4v1767240846833!5m2!1spt-PT!2spt" width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Centro de Explicações"
                />
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
