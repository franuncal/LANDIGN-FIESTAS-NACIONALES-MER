import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import VideoDestacado from "./components/VideoDestacado";
import Galeria from "./components/Galeria";
import ComoLlegar from "./components/ComoLlegar";
import Footer from "./components/Footer";

import { obtenerEventoActivo } from "./utils/contadorUtils";
import eventosData from "./data/eventos.json";

function App() {
  const [eventoActivo, setEventoActivo] = useState(null);

  const imagenesGaleria = [
    "/assets/img-TF/TF1.webp",
    "/assets/img-TF/TF2.webp",
    "/assets/img-TF/TF3.webp",
    "/assets/img-TF/TF4.webp",
    "/assets/img-TF/TF5.webp",
    "/assets/img-TF/TF6.webp",
    "/assets/img-TF/TF7.webp",
    "/assets/img-TF/TF8.webp",
    "/assets/img-TF/TF9.webp",
    "/assets/img-TF/TF10.webp",
    "/assets/img-TF/TF11.webp",
    "/assets/img-TF/TF12.webp",
    "/assets/img-TF/TF13.webp",
    "/assets/img-TF/TF14.webp",
    "/assets/img-TF/TF15.webp",
    "/assets/img-TF/TF16.webp",
    "/assets/img-TF/TF17.webp",
  ];

  useEffect(() => {
    const eventoOferta = obtenerEventoActivo();
    // combinamos contenido de la data local con el evento activo para tener imagen + historia
    setEventoActivo({ ...eventosData, ...eventoOferta });
  }, []);

  if (!eventoActivo)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold">Cargando evento...</p>
      </div>
    );

  return (
    <div className="app">
      <main>
        <Hero evento={eventoActivo} />
        <VideoDestacado />
        <Galeria imagenes={imagenesGaleria} />
        <ComoLlegar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
