import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/galeria", label: "Galeria" },
  { href: "/testemunhos", label: "Testemunhos" },
  { href: "/contactos", label: "Contactos" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-primary"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 group" data-testid="link-logo">
            <div className="p-2 rounded-md bg-accent/20 group-hover:bg-accent/30 transition-colors">
              <GraduationCap className="h-6 w-6 lg:h-7 lg:w-7 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-base lg:text-lg font-semibold text-primary-foreground leading-tight">
                Diana Pimentel
              </span>
              <span className="text-xs lg:text-sm text-primary-foreground/70 hidden sm:block">
                Centro de Explicações
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  location === link.href
                    ? "text-accent bg-white/10"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/5"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/351919977198"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block"
              data-testid="link-whatsapp-header"
            >
              <Button
                variant="default"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              >
                Marcar Aula
              </Button>
            </a>

            <button
              className="lg:hidden p-2 text-primary-foreground hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-primary border-t border-white/10"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 text-base font-medium rounded-md transition-colors ${
                    location === link.href
                      ? "text-accent bg-white/10"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/5"
                  }`}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/351919977198"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
                data-testid="link-whatsapp-mobile"
              >
                <Button
                  variant="default"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                >
                  Marcar Aula
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
