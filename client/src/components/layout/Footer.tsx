import { Link } from "wouter";
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

const quickLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contactos", label: "Contactos" },
];

const services = [
  "Língua Portuguesa",
  "Matemática",
  "Ciências & Biologia",
  "Preparação Exames",
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4" data-testid="link-footer-logo">
              <div className="p-2 rounded-md bg-accent/20">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold leading-tight">
                  Diana Pimentel
                </span>
                <span className="text-sm text-primary-foreground/70">
                  Centro de Explicações
                </span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/70 mb-6 leading-relaxed">
              Mais de 10 anos a construir sucesso escolar. Apoio personalizado desde o 1.º Ciclo até ao Ensino Superior.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/diana_pimentel_explicadora"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Instagram"
                data-testid="link-instagram-footer"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/351919977198"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="WhatsApp"
                data-testid="link-whatsapp-footer"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Serviços
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-primary-foreground/70">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Contactos
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+351919977198"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  data-testid="link-phone-footer"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  +351 919 977 198
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
                  <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span>
                    Edifício América, Rua 1.º de Maio,
                    <br />
                    2.º Andar, Sala 212, Trofa
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} Diana Pimentel. Todos os direitos reservados.</p>
            <p>Centro de Explicações - Trofa, Portugal</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
