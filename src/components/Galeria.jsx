import React, { useState, useEffect } from "react";
import "./Galeria.css";

const Galeria = ({ imagenes, videos }) => {
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

        {/* 🖼 Carrusel de imágenes */}
        <div className="galeria-imagen-contenedor">
          <img
            src={imagenes[indexActual]}
            alt={`Imagen ${indexActual + 1}`}
            className="galeria-imagen"
          />
          <button
            onClick={handlePrev}
            className="galeria-boton galeria-boton-izq"
          >
            ◀
          </button>
          <button
            onClick={handleNext}
            className="galeria-boton galeria-boton-der"
          >
            ▶
          </button>
        </div>

        {/* 🎬 Grid de videos */}
        {videos && videos.length > 0 && (
          <div className="galeria-videos">
            {videos.map((videoUrl, index) => (
              <div key={index} className="video-item">
                <iframe
                  src={videoUrl}
                  title={`Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Galeria;
