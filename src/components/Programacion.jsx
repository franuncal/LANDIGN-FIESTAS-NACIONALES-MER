import React from "react";
import "./Programacion.css";

export default function Programacion() {
  const flyersInfo = [
    { src: "/img/ingreso.webp", alt: "Apertura de predio – 11 y 12 de abril" },
    { src: "/img/info1.webp", alt: "Precios de entrada y estacionamiento" },
    {
      src: "/img/info.webp",
      alt: "Información general – actividades y horarios",
    },
  ];

  const flyersGrilla = [
    { src: "/img/sabado.webp", alt: "Grilla de artistas – Sábado 11" },
    { src: "/img/domingo.webp", alt: "Grilla de artistas – Domingo 12" },
  ];

  return (
    <>
      {/* ── Sección 1: Información general ── */}
      <section className="programacion programacion--info" id="informacion">
        <div className="programacion-inner">
          <div className="programacion-header">
            <h2 className="programacion-title">
              <span className="programacion-chip">Información</span> general
            </h2>
            <p className="programacion-subtitle">
              Todo lo que necesitás saber para vivir la fiesta.
            </p>
          </div>
          <div className="programacion-grid programacion-grid--3">
            {flyersInfo.map((f, i) => (
              <div className="programacion-card" key={i}>
                <img
                  src={f.src}
                  alt={f.alt}
                  loading="lazy"
                  className="programacion-img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sección 2: Grilla de artistas ── */}
      <section className="programacion programacion--grilla" id="programacion">
        <div className="programacion-inner">
          <div className="programacion-header">
            <h2 className="programacion-title">
              <span className="programacion-chip">Grilla</span> de artistas
            </h2>
            <p className="programacion-subtitle">
              Dos días de música, folklore y tradición en el Parque Municipal
              Independencia.
            </p>
          </div>
          <div className="programacion-grid programacion-grid--2">
            {flyersGrilla.map((f, i) => (
              <div className="programacion-card" key={i}>
                <img
                  src={f.src}
                  alt={f.alt}
                  loading="lazy"
                  className="programacion-img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
