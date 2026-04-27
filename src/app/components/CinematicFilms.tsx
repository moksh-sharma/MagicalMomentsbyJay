import React from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";

const films = [
  {
    title: "Wedding Teaser",
    image: "https://images.unsplash.com/photo-1644337111604-aa1816b542a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwYnJpZGUlMjBncm9vbXxlbnwxfHx8fDE3NzcyNzg3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "2:15"
  },
  {
    title: "Pre-Wedding Film",
    image: "https://images.unsplash.com/photo-1751615072331-7d6e8faa934d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwcmUlMjB3ZWRkaW5nJTIwc2hvb3R8ZW58MXx8fHwxNzc3Mjc4NzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "4:30"
  },
  {
    title: "Full Wedding Highlights",
    image: "https://images.unsplash.com/photo-1680490964562-60ee7fd82944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzc3Mjc4NzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "12:45"
  }
];

export function CinematicFilms() {
  return (
    <section id="films" className="py-16 sm:py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[color:var(--mm-gold)]/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[color:var(--mm-gold)] text-sm md:text-base uppercase tracking-[0.3em] mb-4"
          >
            Cinematography
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-['Playfair_Display'] text-white"
          >
            Wedding Films That Feel Like Cinema
          </motion.h2>
          <div className="h-1 w-20 bg-[color:var(--mm-gold)] mx-auto mt-6 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {films.map((film, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer aspect-video rounded-xl overflow-hidden bg-black shadow-2xl border border-white/5"
            >
              <img
                src={film.image}
                alt={film.title}
                className="w-full h-full object-cover filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-[color:var(--mm-gold)] bg-black/40 backdrop-blur-sm flex items-center justify-center text-[color:var(--mm-gold)] group-hover:bg-[color:var(--mm-gold)] group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.35)]">
                  <Play size={24} className="ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <div className="flex justify-between items-end">
                  <h3 className="text-xl font-['Playfair_Display'] text-white drop-shadow-lg group-hover:text-[color:var(--mm-gold)] transition-colors">
                    {film.title}
                  </h3>
                  <span className="text-sm text-gray-400 tracking-wider bg-black/50 px-3 py-1 rounded backdrop-blur-md border border-white/10">
                    {film.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
