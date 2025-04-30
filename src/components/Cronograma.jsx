import React, { useState } from "react";
import "./Cronograma.css";
import { FaTicketAlt } from "react-icons/fa";

const Cronograma = ({ actividades }) => {
  // 🔥 Agrupar actividades por fecha
  const actividadesPorDia = actividades.reduce((acc, actividad) => {
    const fecha = new Date(actividad.fecha);
    const dia = fecha.toLocaleDateString("es-AR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });

    if (!acc[dia]) {
      acc[dia] = [];
    }
    acc[dia].push(actividad);
    return acc;
  }, {});

  // Usamos ID único para cada actividad para evitar conflictos
  const [expandido, setExpandido] = useState({});

  const toggleExpandido = (idx) => {
    setExpandido((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
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
    <section id="eventos" className="cronograma">
      <div className="cronograma-contenedor">
        <h2 className="cronograma-titulo">
          Cronograma de <span className="resaltado">ACTIVIDADES</span>
        </h2>

        {Object.keys(actividadesPorDia).map((dia, index) => (
          <div key={index} className="cronograma-dia">
            <h3 className="cronograma-dia-titulo">{dia}</h3>
            <ul className="cronograma-lista">
              {actividadesPorDia[dia].map((actividad, idx) => (
                <li
                  key={idx}
                  className={`cronograma-item ${
                    expandido[actividad.nombre + idx] ? "expandido" : ""
                  }`}
                >
                  <h4 className="cronograma-item-titulo">{actividad.nombre}</h4>
                  <p className="cronograma-item-descripcion">
                    {expandido[actividad.nombre + idx]
                      ? actividad.descripcion
                      : truncateDescription(actividad.descripcion, 120)}
                  </p>
                  <button
                    className="leer-mas-btn"
                    onClick={() => toggleExpandido(actividad.nombre + idx)}
                  >
                    {expandido[actividad.nombre + idx]
                      ? "Leer Menos"
                      : "Leer Más"}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="evento-estelar">
          <h3 className="evento-estelar-titulo">25 años haciendo</h3>
          <p className="evento-estelar-descripcion">
            ¡LA TORTA FRITA MAS GRANDE DEL MUNDO!
          </p>
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

export default Cronograma;
