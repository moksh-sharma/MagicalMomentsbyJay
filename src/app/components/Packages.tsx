import React from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Essential Moments",
    desc: "For intimate ceremonies and candid storytelling.",
    features: [
      "Traditional & Candid Photography",
      "Traditional Videography",
      "Edited High-Res Photos",
      "Short Cinematic Teaser",
      "Premium Photo Album"
    ]
  },
  {
    name: "Royal Wedding Story",
    desc: "Comprehensive coverage of your grand celebrations.",
    features: [
      "2 Lead Photographers",
      "Cinematic Videography",
      "Drone Coverage (Venue Permitting)",
      "Same-Day Edit Reels",
      "Pre-Wedding Couple Shoot",
      "Signature 5-Minute Wedding Film",
      "2 Premium Coffee Table Books"
    ],
    popular: true
  },
  {
    name: "Luxury Cinematic Experience",
    desc: "The ultimate visual documentation for epic weddings.",
    features: [
      "Full Team of Senior Visual Artists",
      "4K Cinematic Film Creation",
      "Unlimited Edited High-Res Images",
      "Extensive Drone & Aerial Shots",
      "Destination Pre-Wedding Shoot",
      "Feature-Length Wedding Documentary",
      "Luxury Handcrafted Album Suite",
      "Priority Fast-Track Delivery"
    ]
  }
];

export function Packages() {
  return (
    <section id="packages" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[color:var(--mm-gold)] text-sm md:text-base uppercase tracking-[0.3em] mb-4"
          >
            Investment
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-['Playfair_Display'] text-white"
          >
            Curated Collections
          </motion.h2>
          <div className="h-1 w-20 bg-[color:var(--mm-gold)] mx-auto mt-6 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative p-8 md:p-10 rounded-2xl flex flex-col bg-black border ${
                pkg.popular
                  ? "border-[color:var(--mm-gold)] shadow-[0_0_30px_rgba(212,175,55,0.12)] transform scale-105 z-10"
                  : "border-white/10 hover:border-[color:var(--mm-gold)]/50"
              } transition-all duration-500`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[color:var(--mm-gold)] text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8 border-b border-white/10 pb-8">
                <h3 className="text-2xl font-['Playfair_Display'] text-white mb-3">
                  {pkg.name}
                </h3>
                <p className="text-gray-400 font-light text-sm">
                  {pkg.desc}
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-[color:var(--mm-gold)] flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-300 font-light text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-auto text-center w-full py-4 uppercase tracking-widest text-sm transition-all duration-300 ${
                  pkg.popular
                    ? "bg-[color:var(--mm-gold)] text-black hover:bg-white hover:text-black shadow-[0_0_15px_rgba(212,175,55,0.35)]"
                    : "bg-transparent border border-[color:var(--mm-gold)] text-[color:var(--mm-gold)] hover:bg-[color:var(--mm-gold)] hover:text-black"
                }`}
              >
                Get Custom Quote
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
