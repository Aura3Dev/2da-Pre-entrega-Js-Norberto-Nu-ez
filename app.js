
const creditos = [];


const requisitos = {
    puntajeMinimo: 6,
    ingresosMinimos: 350000
};


function verificarPuntaje(puntaje) {
    return puntaje >= requisitos.puntajeMinimo;
}


function verificarIngresos(ingresos) {
    return ingresos >= requisitos.ingresosMinimos;
}


function procesarSolicitud(nombre, puntaje, ingresos) {
    const esElegible = verificarPuntaje(puntaje) && verificarIngresos(ingresos);
    const resultado = {
        nombre: nombre,
        puntaje: puntaje,
        ingresos: ingresos,
        elegible: esElegible
    };

    creditos.push(resultado);

    return esElegible
        ? `${nombre}, felicidades, eres elegible para un crédito. `
        : `${nombre}, lo siento, no cumples con los requisitos para el crédito. `;
}


function buscarSolicitudesElegibles() {
    return creditos.filter(solicitud => solicitud.elegible);
}


function solicitarInformacion() {
    const nombre = prompt("Ingrese su nombre:");
    const puntaje = parseInt(prompt("Ingrese su puntaje crediticio:"));
    const ingresos = parseInt(prompt("Ingrese sus ingresos mensuales:"));

    return { nombre, puntaje, ingresos };
}


const numSolicitudes = parseInt(prompt("Ingrese el número de solicitudes a procesar:"));

for (let i = 0; i < numSolicitudes; i++) {
    const solicitud = solicitarInformacion();
    const resultado = procesarSolicitud(solicitud.nombre, solicitud.puntaje, solicitud.ingresos);
    document.write(resultado);
}


document.write("Información de todas las solicitudes:<br>");

creditos.forEach((solicitud, index) => {
    document.write(`<strong>Solicitud ${index + 1}:</strong><br>`);
    document.write(`Nombre: ${solicitud.nombre}<br>`);
    document.write(`Puntaje Crediticio: ${solicitud.puntaje}<br>`);
    document.write(`Ingresos Mensuales: ${solicitud.ingresos}<br>`);
    document.write(`Elegible: ${solicitud.elegible ? 'Sí' : 'No'}<br><br>`);
});

Imprimir solicitudes elegibles
document.write("Solicitudes Elegibles:<br>");

const solicitudesElegibles = buscarSolicitudesElegibles();

solicitudesElegibles.forEach((solicitud, index) => {
    document.write(`<strong>Solicitud Elegible ${index + 1}:</strong><br>`);
    document.write(`Nombre: ${solicitud.nombre}<br>`);
    document.write(`Puntaje Crediticio: ${solicitud.puntaje}<br>`);
    document.write(`Ingresos Mensuales: ${solicitud.ingresos}<br><br>`);
});
