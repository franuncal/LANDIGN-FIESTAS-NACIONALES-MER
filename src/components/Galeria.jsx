import React, { useState, useEffect, useRef } from "react";
import "./Galeria.css";

const Galeria = ({ imagenes, videos }) => {
  const [indexActual, setIndexActual] = useState(0);
  const [videoActivo, setVideoActivo] = useState(null);
  const videoRefs = useRef([]);

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

  const handlePlay = (index) => {
    if (videoActivo !== null && videoRefs.current[videoActivo]) {
      videoRefs.current[videoActivo].contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    }
    setVideoActivo(index);
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

        {/* 🎬 Reels para mobile/tablet */}
        {videos && videos.length > 0 && (
          <>
            <div className="galeria-reels">
              {videos.map((videoUrl, index) => (
                <div key={index} className="reel-item">
                  <iframe
                    src={`${videoUrl}?enablejsapi=1`}
                    ref={(el) => (videoRefs.current[index] = el)}
                    title={`Video ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    onClick={() => handlePlay(index)}
                  ></iframe>
                </div>
              ))}
            </div>

            {/* 🎥 Grid en escritorio */}
            <div className="galeria-videos-desktop">
              {videos.map((videoUrl, index) => (
                <div key={index} className="video-grid-item">
                  <iframe
                    src={`${videoUrl}?enablejsapi=1`}
                    ref={(el) => (videoRefs.current[index] = el)}
                    title={`Video ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    onClick={() => handlePlay(index)}
                  ></iframe>
                </div>
              ))}
            </div>
            <div className="galeria-instagram">
              <h2 className="galeria-instagram-titulo">
                Seguinos en Instagram
              </h2>
              <h2 className="galeria-instagram-titulo">
                <span className="resaltado">
                  y enterate de todas las novedades!
                </span>
              </h2>
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
          </>
        )}
      </div>
    </section>
  );
};

export default Galeria;
