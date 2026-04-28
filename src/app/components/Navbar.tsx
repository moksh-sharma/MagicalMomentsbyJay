import React, { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";
import logoBlack from "../../assets/BLACK PNG.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Films", href: "#films" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/85 backdrop-blur-md py-2 md:py-3 shadow-[0_10px_30px_rgba(0,0,0,0.35)] border-b border-white/5"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#home"
          aria-label="Go to home"
          className="leading-none max-w-[70vw] md:max-w-none"
        >
          <img
            src={logoBlack}
            alt="Magical Moments by Jai Ahuja"
            className={`block w-auto object-contain transition-[height] duration-300 ${
              isScrolled
                ? "h-12 md:h-14 max-w-[300px] md:max-w-[340px]"
                : "h-16 md:h-20 max-w-[360px] md:max-w-[440px]"
            }`}
            loading="eager"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-white/75 hover:text-[color:var(--mm-gold)] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[color:var(--mm-gold)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="https://instagram.com/magical_moments_by_jai_ahuja"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/75 hover:text-[color:var(--mm-gold)] transition-colors"
          >
            <Instagram size={20} />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-[color:var(--mm-gold)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/92 backdrop-blur-lg flex flex-col items-center py-8 gap-6 shadow-2xl border-t border-[color:var(--mm-gold)]/20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg uppercase tracking-widest text-white/80 hover:text-[color:var(--mm-gold)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
