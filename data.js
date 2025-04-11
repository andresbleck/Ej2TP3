let productos = [];

function obtenerProductos() {
  return productos;
}

function agregarProducto(producto) {
  productos.push(producto);
}

module.exports = {
  obtenerProductos,
  agregarProducto
};