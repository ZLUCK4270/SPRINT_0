let energiaDeadpool = 90;
let energiaSpiderman = 100;

function ataque(atacante, defensor, nivelAtaque) {
    console.log(atacante + " ataca a " + defensor + " con poder " + nivelAtaque);
    return nivelAtaque;
}

function defender(defensor, nivelDefensa) {
    console.log(defensor + " se defiende bloqueando " + nivelDefensa + " de daño");
    return nivelDefensa;
}

function recargarEnergia(heroe, cantidad) {
    console.log(heroe + " recarga " + cantidad + " de energía.");
    return cantidad;
}

function superAtaque() {
    console.log("Deadpool usa su Super Ataque: ¡Lluvia de Chimichangas Explosivas!");
    return 50;
}

function escudoMagico() {
    console.log("Spiderman usa su Escudo de Telaraña Reforzada");
    return 30;
}

console.log("¡Comienza la batalla entre Deadpool y Spiderman! ");

let dano = ataque("Deadpool", "Spiderman", 20);
let bloqueo = defender("Spiderman", 10);
energiaSpiderman -= (dano - bloqueo);
console.log("Energía de Spiderman: " + energiaSpiderman);

let danoSuper = superAtaque();
let bloqueoEscudo = escudoMagico();
energiaSpiderman -= (danoSuper - bloqueoEscudo);
console.log("Energía de Spiderman tras el super ataque: " + energiaSpiderman);

dano = ataque("Spiderman", "Deadpool", 25);
bloqueo = defender("Deadpool", 5);
energiaDeadpool -= (dano - bloqueo);
console.log("Energía de Deadpool: " + energiaDeadpool);

let energiaRecuperada = recargarEnergia("Deadpool", 10);
energiaDeadpool += energiaRecuperada;
console.log("Energía de Deadpool final: " + energiaDeadpool);

console.log("La batalla termina por ahora...");