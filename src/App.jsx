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
    "/assets/img-TF/TF1.JPG",
    "/assets/img-TF/TF2.JPG",
    "/assets/img-TF/TF3.JPG",
    "/assets/img-TF/TF4.JPG",
    "/assets/img-TF/TF5.JPG",
    "/assets/img-TF/TF6.JPG",
    "/assets/img-TF/TF7.JPG",
    "/assets/img-TF/TF8.JPG",
    "/assets/img-TF/TF9.JPG",
    "/assets/img-TF/TF10.JPG",
    "/assets/img-TF/TF11.JPG",
    "/assets/img-TF/TF12.JPG",
    "/assets/img-TF/TF13.JPG",
    "/assets/img-TF/TF14.JPG",
    "/assets/img-TF/TF15.JPG",
    "/assets/img-TF/TF16.JPG",
    "/assets/img-TF/TF17.JPG",
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
