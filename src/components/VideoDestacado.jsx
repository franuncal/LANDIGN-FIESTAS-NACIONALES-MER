import React from "react";
import "./VideoDestacado.css";

const VideoDestacado = () => {
  return (
    <section id="video-destacado" className="video-destacado">
      <div className="video-destacado-inner">
        <div className="video-destacado-copy">
          <h2 className="video-destacado-title">
            <span className="video-destacado-chip">Ya llega</span> <br />
            la Fiesta de la Torta Frita
          </h2>
          <p className="video-destacado-subtitle">
            <strong>11 y 12 de abril</strong> te esperamos en el Parque
            Municipal Independencia para disfrutar de la tradición, artistas en
            vivo, espacios para las infancias y las mejores tortas fritas del
            mundo.
          </p>
          <p className="video-destacado-highlight">¡No te lo pierdas!</p>
        </div>

        <div className="video-frame">
          <video
            className="video-player"
            src="/assets/media/hero-720.mp4"
            controls
            playsInline
            preload="metadata"
            poster="/assets/media/hero-institucional.png"
          >
            Tu navegador no soporta video HTML5.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoDestacado;
