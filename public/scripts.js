
const productos = [
  { id: 1, nombre: "Remera Oversize", precio: 8000 },
  { id: 2, nombre: "Jogger Premium", precio: 12000 },
  { id: 3, nombre: "Accesorio Neon", precio: 3500 },
  { id: 4, nombre: "Buzo Negro", precio: 14000 }
];

const carrito = [];

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  if (producto) {
    carrito.push(producto);
    renderCarrito();
  }
}

function renderCarrito() {
  const contenedor = document.getElementById("carrito");
  contenedor.innerHTML = carrito.map(p => `<li>${p.nombre} - $${p.precio}</li>`).join("");
}

function enviarPedido() {
  fetch("/api/pedido", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ carrito })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.mensaje);
    carrito.length = 0;
    renderCarrito();
  });
}
