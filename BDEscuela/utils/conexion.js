// database.js
const mysql = require('mysql2/promise');

// Crea una conexión a la base de datos
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'yourdatabase',
});

module.exports = pool;