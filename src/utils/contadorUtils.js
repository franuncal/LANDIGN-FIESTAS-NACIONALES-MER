export const eventos = [
  {
    nombre: "Fiesta de la Torta Frita",
    fecha: "2025-05-10T00:00:00",
    rangoFechas: "10 y 11 de mayo",
    banner: "../assets/img-TF/TF5.webp",
  },
  {
    nombre: "Fiesta de la Torta Frita",
    fecha: "2026-05-16T00:00:00",
    rangoFechas: "16 y 17 de mayo",
    banner: "../assets/img-TF/TF5.webp",
  },
];

// Devuelve el próximo evento cuya fecha aún no ha pasado completamente
export function obtenerEventoActivo() {
  const ahora = new Date();

  const eventoActual = eventos[0]; // Evento de 2025
  const inicioFestejo = new Date("2025-05-10T00:00:00");
  const finFestejo = new Date("2025-05-12T00:00:00");

  // Si estamos dentro del rango del festejo 2025, devolvemos ese evento
  if (ahora >= inicioFestejo && ahora < finFestejo) {
    return eventoActual;
  }

  // Si no, buscamos el primer evento futuro como antes
  const proximoEvento = eventos.find(
    (e) => new Date(e.fecha).getTime() > ahora.getTime()
  );

  return proximoEvento || eventos[eventos.length - 1];
}

export function calcularTiempoRestante(fechaEvento) {
  const ahora = new Date();
  const diferencia = new Date(fechaEvento) - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  return { dias, horas, minutos, segundos };
}
