import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Historia from "./components/Historia";
import Cronograma from "./components/Cronograma";
import Galeria from "./components/Galeria";
import ComoLlegar from "./components/ComoLlegar";
import Hospedaje from "./components/Hospedaje";
import Footer from "./components/Footer";
// import WhatsappButton from "./components/WhatsappButton";
import { obtenerEventoActivo } from "./utils/contadorUtils";
import eventosData from "./data/eventos.json";
import hospedajesData from "./data/hospedajes.json";
import noticiasData from "./data/noticias.json";
import Noticias from "./components/Noticias";

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
    const evento = obtenerEventoActivo(eventosData);
    setEventoActivo(evento);
  }, []);

  if (!eventoActivo)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold">Cargando evento...</p>
      </div>
    );

  return (
    <div>
      <Header evento={eventoActivo} />
      <main>
        <Hero evento={eventoActivo} />
        <Historia historia={eventoActivo.historia} />
        <Cronograma actividades={eventoActivo.actividades} />
        <Galeria imagenes={imagenesGaleria} />
        <Noticias noticias={noticiasData} />
        <ComoLlegar />
        <Hospedaje hospedajes={hospedajesData} />
      </main>
      <Footer />
      {/* <WhatsappButton /> */}
    </div>
  );
}

export default App;
