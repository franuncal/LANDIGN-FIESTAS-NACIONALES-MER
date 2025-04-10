// src/utils/contadorUtils.js

export function obtenerEventoActivo(eventos) {
  const ahora = new Date();
  return eventos.find((evento) => new Date(evento.fecha) > ahora);
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
