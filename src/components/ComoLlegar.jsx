// import React, { useState, useRef } from "react";
// import { FaCar, FaTrain, FaBus, FaTicketAlt, FaTimes } from "react-icons/fa";
// import "./ComoLlegar.css";

// const ComoLlegar = () => {
//   const [pdfSeleccionado, setPdfSeleccionado] = useState("");
//   const [transporteSeleccionado, setTransporteSeleccionado] = useState("");

//   const visorRef = useRef(null);
//   const cardsRef = useRef(null);

//   const pdfsDisponibles = {
//     auto: [{ nombre: "Ruta Nacional 5", url: "/pdfs/auto.pdf" }],
//     tren: [
//       { nombre: "Línea Sarmiento Mercedes-Moreno", url: "/pdfs/trenes.pdf" },
//       { nombre: "Línea Sarmiento Moreno-Mercedes", url: "/pdfs/trenes2.pdf" },
//     ],
//     colectivo: [
//       { nombre: "Atlantida 57", url: "/pdfs/atlantida57.pdf" },
//       { nombre: "Chevalier", url: "/pdfs/chevalier.pdf" },
//       { nombre: "Master Bus", url: "/pdfs/masterbus.pdf" },
//       { nombre: "TALP", url: "/pdfs/talp.pdf" },
//     ],
//     urbanos: [
//       { nombre: "Urbano Línea 1", url: "/pdfs/urbano1.pdf" },
//       { nombre: "Urbano Línea 2 - Ramal A", url: "/pdfs/urbano2.pdf" },
//       { nombre: "Urbano Línea 2 - Ramal B", url: "/pdfs/urbano2b.pdf" },
//     ],
//   };

//   const mostrarPDF = (tipo) => {
//     setTransporteSeleccionado(tipo);
//     setPdfSeleccionado(pdfsDisponibles[tipo][0].url);

//     setTimeout(() => {
//       visorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//     }, 100);
//   };

//   const cerrarPDF = () => {
//     setPdfSeleccionado("");
//     setTransporteSeleccionado("");

//     setTimeout(() => {
//       cardsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//     }, 100);
//   };

//   return (
//     <section id="como-llegar" className="como-llegar">
//       <div className="como-llegar-contenedor">
//         <h2 className="como-llegar-titulo">
//           ¿Cómo <span className="resaltado">llegar?</span>
//         </h2>

//         <p className="como-llegar-texto">
//           La Fiesta Nacional se realiza en el Parque Municipal Independencia de
//           la ciudad de Mercedes, Buenos Aires. ¡Te esperamos!
//         </p>

//         {/* Opciones de Transporte - Grid 2x2 en desktop */}
//         <div className="transporte-opciones" ref={cardsRef}>
//           <div className="transporte-card">
//             <FaCar className="transporte-icono" />
//             <button
//               className="boton-ver-mas"
//               onClick={() => mostrarPDF("auto")}
//             >
//               En Auto
//             </button>
//           </div>

//           <div className="transporte-card">
//             <FaTrain className="transporte-icono" />
//             <button
//               className="boton-ver-mas"
//               onClick={() => mostrarPDF("tren")}
//             >
//               En Tren
//             </button>
//           </div>

//           <div className="transporte-card">
//             <FaBus className="transporte-icono" />
//             <button
//               className="boton-ver-mas"
//               onClick={() => mostrarPDF("colectivo")}
//             >
//               En Colectivo
//             </button>
//           </div>

//           <div className="transporte-card">
//             <FaBus className="transporte-icono" />
//             <button
//               className="boton-ver-mas"
//               onClick={() => mostrarPDF("urbanos")}
//             >
//               Urbanos
//             </button>
//           </div>
//         </div>

//         {/* Visor PDF */}
//         {pdfSeleccionado && (
//           <div ref={visorRef} className="visor-pdf">
//             <button className="boton-cerrar" onClick={cerrarPDF}>
//               <FaTimes />
//             </button>
//             <h3 className="titulo-pdf">Información detallada</h3>
//             <div className="pdf-botones">
//               {pdfsDisponibles[transporteSeleccionado].map((pdf, idx) => (
//                 <button
//                   key={idx}
//                   className="boton-pdf"
//                   onClick={() => setPdfSeleccionado(pdf.url)}
//                 >
//                   {pdf.nombre}
//                 </button>
//               ))}
//             </div>
//             <iframe
//               src={`${pdfSeleccionado}#toolbar=0&navpanes=0&scrollbar=0`}
//               title="PDF de transporte"
//             ></iframe>
//           </div>
//         )}

//         {/* Mapa - Google Maps */}
//         <div className="como-llegar-mapa">
//           <iframe
//             title="Mapa Fiesta Nacional Mercedes"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.879637065421!2d-59.435664326894795!3d-34.63248182926947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc74825d7f6ce9%3A0x3e0edc369abfa2cb!2sParque%20Municipal%20Independencia!5e0!3m2!1ses!2sar!4v1744079008380!5m2!1ses!2sar"
//             width="100%"
//             height="400"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ComoLlegar;

