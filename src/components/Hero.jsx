import React, { useState, useEffect } from "react";
import { calcularTiempoRestante } from "../utils/contadorUtils";
import "./Hero.css";

const Hero = ({ evento }) => {
  const [tiempoRestante, setTiempoRestante] = useState(
    calcularTiempoRestante(evento.fecha)
  );

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempoRestante(calcularTiempoRestante(evento.fecha));
    }, 1000);

    return () => clearInterval(intervalo);
  }, [evento.fecha]);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${evento.banner})`,
      }}
    >
      <h2 className="hero-subtitle">25° Aniversario</h2>
      <h1 className="hero-title">{evento.nombre}</h1>

      {/* 🔥 Fecha: usa rangoFechas si existe, sino la fecha normal */}
      <h3 className="hero-date">
        {evento.rangoFechas ||
          new Date(evento.fecha).toLocaleDateString("es-AR", {
            day: "numeric",
            month: "long",
          })}
      </h3>

      <p className="hero-description">
        Vení a ver cómo preparamos <br />
        <strong>¡La Torta Frita más grande del mundo!</strong>
      </p>

      <div
        className="hero-countdown"
        style={{
          backgroundColor: evento.colorPrimario,
        }}
      >
        Faltan {tiempoRestante.dias}d {tiempoRestante.horas}h{" "}
        {tiempoRestante.minutos}m {tiempoRestante.segundos}s para la fiesta
      </div>
    </section>
  );
};

export default Hero;
