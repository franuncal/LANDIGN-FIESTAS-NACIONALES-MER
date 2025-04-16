import React from "react";
import Slider from "react-slick";
import { FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import "./Hospedaje.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hospedaje = ({ hospedajes }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
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
          Hospedate en <span className="resaltado">MERCEDES</span>
        </h2>

        <Slider {...settings} className="hospedaje-slider">
          {hospedajes.map((lugar, index) => (
            <div key={index} className="hospedaje-item">
              <h3 className="hospedaje-nombre">{lugar.nombre}</h3>
              <p className="hospedaje-descripcion">{lugar.descripcion}</p>
              <div className="hospedaje-iconos">
                <a href={lugar.link} target="_blank" rel="noopener noreferrer">
                  <FaMapMarkerAlt className="hospedaje-icono" />
                </a>
                {lugar.instagram && (
                  <a
                    href={lugar.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="hospedaje-icono" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hospedaje;
