import React, { useState } from "react";
import "./Cronograma.css";
import { FaTicketAlt } from "react-icons/fa";

const Cronograma = ({ actividadesGenerales, cronogramaPorDia }) => {
  const [diaSeleccionado, setDiaSeleccionado] = useState("10 de mayo");
  const [expandido, setExpandido] = useState({});

  const toggleExpandido = (id) => {
    setExpandido((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const truncateDescription = (descripcion, maxLength = 80) => {
    if (descripcion.length <= maxLength) return descripcion;

    let truncado = descripcion.slice(0, maxLength);
    const ultimoEspacio = truncado.lastIndexOf(" ");
    if (ultimoEspacio > 0) {
      truncado = truncado.slice(0, ultimoEspacio);
    }

    return truncado + "...";
  };

  return (
    <section className="cronograma-section" id="cronograma">
      <h2 className="cronograma-title">
        Cronograma de <span className="resaltado">Actividades</span>
      </h2>

      {/* ACTIVIDADES GENERALES */}
      {actividadesGenerales?.length > 0 && (
        <div className="actividades-generales">
          {actividadesGenerales.map((actividad, index) => {
            const id = actividad.nombre + index;
            const estaExpandido = expandido[id];
            const descripcion = estaExpandido
              ? actividad.descripcion
              : truncateDescription(actividad.descripcion, 80);

            return (
              <div key={id} className="actividad-card">
                <h3>{actividad.nombre}</h3>
                <p>{descripcion}</p>
                {actividad.descripcion.length > 80 && (
                  <button
                    className="leer-mas-btn"
                    onClick={() => toggleExpandido(id)}
                  >
                    {estaExpandido ? "Leer menos" : "Leer más"}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* BOTONES DE DÍAS */}
      {cronogramaPorDia && (
        <div className="cronograma-botones">
          {Object.keys(cronogramaPorDia).map((dia) => (
            <button
              key={dia}
              className={`boton-dia ${dia === diaSeleccionado ? "activo" : ""}`}
              onClick={() => setDiaSeleccionado(dia)}
            >
              {dia}
            </button>
          ))}
        </div>
      )}

      {/* LISTADO DEL DÍA SELECCIONADO */}
      {cronogramaPorDia?.[diaSeleccionado]?.length > 0 && (
        <div className="cronograma-dia">
          {cronogramaPorDia[diaSeleccionado].map((actividad, index) => (
            <div key={index} className="actividad-dia">
              <span role="img" aria-label="Fiesta"></span>
              <p>{actividad}</p>
            </div>
          ))}
        </div>
      )}

      <div className="evento-estelar">
        <h3 className="evento-estelar-titulo">25 años haciendo</h3>
        <p className="evento-estelar-descripcion">
          ¡LA TORTA FRITA MAS GRANDE DEL MUNDO!
        </p>
        <p className="evento-estelar-horario">
          🕒 Domingo 11 de mayo - 15:00 hs
        </p>
      </div>

      {/* <div className="evento-estelar">
        <h3 className="evento-estelar-titulo">25 años haciendo</h3>
        <p className="evento-estelar-descripcion">
          ¡LA TORTA FRITA MAS GRANDE DEL MUNDO!
        </p>
      </div> */}

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
    </section>
  );
};

export default Cronograma;