import React, { useState, useRef, useEffect } from "react";
import { FaCar, FaTrain, FaBus, FaTimes } from "react-icons/fa";
import "./ComoLlegar.css";

const ComoLlegar = () => {
  const [pdfSeleccionado, setPdfSeleccionado] = useState("");
  const [transporteSeleccionado, setTransporteSeleccionado] = useState("");
  const [esMobile, setEsMobile] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);

  const visorRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const manejarResize = () => {
      setEsMobile(window.innerWidth < 768);
    };
    manejarResize();
    window.addEventListener("resize", manejarResize);
    return () => window.removeEventListener("resize", manejarResize);
  }, []);

  const pdfsDisponibles = {
    auto: [{ nombre: "Ruta Nacional 5", url: "/pdfs/auto.pdf" }],
    tren: [
      { nombre: "Línea Sarmiento Mercedes-Moreno", url: "/pdfs/trenes.pdf" },
      { nombre: "Línea Sarmiento Moreno-Mercedes", url: "/pdfs/trenes2.pdf" },
    ],
    colectivo: [
      { nombre: "Atlantida 57", url: "/pdfs/atlantida57.pdf" },
      { nombre: "Chevalier", url: "/pdfs/chevalier.pdf" },
      { nombre: "Master Bus", url: "/pdfs/masterbus.pdf" },
      { nombre: "TALP", url: "/pdfs/talp.pdf" },
    ],
    urbanos: [
      { nombre: "Urbano Línea 1", url: "/pdfs/urbano1.pdf" },
      { nombre: "Urbano Línea 2 - Ramal A", url: "/pdfs/urbano2.pdf" },
      { nombre: "Urbano Línea 2 - Ramal B", url: "/pdfs/urbano2b.pdf" },
    ],
  };

  const mostrarPDF = (tipo) => {
    setTransporteSeleccionado(tipo);
    setPdfSeleccionado(pdfsDisponibles[tipo][0].url);
    if (esMobile) {
      setMostrarModal(true);
    } else {
      setTimeout(() => {
        visorRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  const cerrarPDF = () => {
    setPdfSeleccionado("");
    setTransporteSeleccionado("");
    setMostrarModal(false);
    setTimeout(() => {
      cardsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <section id="como-llegar" className="como-llegar">
      <div className="como-llegar-contenedor">
        <h2 className="como-llegar-titulo">
          ¿Cómo <span className="resaltado">llegar?</span>
        </h2>

        <p className="como-llegar-texto">
          La Fiesta Nacional se realiza en el Parque Municipal Independencia de
          la ciudad de Mercedes, Buenos Aires. ¡Te esperamos!
        </p>

        <div className="transporte-opciones" ref={cardsRef}>
          {["auto", "tren", "colectivo", "urbanos"].map((tipo, index) => (
            <div className="transporte-card" key={index}>
              {tipo === "auto" && <FaCar className="transporte-icono" />}
              {tipo === "tren" && <FaTrain className="transporte-icono" />}
              {tipo === "colectivo" && <FaBus className="transporte-icono" />}
              {tipo === "urbanos" && <FaBus className="transporte-icono" />}
              <button
                className="boton-ver-mas"
                onClick={() => mostrarPDF(tipo)}
              >
                {tipo === "urbanos"
                  ? "Urbanos"
                  : `En ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`}
              </button>
            </div>
          ))}
        </div>

        {/* Visor PDF (solo en desktop) */}
        {pdfSeleccionado && !esMobile && (
          <div ref={visorRef} className="visor-pdf">
            <button className="boton-cerrar" onClick={cerrarPDF}>
              <FaTimes />
            </button>
            <h3 className="titulo-pdf">Información detallada</h3>
            <div className="pdf-botones">
              {pdfsDisponibles[transporteSeleccionado].map((pdf, idx) => (
                <button
                  key={idx}
                  className="boton-pdf"
                  onClick={() => setPdfSeleccionado(pdf.url)}
                >
                  {pdf.nombre}
                </button>
              ))}
            </div>
            <div className="iframe-wrapper">
              <iframe
                src={`${pdfSeleccionado}#toolbar=0&navpanes=0&scrollbar=0`}
                title="PDF transporte"
              ></iframe>
            </div>
          </div>
        )}

        {/* Modal PDF (solo en mobile) */}
        {esMobile && mostrarModal && (
          <div className="modal-overlay">
            <div className="modal-contenido">
              <button className="boton-cerrar" onClick={cerrarPDF}>
                <FaTimes />
              </button>
              <h3 className="titulo-pdf">Información detallada</h3>
              <div className="pdf-botones">
                {pdfsDisponibles[transporteSeleccionado].map((pdf, idx) => (
                  <button
                    key={idx}
                    className="boton-pdf"
                    onClick={() => setPdfSeleccionado(pdf.url)}
                  >
                    {pdf.nombre}
                  </button>
                ))}
              </div>
              <iframe
                src={`${pdfSeleccionado}#toolbar=0&navpanes=0&scrollbar=0`}
                title="PDF transporte mobile"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ComoLlegar;
