import React from "react";
import { motion } from "motion/react";

const reasons = [
  "Emotion-first storytelling",
  "Candid + traditional coverage",
  "Cinematic color grading",
  "High-quality edited photos and films",
  "Personalized shoot concepts",
  "Professional wedding workflow",
  "Fast delivery and premium albums"
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1624504761718-be4d634f4624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwbWVoZW5kaXxlbnwxfHx8fDE3NzcyNzg3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Mehendi Decor Background"
          className="w-full h-full object-cover opacity-[0.05]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 mb-12 lg:mb-0"
        >
          <p className="text-[color:var(--mm-gold)] text-sm md:text-base uppercase tracking-[0.3em] mb-4">
            The Magic Touch
          </p>
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] text-white leading-tight mb-8">
            Why Trust Us With Your <span className="italic text-[color:var(--mm-gold)]">Big Day?</span>
          </h2>
          <p className="text-gray-300 font-light text-lg leading-relaxed max-w-lg">
            We don't just take pictures; we capture legacies. Our commitment to premium quality, personalized experiences, and emotional resonance is what sets us apart in the world of luxury wedding photography.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-5/12 bg-black/80 backdrop-blur-md p-8 md:p-12 border border-[color:var(--mm-gold)]/30 rounded-2xl shadow-2xl relative"
        >
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[color:var(--mm-gold)]/30 rounded-tr-2xl pointer-events-none -mt-4 -mr-4"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[color:var(--mm-gold)]/30 rounded-bl-2xl pointer-events-none -mb-4 -ml-4"></div>

          <ul className="space-y-6">
            {reasons.map((reason, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 group"
              >
                <span className="text-[color:var(--mm-gold)] font-['Playfair_Display'] text-2xl md:text-3xl italic w-8 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  {String(idx + 1).padStart(2, '0')}.
                </span>
                <span className="text-white text-base md:text-lg font-light tracking-wide group-hover:text-[color:var(--mm-gold)] transition-colors">
                  {reason}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
