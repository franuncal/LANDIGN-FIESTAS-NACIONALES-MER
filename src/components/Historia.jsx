import React from "react";
import "./Historia.css";

const Historia = ({ historia }) => {
  return (
    <section
      className="historia"
      style={{
        backgroundColor: historia.colorSecundario,
      }}
    >
      <div className="historia-texto">
        <h2 className="historia-titulo">Nuestra Historia</h2>
        <p className="historia-descripcion">{historia.descripcion}</p>
      </div>
      <div className="historia-imagen-contenedor">
        <img
          src={historia.imagen}
          alt="Historia de la Fiesta"
          className="historia-imagen"
        />
      </div>
    </section>
  );
};

export default Historia;
