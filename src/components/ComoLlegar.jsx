import React, { useState, useRef, useEffect } from "react";
import { FaCar, FaTrain, FaBus, FaTicketAlt, FaTimes } from "react-icons/fa";
import "./ComoLlegar.css";

const ComoLlegar = () => {
  const [pdfSeleccionado, setPdfSeleccionado] = useState("");
  const [transporteSeleccionado, setTransporteSeleccionado] = useState("");
  const [esMobile, setEsMobile] = useState(false);
  const cardsRef = useRef(null);

  useEffect(() => {
    const manejarResize = () => setEsMobile(window.innerWidth <= 768);
    manejarResize(); // Inicializa con el valor actual
    window.addEventListener("resize", manejarResize);
    return () => window.removeEventListener("resize", manejarResize);
  }, []);

  const pdfsDisponibles = {
    auto: [{ nombre: "Ruta Nacional 5", url: "/pdfs/auto.pdf" }],
    tren: [
      { nombre: "Línea Sarmiento Mercedes-Moreno", url: "/pdfs/trenes.pdf" },
      { nombre: "Línea Sarmiento Moreno-Mercedes", url: "/pdfs/trenes2.pdf" },
    ],
    colectivo: [
      { nombre: "Atlantida 57", url: "/pdfs/atlantida57.pdf" },
      { nombre: "Chevalier", url: "/pdfs/chevalier.pdf" },
      { nombre: "Master Bus", url: "/pdfs/masterbus.pdf" },
      { nombre: "TALP", url: "/pdfs/talp.pdf" },
    ],
    urbanos: [
      { nombre: "Urbano Línea 1", url: "/pdfs/urbano1.pdf" },
      { nombre: "Urbano Línea 2 - Ramal A", url: "/pdfs/urbano2.pdf" },
      { nombre: "Urbano Línea 2 - Ramal B", url: "/pdfs/urbano2b.pdf" },
    ],
  };

  const mostrarPDF = (tipo) => {
    setTransporteSeleccionado(tipo);
    setPdfSeleccionado(pdfsDisponibles[tipo][0].url);
  };

  const cerrarPDF = () => {
    setPdfSeleccionado("");
    setTransporteSeleccionado("");
  };

  const obtenerImagenDesdePdf = (pdfUrl) => {
    const nombre = pdfUrl.split("/").pop().replace(".pdf", ".webp");
    return `/img/${nombre}`;
  };

  return (
    <section id="como-llegar" className="como-llegar">
      <div className="como-llegar-contenedor">
        <h2 className="como-llegar-titulo">
          ¿Cómo <span className="resaltado">llegar?</span>
        </h2>

        <p className="como-llegar-texto">
          La Fiesta Nacional se realiza en el Parque Municipal Independencia de
          la ciudad de Mercedes, Buenos Aires. ¡Te esperamos!
        </p>

        <div className="transporte-opciones" ref={cardsRef}>
          <div className="transporte-card">
            <FaCar className="transporte-icono" />
            <button
              className="boton-ver-mas"
              onClick={() => mostrarPDF("auto")}
            >
              En Auto
            </button>
          </div>

          <div className="transporte-card">
            <FaTrain className="transporte-icono" />
            <button
              className="boton-ver-mas"
              onClick={() => mostrarPDF("tren")}
            >
              En Tren
            </button>
          </div>

          <div className="transporte-card">
            <FaBus className="transporte-icono" />
            <button
              className="boton-ver-mas"
              onClick={() => mostrarPDF("colectivo")}
            >
              En Colectivo
            </button>
          </div>

          <div className="transporte-card">
            <FaBus className="transporte-icono" />
            <button
              className="boton-ver-mas"
              onClick={() => mostrarPDF("urbanos")}
            >
              Urbanos
            </button>
          </div>
        </div>

        {pdfSeleccionado && (
          <div className="modal-overlay">
            <div className="modal-pdf">
              <button className="boton-cerrar" onClick={cerrarPDF}>
                <FaTimes />
              </button>
              <h3>Información detallada</h3>
              <div className="pdf-botones">
                {pdfsDisponibles[transporteSeleccionado].map((pdf, idx) => (
                  <button
                    key={idx}
                    className="boton-pdf"
                    onClick={() => setPdfSeleccionado(pdf.url)}
                  >
                    {pdf.nombre}
                  </button>
                ))}
              </div>
              {esMobile ? (
                <img
                  src={obtenerImagenDesdePdf(pdfSeleccionado)}
                  alt="Información de transporte"
                  className="imagen-movil"
                />
              ) : (
                <iframe
                  src={`${pdfSeleccionado}#toolbar=0&navpanes=0&scrollbar=0`}
                  title="PDF"
                ></iframe>
              )}
            </div>
          </div>
        )}

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
