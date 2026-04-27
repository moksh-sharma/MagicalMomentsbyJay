import React from "react";
import { motion } from "motion/react";
import { Instagram, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1644337111604-aa1816b542a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwYnJpZGUlMjBncm9vbXxlbnwxfHx8fDE3NzcyNzg3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Luxury Indian Wedding Couple"
          className="w-full h-full object-cover"
        />
        {/* Cinematic Dark Overlay (darker for readability) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/95"></div>
        {/* Soft Golden Glow Overlay */}
        <div className="absolute inset-0 bg-[color:var(--mm-gold)]/10 mix-blend-overlay pointer-events-none"></div>
      </div>

      <div className="relative z-20 container mx-auto px-6 pt-28 md:pt-32 pb-16 text-center max-w-5xl min-h-screen flex flex-col items-center justify-center gap-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[color:var(--mm-gold)] text-xs md:text-sm uppercase tracking-[0.35em]"
        >
          Premium Wedding Photography
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white drop-shadow-lg leading-tight"
        >
          <span className="block font-['Great_Vibes'] text-6xl sm:text-7xl md:text-8xl tracking-wide text-[color:var(--mm-gold)]">
            Magical Moments
          </span>
          <span className="mt-3 block font-['Playfair_Display'] text-[11px] md:text-sm text-[color:var(--mm-gold)] tracking-[0.35em] md:tracking-[0.55em] uppercase whitespace-nowrap">
            BY — JAY AHUJA
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-300 text-base md:text-xl font-light tracking-wide max-w-2xl"
        >
          Capturing Love, Rituals & Timeless Memories
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center pt-2"
        >
          <a
            href="#gallery"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-transparent border border-[color:var(--mm-gold)] text-[color:var(--mm-gold)] uppercase tracking-widest text-sm hover:bg-[color:var(--mm-gold)] hover:text-black transition-all duration-300"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-[color:var(--mm-gold)] text-black border border-[color:var(--mm-gold)] uppercase tracking-widest text-sm hover:bg-white hover:border-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.35)]"
          >
            Book Your Shoot
          </a>
        </motion.div>

        {/* Social Icons Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="pt-6 flex gap-5 z-30"
        >
          <a
            href="https://instagram.com/magical_moments_by_jai_ahuja"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-400 hover:text-[color:var(--mm-gold)] transition-colors p-2 rounded-full border border-gray-600/70 hover:border-[color:var(--mm-gold)]"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-gray-400 hover:text-[color:var(--mm-gold)] transition-colors p-2 rounded-full border border-gray-600/70 hover:border-[color:var(--mm-gold)]"
          >
            <MessageCircle size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
