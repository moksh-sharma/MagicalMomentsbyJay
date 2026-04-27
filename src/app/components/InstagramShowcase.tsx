import React from "react";
import { motion } from "motion/react";
import { Instagram } from "lucide-react";

const instagramPosts = [
  "https://images.unsplash.com/photo-1644337111604-aa1816b542a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwYnJpZGUlMjBncm9vbXxlbnwxfHx8fDE3NzcyNzg3Mzd8MA&ixlib=rb-4.1.0&q=80&w=600",
  "https://images.unsplash.com/photo-1670774544351-96d2464fd873?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwaGFsZGl8ZW58MXx8fHwxNzc3Mjc4NzM3fDA&ixlib=rb-4.1.0&q=80&w=600",
  "https://images.unsplash.com/photo-1729347917808-e3e35a462fec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBncm9vbXxlbnwxfHx8fDE3NzcyNzg3Mzd8MA&ixlib=rb-4.1.0&q=80&w=600",
  "https://images.unsplash.com/photo-1624504761718-be4d634f4624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwbWVoZW5kaXxlbnwxfHx8fDE3NzcyNzg3Mzd8MA&ixlib=rb-4.1.0&q=80&w=600",
  "https://images.unsplash.com/photo-1751615072331-7d6e8faa934d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwcmUlMjB3ZWRkaW5nJTIwc2hvb3R8ZW58MXx8fHwxNzc3Mjc4NzM3fDA&ixlib=rb-4.1.0&q=80&w=600",
  "https://images.unsplash.com/photo-1680490964562-60ee7fd82944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzc3Mjc4NzM3fDA&ixlib=rb-4.1.0&q=80&w=600"
];

export function InstagramShowcase() {
  return (
    <section className="py-16 sm:py-24 bg-[#050505]">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[color:var(--mm-gold)] text-sm md:text-base uppercase tracking-[0.3em] mb-4 flex items-center justify-center gap-2"
        >
          <Instagram size={18} /> @magical_moments_by_jai_ahuja
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-['Playfair_Display'] text-white mb-12"
        >
          Follow Our Latest Stories
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 max-w-5xl mx-auto">
          {instagramPosts.map((post, index) => (
            <motion.a
              href="https://instagram.com/magical_moments_by_jai_ahuja"
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square group overflow-hidden block"
            >
              <img
                src={post}
                alt="Instagram Post"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram size={40} className="text-white drop-shadow-lg" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href="https://instagram.com/magical_moments_by_jai_ahuja"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-white/20 text-white uppercase tracking-widest text-sm hover:border-[color:var(--mm-gold)] hover:text-[color:var(--mm-gold)] transition-all duration-300"
          >
            <Instagram size={18} /> View on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
