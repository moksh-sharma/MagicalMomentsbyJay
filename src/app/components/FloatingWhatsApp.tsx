import React from "react";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/1234567890" // Placeholder
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center hover:bg-green-600 shadow-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
