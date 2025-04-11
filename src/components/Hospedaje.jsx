import React from "react";
import Slider from "react-slick";
import "./Hospedaje.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hospedaje = ({ hospedajes }) => {
  const settings = {
    dots: true, // puntitos abajo
    infinite: true, // loop infinito
    speed: 500, // velocidad de transición
    slidesToShow: 3, // mostrar 3 hospedajes en desktop
    slidesToScroll: 1,
    autoplay: true, // autoplay activado
    autoplaySpeed: 3000, // cada 3 segundos
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="hospedaje" className="hospedaje">
      <div className="hospedaje-contenedor">
        <h2 className="hospedaje-titulo">
          Hospedate en <span class="resaltado">MERCEDES</span>
        </h2>

        <Slider {...settings} className="hospedaje-slider">
          {hospedajes.map((lugar, index) => (
            <div key={index} className="hospedaje-card">
              <h3 className="hospedaje-nombre">{lugar.nombre}</h3>
              <p className="hospedaje-descripcion">{lugar.descripcion}</p>
              <a
                href={lugar.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hospedaje-boton"
              >
                Más info
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hospedaje;
