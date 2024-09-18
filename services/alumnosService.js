const db = require('../utils/conexion');

/*** EN ESTA CLASE SE GUARDAN TODOS LOS MÉTODOS CRUD, QUE REALIZAN LA CONSULTA A LA BD ***/

// // Crear un nuevo usuario
// const createUser = (name, email) => {
//   return new Promise((resolve, reject) => {
//     db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (error, results) => {
//       if (error) return reject(error);
//       resolve(results.insertId);
//     });
//   });
// };

// Obtener todos los usuarios
const getAllClients = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM cliente', (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

// // Obtener un usuario por ID
// const getUserById = (id) => {
//   return new Promise((resolve, reject) => {
//     db.query('SELECT * FROM users WHERE id = ?', [id], (error, results) => {
//       if (error) return reject(error);
//       if (results.length === 0) return resolve(null);
//       resolve(results[0]);
//     });
//   });
// };

// // Actualizar un usuario existente
// const updateUser = (id, name, email) => {
//   return new Promise((resolve, reject) => {
//     db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id], (error) => {
//       if (error) return reject(error);
//       resolve();
//     });
//   });
// };

// // Eliminar un usuario
// const deleteUser = (id) => {
//   return new Promise((resolve, reject) => {
//     db.query('DELETE FROM users WHERE id = ?', [id], (error) => {
//       if (error) return reject(error);
//       resolve();
//     });
//   });
// };

module.exports = { // con esta sentencia, exportamos los métodos creados, para que se puedan usar en otras clases
  getAllClients
};