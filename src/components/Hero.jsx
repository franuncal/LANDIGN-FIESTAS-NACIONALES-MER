import React, { useState, useEffect } from "react";
import { FaRegClock } from "react-icons/fa6";
import { calcularTiempoRestante } from "../utils/contadorUtils";
import "./Hero.css";

const Hero = ({ evento }) => {
  const [eventoActivo, setEventoActivo] = useState(evento || null);
  const [tiempoRestante, setTiempoRestante] = useState(
    evento
      ? calcularTiempoRestante(evento.fecha)
      : { dias: 0, horas: 0, minutos: 0, segundos: 0 },
  );
  const [modoFestejo, setModoFestejo] = useState(false);

  useEffect(() => {
    if (!evento) return;

    setEventoActivo(evento);
    setTiempoRestante(calcularTiempoRestante(evento.fecha));

    const id = setInterval(() => {
      const ahora = new Date();
      const fechaEvento = new Date(evento.fecha);
      const finFestejo = new Date(fechaEvento);
      finFestejo.setDate(finFestejo.getDate() + 2);

      if (ahora >= fechaEvento && ahora < finFestejo) {
        setModoFestejo(true);
        setTiempoRestante({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
      } else {
        setModoFestejo(false);
        setTiempoRestante(calcularTiempoRestante(evento.fecha));
      }
    }, 1000);

    return () => clearInterval(id);
  }, [evento]);

  if (!eventoActivo) return null;

  const renderCountdownAndActions = () => (
    <>
      <div className="hero-countdown">
        {modoFestejo ? (
          <div className="festejo-mensaje">
            🎉 ¡Ya estamos festejando! Vení al evento más esperado 🎉
          </div>
        ) : (
          <div className="countdown-content" aria-live="polite">
            <div className="countdown-heading">
              <FaRegClock className="countdown-icon" aria-hidden="true" />
              <span className="countdown-intro">Faltan</span>
            </div>

            <div className="time-section">
              <span className="time-number">{tiempoRestante.dias}</span>
              <span className="time-label">Días</span>
            </div>

            <div className="separator">:</div>

            <div className="time-section">
              <span className="time-number">{tiempoRestante.horas}</span>
              <span className="time-label">Horas</span>
            </div>

            <div className="separator">:</div>

            <div className="time-section">
              <span className="time-number">{tiempoRestante.minutos}</span>
              <span className="time-label">Minutos</span>
            </div>

            <div className="separator">:</div>

            <div className="time-section">
              <span className="time-number">{tiempoRestante.segundos}</span>
              <span className="time-label">Segundos</span>
            </div>
          </div>
        )}
      </div>

      <div className="hero-actions">
        <a
          className="hero-action-btn"
          href="https://mercedes.boleteriadigital.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Comprar Entradas
        </a>
        <a
          className="hero-action-btn"
          href="https://turismo.mercedes.gob.ar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Turismo Web
        </a>
        <a
          className="hero-action-btn"
          href="https://www.instagram.com/turismo_mercedes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Novedades
        </a>
        <a className="hero-action-btn" href="#como-llegar">
          Cómo llegar
        </a>
      </div>
    </>
  );

  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-content">
          <div className="hero-panel hero-panel-cta">
            {renderCountdownAndActions()}
          </div>
        </div>
      </section>

      <section
        className="hero-mobile-cta"
        aria-label="Cuenta regresiva y accesos"
      >
        <div className="hero-mobile-cta-inner">
          {renderCountdownAndActions()}
        </div>
      </section>
    </>
  );
};

export default Hero;
