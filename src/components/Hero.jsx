import React, { useState, useEffect } from "react";
import {
  calcularTiempoRestante,
  obtenerEventoActivo,
} from "../utils/contadorUtils";
import "./Hero.css";

const Hero = () => {
  const [evento, setEvento] = useState(obtenerEventoActivo());
  const [tiempoRestante, setTiempoRestante] = useState(
    calcularTiempoRestante(evento.fecha)
  );

  useEffect(() => {
    const intervalo = setInterval(() => {
      const eventoActual = obtenerEventoActivo();
      setEvento(eventoActual);
      setTiempoRestante(calcularTiempoRestante(eventoActual.fecha));
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section
      className="hero"
      id="hero"
      style={{
        backgroundImage: `url(${evento.banner})`,
      }}
    >
      <h2 className="hero-subtitle">25° Aniversario</h2>
      <h1 className="hero-title">{evento.nombre}</h1>

      <h3 className="hero-date">
        {evento.rangoFechas ||
          new Date(evento.fecha).toLocaleDateString("es-AR", {
            day: "numeric",
            month: "long",
          })}
      </h3>

      <div className="hero-countdown">
        <div className="countdown-content">
          <span className="clock-icon">🕒</span>
          <span className="faltan-text">Faltan</span>

          <div className="time-section">
            <span className="time-number">{tiempoRestante.dias}</span>
            <span className="time-label">Días</span>
          </div>

          <div className="separator">|</div>

          <div className="time-section">
            <span className="time-number">{tiempoRestante.horas}</span>
            <span className="time-label">Horas</span>
          </div>

          <div className="separator">|</div>

          <div className="time-section">
            <span className="time-number">{tiempoRestante.minutos}</span>
            <span className="time-label">Minutos</span>
          </div>

          <div className="separator">|</div>

          <div className="time-section">
            <span className="time-number">{tiempoRestante.segundos}</span>
            <span className="time-label">Segundos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
