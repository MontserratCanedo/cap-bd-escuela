const db = require('../utils/conexion');

/*** EN ESTA CLASE SE GUARDAN TODOS LOS MÉTODOS CRUD, QUE REALIZAN LA CONSULTA A LA BD ***/

// Crear un nuevo usuario
const createMateria = (id_Materia, Nombre_Materia, id_calificaciones) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO `materia` (id_Materia,Nombre_Materia,Id_calificaciones) VALUES (?, ?, ?)', [id_Materia, Nombre_Materia, id_calificaciones], (error, results) => {
      if (error) return reject(error);
      resolve(results.insertId);
    });
  });
};

// Obtener todos los usuarios
const getAllMaterias = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM `materia`', (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

// Obtener un usuario por ID
const getMateriaById = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM   `materia` WHERE id_Materia = ?', [id], (error, results) => {
      if (error) return reject(error);
      if (results.length === 0) return resolve(null);
      resolve(results[0]);
    });
  });
};

// Actualizar un usuario existente
const updateMateria = (id_Materia, Nombre_Materia) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE `materia` SET Nombre_Materia = ? WHERE id_Materia = ?', [Nombre_Materia, id_Materia], (error) => {
      if (error) return reject(error);
      resolve({ message: 'Materia actualizada con éxito', id_Materia });
    });
  });
};


// Eliminar un usuario
const borrarMateria = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM `materia` WHERE id_Materia = ?', [id], (error) => {
      if (error) return reject(error);
      // Resuelve la promesa pasando el ID de la materia borrada
      resolve({ message: 'Materia borrada con éxito', id });
    });
  });
};


module.exports = { // con esta sentencia, exportamos los métodos creados, para que se puedan usar en otras clases
  getAllMaterias,
  createMateria,
  borrarMateria,
  getMateriaById,
  updateMateria
};