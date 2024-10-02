const express = require('express');
const app = express();
const path = require('path');
const materiaRoutes = require('./Routes/Materias');

// Middleware para manejar JSON
app.use(express.json());

// Servir archivos estáticos (como HTML, CSS, JS) desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Monta las rutas de materias
app.use(materiaRoutes);

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});

