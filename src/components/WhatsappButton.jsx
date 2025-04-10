import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsappButton.css"; // Importamos el CSS

const WhatsappButton = () => {
  const numeroWhatsapp = "5492324123456"; // Cambia este número por el real
  const mensaje = "Hola! Quisiera consultar sobre el evento ✨";
  const link = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
    mensaje
  )}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Contacto por WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsappButton;
