import React from "react";
import { motion } from "motion/react";
import Slider from "react-slick";
import { Star, Quote } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    couple: "Aisha & Rohan",
    text: "Jai and his team didn't just take pictures; they captured the soul of our wedding. Every time we look at our album, we are transported back to those magical three days. Truly the best decision we made for our wedding."
  },
  {
    couple: "Priya & Kabir",
    text: "The cinematic wedding film brought tears to our eyes. The way they blended our vows, the emotional moments of my parents, and the epic dance performances was nothing short of a Bollywood movie. Unbelievable talent!"
  },
  {
    couple: "Sneha & Arjun",
    text: "From our pre-wedding shoot in Udaipur to our reception night, the Magical Moments team made us feel so comfortable. The candid shots are our absolute favorites—they caught expressions we didn't even know we had."
  },
  {
    couple: "Meera & Siddharth",
    text: "Professional, creative, and extremely patient. They managed to capture all 500 of our guests while still focusing on our intimate moments. The premium album quality is out of this world."
  }
];

export function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    customPaging: (i) => (
      <div className="w-2.5 h-2.5 bg-gray-600 rounded-full hover:bg-[color:var(--mm-gold)] transition-all duration-300 mt-8"></div>
    )
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-5">
        <Quote size={400} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[color:var(--mm-gold)] text-sm md:text-base uppercase tracking-[0.3em] mb-4"
          >
            Love Letters
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-['Playfair_Display'] text-white"
          >
            Words from our Couples
          </motion.h2>
          <div className="h-1 w-20 bg-[color:var(--mm-gold)] mx-auto mt-6 rounded"></div>
        </div>

        <div className="max-w-4xl mx-auto cursor-grab active:cursor-grabbing">
          <Slider {...settings}>
            {testimonials.map((testimony, index) => (
              <div key={index} className="px-4 pb-12 outline-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-black/50 backdrop-blur-sm border border-white/5 p-10 md:p-16 rounded-2xl text-center shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative"
                >
                  <div className="flex justify-center gap-1 mb-8">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={20} className="text-[color:var(--mm-gold)]" fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl lg:text-3xl font-['Playfair_Display'] text-gray-200 italic leading-relaxed mb-10">
                    "{testimony.text}"
                  </p>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-[1px] bg-[color:var(--mm-gold)] mb-4"></div>
                    <h4 className="text-white uppercase tracking-widest text-sm font-semibold">
                      {testimony.couple}
                    </h4>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
