import React, { useState, useEffect } from "react";
import "./Galeria.css";

const Galeria = ({ imagenes }) => {
  const [indexActual, setIndexActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexActual((prevIndex) => (prevIndex + 1) % imagenes.length);
    }, 3000);
    return () => clearInterval(intervalo);
  }, [imagenes.length]);

  const handlePrev = () => {
    setIndexActual(
      (prevIndex) => (prevIndex - 1 + imagenes.length) % imagenes.length
    );
  };

  const handleNext = () => {
    setIndexActual((prevIndex) => (prevIndex + 1) % imagenes.length);
  };

  return (
    <section id="galeria" className="galeria">
      <div className="galeria-contenedor">
        <h2 className="galeria-titulo">
          <span className="resaltado">Reviví</span> ediciones anteriores
        </h2>
        <p className="galeria-subtitulo">
          Un recorrido por los mejores momentos de la Fiesta Nacional de la
          Torta Frita.
        </p>

        <div className="galeria-imagen-contenedor">
          <img
            src={imagenes[indexActual]}
            alt={`Imagen ${indexActual + 1}`}
            className="galeria-imagen"
          />
          <div className="galeria-imagen-overlay"></div>
          <button
            onClick={handlePrev}
            className="galeria-boton galeria-boton-izq"
            aria-label="Imagen anterior"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="galeria-boton galeria-boton-der"
            aria-label="Imagen siguiente"
          >
            ›
          </button>

          <div className="galeria-indicador">
            {String(indexActual + 1).padStart(2, "0")} /{" "}
            {String(imagenes.length).padStart(2, "0")}
          </div>
        </div>

        <div className="galeria-thumbs">
          {imagenes.slice(0, 8).map((img, index) => (
            <button
              key={img}
              type="button"
              className={`thumb-btn ${indexActual === index ? "is-active" : ""}`}
              onClick={() => setIndexActual(index)}
              aria-label={`Ir a imagen ${index + 1}`}
            >
              <img src={img} alt={`Miniatura ${index + 1}`} className="thumb-img" />
            </button>
          ))}
        </div>

        <div className="galeria-instagram">
          <h2 className="galeria-instagram-titulo">Seguinos en Instagram</h2>
          <p className="galeria-instagram-copy">
            Enterate antes que nadie de artistas, horarios y novedades.
          </p>
          <p className="galeria-instagram-user">@turismomercedesoficial</p>
          <a
            href="https://www.instagram.com/turismomercedesoficial"
            target="_blank"
            rel="noopener noreferrer"
            className="galeria-instagram-boton"
          >
            Seguinos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Galeria;
