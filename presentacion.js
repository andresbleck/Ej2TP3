// Capa de presentación
const express = require('express');
const app = express();
const negocio = require('./negocio');

app.use(express.json());

app.get('/productos', (req, res) => {
  const lista = negocio.listarProductos();
  res.json(lista);
});

app.post('/productos', (req, res) => {
  try {
    const { nombre, precio } = req.body;
    const producto = negocio.agregarProducto(nombre, precio);
    res.status(201).json(producto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});

server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
/*Venatajas: Mejor organizacion y separacion del codigo.Esto facilita la lectura y el mantenimiento del código.
Mejor escalabilidad y facilidad para reutilizar el codigo. Me ayuda a diferenciar bien cual es cada capa, por ahi en la monolitica se mezcla mucho*/ 