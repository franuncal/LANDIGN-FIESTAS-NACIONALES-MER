import React from "react";
import {
  FaEnvelope,
  FaPhone,
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
        <div className="footer-seccion contacto">
          <h4>Contacto</h4>
          <div className="footer-item">
            <FaEnvelope />
            <a href="mailto:turismomercedes@gmail.com">
              turismomercedes@gmail.com
            </a>
          </div>
          <div className="footer-item">
            <FaPhone />
            <a href="tel:08103330997">0810-333-0997</a>
          </div>
        </div>

        {/* Redes institucionales */}
        <div className="footer-seccion redes">
          <h4>Municipalidad</h4>
          <div className="footer-redes">
            <a
              href="https://www.facebook.com/munimercedes/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/munimercedes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/munimercedes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
          <p>@munimercedes</p>
        </div>

        {/* Redes evento */}
        <div className="footer-seccion redes">
          <h4>Turismo</h4>
          <div className="footer-redes">
            <a
              href="https://www.facebook.com/dirturmercedes/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/turismomercedesoficial/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
          <p>@turismomercedesoficial</p>
        </div>
      </div>

      {/* Logo */}
      <div className="footer-logo">
        <img src="../assets/Logos/logom1.png" alt="Municipalidad de Mercedes" />
      </div>

      {/* Copyright */}
      <div className="footer-copy">
        © 2025 Municipalidad de Mercedes. Todos los derechos reservados.
      </div>

      {/* Desarrollador */}
      <div className="footer-desarrollador">
        <a
          href="https://unquidev.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          UNQUI
        </a>
      </div>
    </footer>
  );
};

export default Footer;
