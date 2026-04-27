import React, { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WeddingMoments } from "./components/WeddingMoments";
import { FeaturedGallery } from "./components/FeaturedGallery";
import { CinematicFilms } from "./components/CinematicFilms";
import { Services } from "./components/Services";
import { PreWeddingExperience } from "./components/PreWeddingExperience";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { InstagramShowcase } from "./components/InstagramShowcase";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: false,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <WeddingMoments />
      <FeaturedGallery />
      <CinematicFilms />
      <Services />
      <PreWeddingExperience />
      <WhyChooseUs />
      <InstagramShowcase />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
