import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";


export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [showHeader, setShowHeader] = useState(true);
   const [lastScrollY, setLastScrollY] = useState(0);

   

    // Detecta direção do scroll
useEffect(() => {
  const handleScroll = () => {
    if (isMenuOpen) return; // 👈 não esconde o header se o menu estiver aberto

    if (window.scrollY > lastScrollY) {
      // rolando para baixo → esconder
      setShowHeader(false);
    } else {
      // rolando para cima → mostrar
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY, isMenuOpen]); // 👈 adiciona isMenuOpen como dependência

  
  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav  
    className={`bg-black shadow-md sticky top-0 z-50 transition-transform duration-500 ${
    showHeader ? "translate-y-0" : "-translate-y-full"
  }`}
  >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            {/* Logo */}
<div
  className="flex items-center space-x-2 mt-3 md:mt-0 cursor-pointer"
  onClick={() => {
    const section = document.querySelector("#inicio");
    if (section) {
      const yOffset = -10; // ajuste para alinhar com o topo, se necessário
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMenuOpen(false); // fecha o menu caso esteja aberto no mobile
  }}
>
  <img
    src="/icon_garage.png"
    alt="Logo da Oficina"
    className="w-22 h-22 object-contain"
  />
</div>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  const section = document.querySelector(item.href);
                  if (section) {
                    const yOffset = 0; // ajuste aqui: -100 sobe mais, -50 sobe menos
                    const y =
                      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                  setIsMenuOpen(false);
                }}
                className="text-primary-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button
              className="gap-2"
              onClick={() => {
                const phoneNumber = "51993279317"; // número sem formatação
                const message = encodeURIComponent(
                  "Olá! Tudo bem? Gostaria de saber mais sobre os serviços da oficina."
                );
                window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
              }}
            >
              <Phone className="w-4 h-4" />
              (51) 99327-9317
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-primary-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
     {/* Mobile Navigation */}
<div
  className={`md:hidden pb-4 space-y-3 overflow-hidden transition-all duration-700 ease-in-out transform ${
    isMenuOpen ? "max-h-96 mt-4 md:mt-0 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
  }`}
>
  {navItems.map((item) => (
    <a
      key={item.href}
      href={item.href}
      className="block py-2 text-primary-foreground hover:text-primary transition-colors font-medium"
      onClick={(e) => {
        e.preventDefault(); // evita jump instantâneo
        const section = document.querySelector(item.href);
        if (section) {
          const yOffset = -260; // já ajustado para subir a seção
          const y =
            section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
        setIsMenuOpen(false);
      }}
    >
      {item.label}
    </a>
  ))}
  <Button
    className="w-full gap-2"
    onClick={() => {
      const phoneNumber = "51993279317"; // número sem formatação
      const message = encodeURIComponent(
        "Olá! Tudo bem? Gostaria de saber mais sobre os serviços da oficina."
      );
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    }}
  >
    <Phone className="w-4 h-4" />
    (51) 99327-9317
  </Button>
</div>

      </div>
    </nav>
  );
}

