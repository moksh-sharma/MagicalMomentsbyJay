import React, { useState } from "react";
import { motion } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const categories = ["All", "Wedding", "Pre-Wedding", "Haldi", "Mehendi", "Sangeet", "Bridal", "Reception"];

const galleryData = [
  { id: 1, category: "Wedding", src: "https://images.unsplash.com/photo-1644337111604-aa1816b542a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwYnJpZGUlMjBncm9vbXxlbnwxfHx8fDE3NzcyNzg3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 2, category: "Pre-Wedding", src: "https://images.unsplash.com/photo-1751615072331-7d6e8faa934d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwcmUlMjB3ZWRkaW5nJTIwc2hvb3R8ZW58MXx8fHwxNzc3Mjc4NzM3fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 3, category: "Haldi", src: "https://images.unsplash.com/photo-1670774544351-96d2464fd873?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwaGFsZGl8ZW58MXx8fHwxNzc3Mjc4NzM3fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 4, category: "Mehendi", src: "https://images.unsplash.com/photo-1624504761718-be4d634f4624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwbWVoZW5kaXxlbnwxfHx8fDE3NzcyNzg3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 5, category: "Bridal", src: "https://images.unsplash.com/photo-1578503803703-e818b8a0e00b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkZSUyMG1ha2V1cHxlbnwxfHx8fDE3NzcyNzg3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 6, category: "Reception", src: "https://images.unsplash.com/photo-1633759287724-555b7c3f568d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwcmVjZXB0aW9ufGVufDF8fHx8MTc3NzI3ODczN3ww&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 7, category: "Wedding", src: "https://images.unsplash.com/photo-1680490964562-60ee7fd82944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzc3Mjc4NzM3fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 8, category: "Pre-Wedding", src: "https://images.unsplash.com/photo-1724847665609-c648e04dda32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb3VwbGUlMjBvdXRkb29yfGVufDF8fHx8MTc3NzI3ODczN3ww&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 9, category: "Sangeet", src: "https://images.unsplash.com/photo-1724847664518-c62583f1bf69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwZGVjb3J8ZW58MXx8fHwxNzc3Mjc4NzM3fDA&ixlib=rb-4.1.0&q=80&w=1080" },
];

export function FeaturedGallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredData = activeTab === "All" ? galleryData : galleryData.filter(img => img.category === activeTab);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[color:var(--mm-gold)] text-sm md:text-base uppercase tracking-[0.3em] mb-4"
          >
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-['Playfair_Display'] text-white"
          >
            Featured Galleries
          </motion.h2>
          <div className="h-1 w-20 bg-[color:var(--mm-gold)] mx-auto mt-6 rounded"></div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 ${
                activeTab === cat
                  ? "bg-[color:var(--mm-gold)] text-black shadow-[0_0_15px_rgba(212,175,55,0.35)]"
                  : "bg-transparent text-gray-400 border border-gray-600 hover:border-[color:var(--mm-gold)] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <div className="mx-auto max-w-6xl">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3 }}>
            <Masonry gutter="20px">
              {filteredData.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl border border-white/5 bg-black/40 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
                  onClick={() => setLightboxImage(item.src)}
                >
                  <img
                    src={item.src}
                    alt={item.category}
                    loading="lazy"
                    className="w-full h-auto block object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale-[20%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-[color:var(--mm-gold)] text-lg font-['Playfair_Display'] italic tracking-wide border-b border-[color:var(--mm-gold)] pb-1">
                      View Story
                    </span>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightboxImage(null)}
        >
          <img src={lightboxImage} alt="Preview" className="max-w-full max-h-full object-contain" />
          <button
            type="button"
            aria-label="Close preview"
            className="absolute top-6 right-6 text-white hover:text-[color:var(--mm-gold)] transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
