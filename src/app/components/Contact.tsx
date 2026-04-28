import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import { MessageCircle, Phone, Instagram, Send } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const statusCopy = useMemo(() => {
    if (status === "success") return "Thanks! Your enquiry has been sent. We'll get back to you shortly.";
    if (status === "error") return "Sorry — something went wrong. Please try again or message us on WhatsApp.";
    return "";
  }, [status]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = new URLSearchParams();

    formData.forEach((value, key) => {
      if (typeof value === "string") payload.append(key, value);
    });

    setStatus("submitting");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[color:var(--mm-gold)]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[color:var(--mm-gold)]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 relative z-10">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12"
          >
            <p className="text-[color:var(--mm-gold)] text-sm md:text-base uppercase tracking-[0.3em] mb-4">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] text-white mb-6 leading-tight">
              Let's Capture Your <span className="italic text-[color:var(--mm-gold)]">Magical Moments</span>
            </h2>
            <p className="text-gray-300 font-light text-lg mb-12">
              We take a limited number of weddings each year to ensure we give our couples the attention and luxury experience they deserve. Reach out to secure your dates.
            </p>

            <div className="space-y-6">
              <a
                href="https://wa.me/917988985121"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:border-[color:var(--mm-gold)] group-hover:text-[color:var(--mm-gold)] group-hover:bg-[color:var(--mm-gold)]/10 transition-all duration-300">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">WhatsApp</h4>
                  <p className="text-white text-lg font-light group-hover:text-[color:var(--mm-gold)] transition-colors">+91 79889 85121</p>
                </div>
              </a>

              <a
                href="tel:+917988985121"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:border-[color:var(--mm-gold)] group-hover:text-[color:var(--mm-gold)] group-hover:bg-[color:var(--mm-gold)]/10 transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">Call Now</h4>
                  <p className="text-white text-lg font-light group-hover:text-[color:var(--mm-gold)] transition-colors">+91 79889 85121</p>
                  <p className="text-gray-400 text-sm font-light leading-tight">Alternate: +91 83988 41118</p>
                </div>
              </a>

              <a
                href="https://instagram.com/magical_moments_by_jai_ahuja"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:border-[color:var(--mm-gold)] group-hover:text-[color:var(--mm-gold)] group-hover:bg-[color:var(--mm-gold)]/10 transition-all duration-300">
                  <Instagram size={20} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">Instagram DM</h4>
                  <p className="text-white text-lg font-light group-hover:text-[color:var(--mm-gold)] transition-colors">@magical_moments_by_jai_ahuja</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12"
          >
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="bg-[#111] p-8 md:p-12 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-[color:var(--mm-gold)]/30 transition-colors duration-500"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-400">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[color:var(--mm-gold)] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs uppercase tracking-widest text-gray-400">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your contact number"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[color:var(--mm-gold)] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-400">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[color:var(--mm-gold)] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="eventType" className="text-xs uppercase tracking-widest text-gray-400">Event Type</label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[color:var(--mm-gold)] transition-colors appearance-none"
                  >
                    <option value="" className="bg-black text-white">Select an event</option>
                    <option value="wedding" className="bg-black text-white">Wedding</option>
                    <option value="pre-wedding" className="bg-black text-white">Pre-Wedding Shoot</option>
                    <option value="engagement" className="bg-black text-white">Engagement</option>
                    <option value="other" className="bg-black text-white">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className="text-xs uppercase tracking-widest text-gray-400">Event Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[color:var(--mm-gold)] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="location" className="text-xs uppercase tracking-widest text-gray-400">Location / City</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Venue or city"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[color:var(--mm-gold)] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-10">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-400">Message / Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your dream wedding..."
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[color:var(--mm-gold)] transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 rounded-full bg-[color:var(--mm-gold)] text-black uppercase tracking-widest text-sm font-semibold flex items-center justify-center gap-3 hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              >
                <Send size={18} /> {status === "submitting" ? "Sending..." : "Send Enquiry"}
              </button>

              {status !== "idle" && (
                <p
                  className={`mt-5 text-sm font-light ${
                    status === "success" ? "text-green-300" : "text-red-200"
                  }`}
                >
                  {statusCopy}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
