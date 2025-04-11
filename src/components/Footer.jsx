import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="contacto" className="footer">
      <div className="footer-contenedor">
        {/* Contacto */}
        <div className="footer-seccion">
          <h3 className="footer-titulo">Contacto</h3>
          <div className="footer-item">
            <FaEnvelope />
            <span>info@info.com</span>
          </div>
          {/* <div className="footer-item">
            <FaMapMarkerAlt />
            <span>Lugar del evento, 123, Mercedes</span>
          </div> */}
          <div className="footer-item">
            <FaPhone />
            <span>2324 - 123456</span>
          </div>
          {/* <div className="footer-item">
            <FaWhatsapp />
            <span>2324 - 123456</span>
          </div> */}
        </div>

        {/* Redes Sociales */}
        <div className="footer-seccion">
          <h3 className="footer-titulo">Seguinos en nuestras redes</h3>
          <div className="footer-redes">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="footer-icono" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="footer-icono" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="footer-icono" />
            </a>
          </div>
          <p>@fiestasMercedes</p>
        </div>
      </div>

      {/* 🔥 Logo abajo, centrado */}
      <div className="footer-logo">
        <img
          src="../assets/Logos/logo1.png"
          alt="Fiesta de la Torta Frita"
          className="footer-logo-imagen"
        />
      </div>

      {/* Copy final */}
      <div className="footer-copy">
        © 2025 Municipalidad de Mercedes. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
