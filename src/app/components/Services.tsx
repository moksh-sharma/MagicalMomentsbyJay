import React from "react";
import { motion } from "motion/react";
import { Camera, Film, Heart, Sparkles, Move, Aperture, BookOpen, Video } from "lucide-react";

const services = [
  { icon: <Camera size={32} />, title: "Wedding Photography", desc: "Capturing the pure essence and rituals of your big day with an artistic eye." },
  { icon: <Heart size={32} />, title: "Pre-Wedding Photoshoot", desc: "Romantic outdoor shoots tailored to tell your unique love story." },
  { icon: <Film size={32} />, title: "Cinematic Wedding Films", desc: "High-quality, emotionally driven short and long wedding films." },
  { icon: <Aperture size={32} />, title: "Engagement Photography", desc: "Preserving the magic of your ring ceremony in timeless frames." },
  { icon: <Sparkles size={32} />, title: "Traditional Photography", desc: "Classic coverage focusing on guests, rituals, and the complete stage setup." },
  { icon: <Video size={32} />, title: "Candid Photography", desc: "Unposed, natural emotion-filled moments captured without intrusion." },
  { icon: <Move size={32} />, title: "Drone Shoots", desc: "Breathtaking aerial views of your grand wedding venues and events." },
  { icon: <BookOpen size={32} />, title: "Albums & Wedding Books", desc: "Premium handcrafted photo albums to preserve your memories forever." },
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-background relative">
      <div className="absolute inset-0 bg-[color:var(--mm-gold)]/5 mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[color:var(--mm-gold)] text-sm md:text-base uppercase tracking-[0.3em] mb-4"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-['Playfair_Display'] text-white"
          >
            Our Premium Services
          </motion.h2>
          <div className="h-1 w-20 bg-[color:var(--mm-gold)] mx-auto mt-6 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:bg-[#1a1a1a] hover:border-[color:var(--mm-gold)]/50 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[color:var(--mm-gold)]/10 rounded-full blur-[40px] group-hover:bg-[color:var(--mm-gold)]/20 transition-colors"></div>

              <div className="text-[color:var(--mm-gold)] mb-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-['Playfair_Display'] text-white mb-4 group-hover:text-[color:var(--mm-gold)] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 font-light text-sm mb-8 leading-relaxed">
                {service.desc}
              </p>
              
              <a
                href="#contact"
                className="inline-flex items-center text-xs uppercase tracking-widest text-[color:var(--mm-gold)] hover:text-white transition-colors relative group-hover:underline underline-offset-4"
              >
                Enquire Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
