# Aplicación de Gestión de Productos

Esta aplicación permite **listar** y **agregar productos** utilizando Node.js y Express, aplicando una arquitectura por capas.

## 🧱 Estructura por capas

### 1. Capa de presentación (routes/controller)
- Archivo: `presentation/productController.js`
- Se encarga de manejar las rutas (`/products`) y responder a las peticiones HTTP.
  
### 2. Capa de lógica de negocio (service)
- Archivo: `business/productService.js`
- Contiene la lógica como validaciones y coordinación entre rutas y la capa de datos.

### 3. Capa de acceso a datos (repository)
- Archivo: `data/productRepository.js`
- Maneja la "base de datos" en memoria, simulando persistencia de productos.
