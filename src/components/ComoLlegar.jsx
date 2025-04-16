import React from "react";
import { FaCar, FaTrain, FaBus, FaTicketAlt } from "react-icons/fa";
import "./ComoLlegar.css";

const ComoLlegar = () => {
  return (
    <section id="como-llegar" className="como-llegar">
      <div className="como-llegar-contenedor">
        <h2 className="como-llegar-titulo">
          ¿Cómo <span className="resaltado">llegar?</span>{" "}
        </h2>

        <p className="como-llegar-texto">
          La Fiesta Nacional se realiza en el Parque Municipal Independencia de
          la ciudad de Mercedes, Buenos Aires.
          <br />
          ¡Te esperamos para disfrutar de un evento único!
        </p>

        {/* 🔥 Opciones de transporte */}
        <div className="transporte-opciones">
          <div className="transporte-card">
            <div className="transporte-icono">
              <FaCar />
            </div>
            <h3 className="transporte-titulo">Auto</h3>
            <p className="transporte-descripcion">
              Acceso por Ruta Nacional 5 (Buenos Aires - Mercedes).
            </p>
          </div>

          <div className="transporte-card">
            <div className="transporte-icono">
              <FaTrain />
            </div>
            <h3 className="transporte-titulo">Tren</h3>
            <p className="transporte-descripcion">
              Línea Sarmiento desde Once hasta Mercedes (terminal).
            </p>
          </div>

          <div className="transporte-card">
            <div className="transporte-icono">
              <FaBus />
            </div>
            <h3 className="transporte-titulo">Colectivo</h3>
            <p className="transporte-descripcion">
              Colectivos y combis desde CABA y Zona Oeste (consultá empresas
              locales).
            </p>
          </div>
        </div>

        {/* 🔥 Botón de Más Información */}
        <div className="mas-info">
          <a
            href="https://nw.mercedes.gob.ar/transportes"
            target="_blank"
            className="boton-mas-info"
          >
            Más Información
          </a>
        </div>

        {/* 🔥 Mapa */}
        <div className="como-llegar-mapa">
          <iframe
            title="Mapa Fiesta Nacional Mercedes"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.879637065421!2d-59.435664326894795!3d-34.63248182926947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc74825d7f6ce9%3A0x3e0edc369abfa2cb!2sParque%20Municipal%20Independencia!5e0!3m2!1ses!2sar!4v1744079008380!5m2!1ses!2sar"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* 🔥 Link para comprar entradas */}
        <div className="cronograma-entradas">
          <a
            href="https://mercedes.boleteriadigital.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="boton-entradas"
          >
            <FaTicketAlt className="icono-ticket" /> Comprar Entradas
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComoLlegar;
