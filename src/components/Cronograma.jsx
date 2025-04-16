import React from "react";
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

  return (
    <section id="eventos" className="cronograma">
      <div className="cronograma-contenedor">
        <h2 className="cronograma-titulo">
          Cronograma de <span class="resaltado">ACTIVIDADES</span>
        </h2>

        {/* 🔥 Mostrar actividades por día */}
        {Object.keys(actividadesPorDia).map((dia, index) => (
          <div key={index} className="cronograma-dia">
            <h3 className="cronograma-dia-titulo">{dia}</h3>
            <ul className="cronograma-lista">
              {actividadesPorDia[dia].map((actividad, idx) => (
                <li key={idx} className="cronograma-item">
                  <h4 className="cronograma-item-titulo">{actividad.nombre}</h4>
                  <p className="cronograma-item-descripcion">
                    {actividad.descripcion}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* 🔥 Agregamos evento estelar */}
        <div className="evento-estelar">
          <h3 className="evento-estelar-titulo">25 años haciendo</h3>
          <p className="evento-estelar-descripcion">
            ¡LA TORTA FRITA MAS GRANDE DEL MUNDO!
          </p>
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

export default Cronograma;
