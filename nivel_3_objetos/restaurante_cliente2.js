let cliente = {
    nombre: "Cesar",
    dinero: 30,
    hambre: 60
};

function ordenarComida(cliente) {
    console.log(cliente.nombre + "ordena una hamburguesa");
    cliente.hambre -= 30;
    return 20;
}

function pagar(cliente, precio) {
    console.log(cliente.nombre + " paga $" + precio);
    cliente.dinero -= precio;
}

function mostrarEstado(cliente) {
    console.log("----- Estado del Cliente -----");
    console.log("Nombre: " + cliente.nombre);
    console.log("Dinero: $" + cliente.dinero);
    console.log("Hambre: " + cliente.hambre);
}

console.log("Bienvenido al restaurante");

mostrarEstado(cliente);

let precioComida = ordenarComida(cliente);

pagar(cliente, precioComida);

mostrarEstado(cliente);

console.log("Fin de la simulación");