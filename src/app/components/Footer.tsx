import React from "react";
import { Instagram, MessageCircle, Phone, Mail } from "lucide-react";
import logoBlack from "../../assets/BLACK PNG.png";

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Portfolio", href: "#gallery" },
    { name: "Films", href: "#films" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Wedding Photography",
    "Cinematic Films",
    "Pre-Wedding Shoots",
    "Candid Photography",
    "Traditional Coverage",
    "Albums & Books"
  ];

  return (
    <footer className="bg-[#000000] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-1">
            <a
              href="#home"
              aria-label="Go to home"
              className="block mb-6 leading-none"
            >
              <img
                src={logoBlack}
                alt="Magical Moments by Jai Ahuja"
                className="block h-14 md:h-16 w-auto max-w-[320px] object-contain"
                loading="lazy"
              />
            </a>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-8">
              Capturing love, rituals, and timeless memories through emotion-first storytelling and cinematic visuals.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/magical_moments_by_jai_ahuja"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[color:var(--mm-gold)] hover:border-[color:var(--mm-gold)] transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/917988985121"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[color:var(--mm-gold)] hover:border-[color:var(--mm-gold)] transition-all duration-300"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-['Playfair_Display'] text-xl mb-6 flex items-center gap-3">
              <span className="w-4 h-[1px] bg-[color:var(--mm-gold)]"></span> Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[color:var(--mm-gold)] text-sm uppercase tracking-wider font-light transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-[color:var(--mm-gold)] group-hover:w-3 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-['Playfair_Display'] text-xl mb-6 flex items-center gap-3">
              <span className="w-4 h-[1px] bg-[color:var(--mm-gold)]"></span> Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx} className="text-gray-400 text-sm font-light">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-['Playfair_Display'] text-xl mb-6 flex items-center gap-3">
              <span className="w-4 h-[1px] bg-[color:var(--mm-gold)]"></span> Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm font-light">
                <Phone size={16} className="text-[color:var(--mm-gold)] mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+917988985121" className="hover:text-[color:var(--mm-gold)] transition-colors">+91 79889 85121</a>
                  <a href="tel:+918398841118" className="hover:text-[color:var(--mm-gold)] transition-colors">+91 83988 41118</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm font-light">
                <MessageCircle size={16} className="text-[color:var(--mm-gold)] mt-1 flex-shrink-0" />
                <a href="https://wa.me/917988985121" className="hover:text-[color:var(--mm-gold)] transition-colors">+91 79889 85121 (WhatsApp)</a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm font-light">
                <Mail size={16} className="text-[color:var(--mm-gold)] mt-1 flex-shrink-0" />
                <a href="mailto:momentsmagical940@gmail.com" className="hover:text-[color:var(--mm-gold)] transition-colors">momentsmagical940@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-light tracking-wide">
            &copy; {new Date().getFullYear()} Magical Moments by Jai Ahuja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
