import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo-contenedor">
          <a href="#inicio" className="logo">
            <img
              src="../assets/Logos/logom1.png"
              alt="Fiesta de la Torta Frita"
              className="logo-imagen"
            />
          </a>
          <a
            href="https://turismo.mercedes.gob.ar/"
            className="volver-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            ← Turismo Mercedes
          </a>
        </div>

        <nav className={`nav ${menuAbierto ? "activo" : ""}`}>
          <ul className="nav-list">
            <li>
              <a href="#hero" onClick={cerrarMenu}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#historia" onClick={cerrarMenu}>
                Historia
              </a>
            </li>
            <li>
              <a href="#cronograma" onClick={cerrarMenu}>
                Actividades
              </a>
            </li>
            <li>
              <a href="#como-llegar" onClick={cerrarMenu}>
                Cómo llegar
              </a>
            </li>
            <li>
              <a href="#hospedaje" onClick={cerrarMenu}>
                Hospedaje
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={cerrarMenu}>
                Contacto
              </a>
            </li>
            {/* Botón dentro del menú (mobile) */}
            <li className="mobile-volver">
              <a
                href="https://turismo.mercedes.gob.ar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ← Turismo Mercedes
              </a>
            </li>
          </ul>
        </nav>

        <div
          className={`menu-toggle ${menuAbierto ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="barra"></div>
          <div className="barra"></div>
          <div className="barra"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
