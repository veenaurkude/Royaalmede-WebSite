"use client";

import { FaWhatsapp } from "react-icons/fa";

const WhatsAppBtn = () => {
  return (
    <a
      href="https://wa.me/919028999253"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[1000] bg-[#25D366] rounded-full p-3 shadow-lg flex items-center justify-center hover:bg-[#1ebc5a] transition-colors"
    >
      <FaWhatsapp size={28} color="#fff" />
    </a>
  );
};

export default WhatsAppBtn;
