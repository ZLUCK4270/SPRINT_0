let cliente = {
    nombre: "Rodolfo",
    dinero: 500,
    hambre: 100
};

function ordenarComida(cliente) {
    console.log(`${cliente.nombre} está ordenando comida...`);
    if (cliente.hambre >= 20) {
        cliente.hambre -= 30;
        console.log(`¡Comida deliciosa! El hambre de ${cliente.nombre} ha disminuido a ${cliente.hambre}.`);
    } else {
        console.log(`${cliente.nombre} ya no tiene mucha hambre.`);
    }
}

function pagar(cliente) {
    let costoComida = 15;
    console.log(`${cliente.nombre} intenta pagar la cuenta de $${costoComida}...`);
    if (cliente.dinero >= costoComida) {
        cliente.dinero -= costoComida;{}
        console.log(`Pago realizado con éxito. ${cliente.nombre} ahora tiene $${cliente.dinero} en su cartera.`);
    } else {
        console.log(`¡Oh no! ${cliente.nombre} no tiene suficiente dinero para pagar la cuenta.`);
    }
}

function mostrarEstado(cliente) {
    console.log(`\n=== Estado de ${cliente.nombre} ===`);
    console.log(`💸 Dinero: $${cliente.dinero}`);
    console.log(`🍔 Hambre: ${cliente.hambre}`);
    console.log(`=========================`);
}

mostrarEstado(cliente);

console.log("\n--- Acción: Ordenar Comida ---");
ordenarComida(cliente);

console.log("\n--- Acción: Pagar ---");
pagar(cliente);

mostrarEstado(cliente);
