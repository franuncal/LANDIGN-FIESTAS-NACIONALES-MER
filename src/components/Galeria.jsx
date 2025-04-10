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
        <h2 className="galeria-titulo">Reviví ediciones anteriores</h2>

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
      </div>
    </section>
  );
};

export default Galeria;
