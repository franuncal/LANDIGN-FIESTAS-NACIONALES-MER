export const eventos = [
  {
    nombre: "Fiesta de la Torta Frita",
    fecha: "2026-04-11T00:00:00",
    rangoFechas: "11 y 12 de abril",
    banner: "/assets/img-TF/TF5.webp",
  },
  {
    nombre: "Fiesta de la Torta Frita",
    fecha: "2027-04-09T00:00:00",
    rangoFechas: "9 y 10 de abril",
    banner: "/assets/img-TF/TF5.webp",
  },
];

// Devuelve el evento actual o el próximo evento
export function obtenerEventoActivo() {
  const ahora = new Date();

  // Evento en curso si estamos entre la fecha y la fecha +2 días
  const eventoEnCurso = eventos.find((evento) => {
    const inicio = new Date(evento.fecha);
    const fin = new Date(evento.fecha);
    fin.setDate(fin.getDate() + 2);
    return ahora >= inicio && ahora < fin;
  });

  if (eventoEnCurso) {
    return eventoEnCurso;
  }

  // Evento futuro más cercano
  const siguienteEvento = eventos.find(
    (evento) => new Date(evento.fecha) > ahora,
  );
  if (siguienteEvento) {
    return siguienteEvento;
  }

  // Si ya pasaron todos, devolver el último para mostrar mensaje de edición siguiente
  return eventos[eventos.length - 1];
}

export function calcularTiempoRestante(fechaEvento) {
  const ahora = new Date();
  const diferencia = new Date(fechaEvento) - ahora;

  if (diferencia <= 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  return { dias, horas, minutos, segundos };
}
