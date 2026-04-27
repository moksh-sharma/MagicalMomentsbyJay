import React from "react";
import { motion } from "motion/react";
import { Camera, Film, Sparkles } from "lucide-react";

export function About() {
  const highlights = [
    { icon: <Camera size={24} />, title: "Candid Wedding Photography" },
    { icon: <Film size={24} />, title: "Cinematic Storytelling" },
    { icon: <Sparkles size={24} />, title: "Luxury Pre-Wedding Shoots" },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Subtle gold glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[30vw] h-[30vw] bg-[color:var(--mm-gold)]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto z-10 p-4 border border-[color:var(--mm-gold)]/30 bg-black/50 backdrop-blur-sm shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1729347917808-e3e35a462fec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBncm9vbXxlbnwxfHx8fDE3NzcyNzg3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Jai Ahuja - Photographer"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Corner Decorative */}
            <div className="absolute top-[-10px] right-[-10px] w-20 h-20 border-t border-r border-[color:var(--mm-gold)]"></div>
            <div className="absolute bottom-[-10px] left-[-10px] w-20 h-20 border-b border-l border-[color:var(--mm-gold)]"></div>
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-left"
        >
          <p className="text-[color:var(--mm-gold)] text-sm md:text-base uppercase tracking-[0.3em] mb-4">Behind the Lens</p>
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] text-white mb-6 leading-tight">
            Crafting Timeless <span className="italic text-[color:var(--mm-gold)]">Stories</span>
          </h2>
          <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed mb-10">
            <p>
              Hi, I'm Jai Ahuja. I believe every wedding has its own soul. I specialize in capturing the raw emotions, the sacred rituals, and the candid moments that make Indian weddings truly extraordinary.
            </p>
            <p>
              With a cinematic approach to photography and filmmaking, my goal is to frame your most treasured memories in a way that feels royal, elegant, and timeless—creating an heirloom for generations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-[#111] border border-white/5 p-4 rounded-lg hover:border-[color:var(--mm-gold)]/40 transition-colors group"
              >
                <div className="text-[color:var(--mm-gold)] bg-black p-3 rounded-full shadow-[0_0_10px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-shadow">
                  {item.icon}
                </div>
                <h3 className="text-white font-medium uppercase tracking-wider text-sm">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
