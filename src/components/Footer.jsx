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
      {/* Título centralizado */}
      <div className="footer-titulo">{/* <h3>Contacto</h3> */}</div>

      <div className="footer-contenedor">
        {/* Sección de Contacto: Móvil y Desktop */}
        <div className="footer-seccion contacto">
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

        {/* Sección Redes Sociales Institucionales */}
        <div className="footer-seccion redes-institucionales">
          <div className="footer-redes">
            <a
              href="https://www.facebook.com/munimercedes/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="footer-icono" />
            </a>
            <a
              href="https://www.instagram.com/munimercedes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="footer-icono" />
            </a>
            <a
              href="https://x.com/munimercedes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="footer-icono" />
            </a>
          </div>
          <p>@munimercedes</p>
        </div>

        {/* Sección Redes Sociales Evento */}
        <div className="footer-seccion redes-evento">
          <div className="footer-redes">
            <a
              href="https://www.facebook.com/dirturmercedes/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="footer-icono" />
            </a>
            <a
              href="https://www.instagram.com/turismomercedesoficial/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="footer-icono" />
            </a>
          </div>
          <p>@turismomercedesoficial</p>
        </div>
      </div>
      {/* Logo Institucional */}
      <div className="footer-logo">
        {/* <img src="../assets/Logos/logo3.png" alt="Municipalidad de Mercedes" /> */}
        <img src="../assets/Logos/logo1.png" alt="Municipalidad de Mercedes" />
        {/* <img src="../assets/Logos/logoM.png" alt="Municipalidad de Mercedes" /> */}
      </div>

      <div className="footer-copy">
        © 2025 Municipalidad de Mercedes. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
