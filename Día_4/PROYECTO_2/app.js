const menu = [
    { nombre: "Pizza Margarita", precio: 12.50, stock: 10 },
    { nombre: "Hamburguesa Clásica", precio: 8.50, stock: 15 },
    { nombre: "Ensalada César", precio: 7.00, stock: 8 },
    { nombre: "Pasta Carbonara", precio: 11.00, stock: 12 },
    { nombre: "Tacos de Pollo", precio: 9.50, stock: 20 }
];

function renderMenu() {
    const output = document.getElementById("output");
    let html = "<h2>Menú Actual</h2><ul>";
    
    for (let plato of menu) {
        html += `<li>${plato.nombre} - $${plato.precio} (Stock: ${plato.stock})</li>`;
    }
    
    html += "</ul>";
    output.innerHTML = html;
    
    contarPlatos();
}

function agregarPlatoDemo() {
    const nuevoPlato = {
        nombre: "Sushi Roll Especial",
        precio: 15.00,
        stock: 5
    };
    
    menu.push(nuevoPlato);
    renderMenu();
}

function contarPlatos() {
    const output = document.getElementById("output");
    const parrafoTotal = document.createElement("p");
    
    parrafoTotal.innerHTML = `<strong>Total de platos disponibles: ${menu.length}</strong>`;
    output.appendChild(parrafoTotal);
}

function renderLista(titulo, listaDeTextos) {
    const output = document.getElementById("output");
    let html = `<h2>${titulo}</h2><ul>`; 
    
    for (let texto of listaDeTextos) {
        html += `<li>${texto}</li>`;
    }
    html += "</ul>";
    
    output.innerHTML = html;
}

function buscarPlatoPorNombre(nombreBuscado) {
    const platoEncontrado = menu.find(plato => plato.nombre.toLowerCase() === nombreBuscado.toLowerCase());
    
    if (platoEncontrado) {
        const textoResult = `${platoEncontrado.nombre} - $${platoEncontrado.precio} (Stock: ${platoEncontrado.stock})`;
        renderLista(`Resultado de búsqueda: ${nombreBuscado}`, [textoResult]);
    } else {
        renderLista(`Resultado de búsqueda: ${nombreBuscado}`, ["No encontrado"]);
    }
}
function filtrarStockBajo() {
    const platosStockBajo = menu.filter(plato => plato.stock <= 3);
    
    if (platosStockBajo.length > 0) {
        const textos = platosStockBajo.map(plato => `${plato.nombre} (Stock: ${plato.stock})`);
        renderLista("Platos con Stock Bajo", textos);
    } else {
        renderLista("Platos con Stock Bajo", ["Todos los platos tienen un buen stock."]);
    }
}
function obtenerResumenMenu() {
    const resumen = menu.map(plato => `${plato.nombre} — S/ ${plato.precio}`);
    renderLista("Resumen del Menú", resumen);
}

function venderPlato(nombre, cantidad) {
    const plato = menu.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
    
    if (plato) {
        if (plato.stock >= cantidad) {
            plato.stock -= cantidad; 
            alert(`✅ Venta exitosa: ${cantidad} x ${plato.nombre}`);
            renderMenu(); 
        } else {
            alert(`❌ Stock insuficiente. Solo quedan ${plato.stock} de ${plato.nombre}.`);
        }
    } else {
        alert("❌ Plato no encontrado en el menú.");
    }
}

const botonMostrar = document.getElementById("btn-mostrar");
const botonAgregar = document.getElementById("btn-agregar");
botonMostrar.addEventListener("click", renderMenu);
botonAgregar.addEventListener("click", agregarPlatoDemo);

const inputBuscar = document.getElementById("inputBuscar");
const btnBuscar = document.getElementById("btnBuscar");
const btnStockBajo = document.getElementById("btnStockBajo");
const btnResumen = document.getElementById("btnResumen");
btnBuscar.addEventListener("click", () => {
    buscarPlatoPorNombre(inputBuscar.value);
});
btnStockBajo.addEventListener("click", filtrarStockBajo);
btnResumen.addEventListener("click", obtenerResumenMenu);
