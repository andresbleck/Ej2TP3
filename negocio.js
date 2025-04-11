const datos = require('./data');

function listarProductos() {
  return datos.obtenerTodos();
}

function agregarProducto(nombre, precio) {
  if (!nombre || !precio) {
    throw new Error('Nombre y precio son requeridos');
  }
  return datos.crearProducto({ nombre, precio });
}

module.exports = { listarProductos, agregarProducto };