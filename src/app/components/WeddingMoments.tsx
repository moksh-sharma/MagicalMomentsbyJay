import React from "react";
import { motion } from "motion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const moments = [
  { title: "Roka Ceremony", image: "https://images.unsplash.com/photo-1680490964562-60ee7fd82944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzc3Mjc4NzM3fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { title: "Engagement", image: "https://images.unsplash.com/photo-1724847665609-c648e04dda32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb3VwbGUlMjBvdXRkb29yfGVufDF8fHx8MTc3NzI3ODczN3ww&ixlib=rb-4.1.0&q=80&w=1080" },
  { title: "Mehendi", image: "https://images.unsplash.com/photo-1624504761718-be4d634f4624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwbWVoZW5kaXxlbnwxfHx8fDE3NzcyNzg3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { title: "Haldi", image: "https://images.unsplash.com/photo-1670774544351-96d2464fd873?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwaGFsZGl8ZW58MXx8fHwxNzc3Mjc4NzM3fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { title: "Sangeet", image: "https://images.unsplash.com/photo-1724847664518-c62583f1bf69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwZGVjb3J8ZW58MXx8fHwxNzc3Mjc4NzM3fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { title: "Wedding Day", image: "https://images.unsplash.com/photo-1644337111604-aa1816b542a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwYnJpZGUlMjBncm9vbXxlbnwxfHx8fDE3NzcyNzg3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { title: "Reception", image: "https://images.unsplash.com/photo-1633759287724-555b7c3f568d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwcmVjZXB0aW9ufGVufDF8fHx8MTc3NzI3ODczN3ww&ixlib=rb-4.1.0&q=80&w=1080" },
  { title: "Bridal Portraits", image: "https://images.unsplash.com/photo-1578503803703-e818b8a0e00b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkZSUyMG1ha2V1cHxlbnwxfHx8fDE3NzcyNzg3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { title: "Groom Portraits", image: "https://images.unsplash.com/photo-1729347917808-e3e35a462fec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBncm9vbXxlbnwxfHx8fDE3NzcyNzg3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080" },
];

export function WeddingMoments() {
  const settings = {
    dots: false,
    infinite: true,
    rtl: true,
    speed: 12000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerPadding: "30px" },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, centerPadding: "20px" },
      },
    ],
  };

  return (
    <section className="py-16 sm:py-24 bg-black/80 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[color:var(--mm-gold)] text-sm md:text-base uppercase tracking-[0.3em] mb-4"
        >
          A Journey of Love
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-['Playfair_Display'] text-white"
        >
          Wedding Functions
        </motion.h2>
        <div className="h-1 w-20 bg-[color:var(--mm-gold)] mx-auto mt-6 rounded"></div>
      </div>

      <div className="w-full">
        <Slider {...settings} className="w-full">
          {moments.map((moment, index) => (
            <div key={index} className="px-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative group overflow-hidden rounded-xl bg-black aspect-[3/4] shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
              >
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 border border-[color:var(--mm-gold)]/0 group-hover:border-[color:var(--mm-gold)]/30 transition-colors duration-500 rounded-xl m-4 pointer-events-none"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-['Playfair_Display'] text-[color:var(--mm-gold)] drop-shadow-lg mb-2">
                    {moment.title}
                  </h3>
                  <div className="w-8 h-[1px] bg-white transition-all duration-500 group-hover:w-16"></div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
