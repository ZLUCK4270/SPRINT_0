// OBJETO JUGADOR

let jugador = {
    nombre: "Gordon Freeman",
    vida: 100,
    fuerza: 20,
    nivel: 1
};

function atacar(jugador) {
    console.log(jugador.nombre + " ataca con fuerza " + jugador.fuerza);
    return jugador.fuerza;
}

function recibirDanio(jugador, danio) {
    console.log(jugador.nombre + " recibe " + danio + " de daño");
    jugador.vida -= danio;
}

function subirNivel(jugador) {
    jugador.nivel += 1;
    jugador.fuerza += 5;
    jugador.vida += 20;

    console.log(jugador.nombre + " sube al nivel " + jugador.nivel);
}

function mostrarEstado(jugador) {
    console.log("----- ESTADO DEL JUGADOR -----");
    console.log("Nombre: " + jugador.nombre);
    console.log("Vida: " + jugador.vida);
    console.log("Fuerza: " + jugador.fuerza);
    console.log("Nivel: " + jugador.nivel);
}

console.log("Comienza la aventura");

mostrarEstado(jugador);

let danio = atacar(jugador);

recibirDanio(jugador, 15);

mostrarEstado(jugador);

subirNivel(jugador);

mostrarEstado(jugador);

console.log("Fin de la simulación");