import React from "react";
import "./Noticias.css";

const Noticias = ({ noticias }) => {
  return (
    <section id="noticias" className="seccion-noticias">
      <div className="contenedor">
        <h2 className="titulo-seccion">
          <span className="resaltado">Noticias</span> del Evento
        </h2>

        <div className="lista-noticias">
          {noticias.map((noticia, index) => (
            <div key={index} className="tarjeta-noticia">
              {noticia.imagen && (
                <img
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  className="imagen-noticia"
                />
              )}
              <div className="contenido-noticia">
                <h3 className="titulo-noticia">{noticia.titulo}</h3>
                <p className="fecha-noticia">
                  {new Date(noticia.fecha).toLocaleDateString("es-AR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </p>
                <p className="resumen-noticia">{noticia.resumen}</p>
                {noticia.link && (
                  <a
                    href={noticia.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="boton-mas-info"
                  >
                    Leer más
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Noticias;
