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
        <a href="#inicio" className="logo">
          <img
            src="../assets/Logos/logom1.png"
            alt="Fiesta de la Torta Frita"
            className="logo-imagen"
          />
        </a>

        <nav className={`nav ${menuAbierto ? "activo" : ""}`}>
          <ul className="nav-list">
            <li>
              <a href="#inicio" onClick={cerrarMenu}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#historia" onClick={cerrarMenu}>
                Historia
              </a>
            </li>
            <li>
              <a href="#eventos" onClick={cerrarMenu}>
                Eventos
              </a>
            </li>
            <li>
              <a href="#comollegar" onClick={cerrarMenu}>
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
