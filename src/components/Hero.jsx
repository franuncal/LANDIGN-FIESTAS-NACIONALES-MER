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
  const [modoFestejo, setModoFestejo] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      const ahora = new Date();
      const eventoActual = obtenerEventoActivo();
      setEvento(eventoActual);

      // Definir rango de festejo (para el primer evento)
      const inicioFestejo = new Date("2025-05-10T00:00:00");
      const finFestejo = new Date("2025-05-12T00:00:00");

      // Activar mensaje de festejo si estamos dentro del rango
      if (ahora >= inicioFestejo && ahora < finFestejo) {
        setModoFestejo(true);
      } else {
        setModoFestejo(false);
        setTiempoRestante(calcularTiempoRestante(eventoActual.fecha));
      }
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
        {modoFestejo ? (
          <div className="festejo-mensaje">
            🎉 ¡Ya estamos festejando la Fiesta de la Torta Frita! ¡Te
            esperamos! 🎉
          </div>
        ) : (
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
        )}
      </div>
    </section>
  );
};

export default Hero;
