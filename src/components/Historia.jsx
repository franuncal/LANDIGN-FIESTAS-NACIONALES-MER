// import React from "react";
// import "./Historia.css";

// const Historia = ({ historia }) => {
//   return (
//     <section
//       id="historia"
//       className="historia"
//       style={{
//         backgroundColor: historia.colorSecundario,
//       }}
//     >
//       <div className="historia-texto">
//         <h2 className="historia-titulo">
//           <span class="resaltado">Nuestra</span> Historia
//         </h2>
//         <p className="historia-descripcion">{historia.descripcion}</p>
//       </div>
//       <div className="historia-imagen-contenedor">
//         <img
//           src={historia.imagen}
//           alt="Historia de la Fiesta"
//           className="historia-imagen"
//         />
//       </div>
//     </section>
//   );
// };

// export default Historia;

import React from "react";
import "./Historia.css";

const Historia = ({ historia }) => {
  return (
    <section
      id="historia"
      className="historia"
      style={{
        backgroundColor: historia.colorSecundario,
      }}
    >
      <div className="historia-texto">
        <h2 className="historia-titulo">
          <span className="resaltado">Nuestra</span> Historia
        </h2>
        <p className="historia-descripcion">{historia.descripcion}</p>
      </div>

      <div className="historia-imagen-contenedor">
        {historia.video ? (
          <iframe
            className="historia-video"
            src={historia.video}
            title="Video historia"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src={historia.imagen}
            alt="Historia de la Fiesta"
            className="historia-imagen"
          />
        )}
      </div>
    </section>
  );
};

export default Historia;
