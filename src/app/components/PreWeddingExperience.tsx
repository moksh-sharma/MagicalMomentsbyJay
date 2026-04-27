import React from "react";
import { motion } from "motion/react";

export function PreWeddingExperience() {
  return (
    <section className="py-16 sm:py-24 bg-[#050505] relative overflow-hidden flex items-center min-h-[80vh]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1751615072331-7d6e8faa934d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwcmUlMjB3ZWRkaW5nJTIwc2hvb3R8ZW58MXx8fHwxNzc3Mjc4NzM3fDA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Pre-Wedding Shoot"
          className="w-full h-full object-cover filter brightness-[0.3] hover:scale-105 transition-transform duration-[10s]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[color:var(--mm-gold)]/5 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 md:pr-12"
        >
          <p className="text-[color:var(--mm-gold)] text-sm md:text-base uppercase tracking-[0.3em] mb-4">
            The Pre-Wedding Experience
          </p>
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] text-white leading-tight mb-8">
            Tell Your <span className="italic text-[color:var(--mm-gold)]">Love Story</span> Before You Say I Do
          </h2>
          
          <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed mb-10">
            <p>
              A pre-wedding shoot is more than just photos—it's an experience. We craft personalized concepts tailored to your unique dynamic, whether it's a regal palace setup or an intimate outdoor retreat.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-6">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[color:var(--mm-gold)] rounded-full"></span> Concept Creation
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[color:var(--mm-gold)] rounded-full"></span> Premium Locations
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[color:var(--mm-gold)] rounded-full"></span> Styling Consultations
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[color:var(--mm-gold)] rounded-full"></span> Cinematic Posing
              </li>
            </ul>
          </div>

          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full bg-[color:var(--mm-gold)] text-black border border-[color:var(--mm-gold)] uppercase tracking-widest text-sm hover:bg-transparent hover:text-[color:var(--mm-gold)] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.35)]"
          >
            Plan Your Dream Shoot
          </a>
        </motion.div>
      </div>
    </section>
  );
}
