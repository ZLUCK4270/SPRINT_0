
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

const botonMostrar = document.getElementById("btn-mostrar");
const botonAgregar = document.getElementById("btn-agregar");

botonMostrar.addEventListener("click", renderMenu);
botonAgregar.addEventListener("click", agregarPlatoDemo);
