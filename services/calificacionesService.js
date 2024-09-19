const db = require("../utils/conexion");

const createCalificacion = (calificacion) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO calificaciones (calificacion) VALUES (?)",
      [calificacion],
      (error, results) => {
        if (error) return reject(error);
        resolve(results.insertId);
      }
    );
  });
};

// Obtener todos los usuarios
const getAllCalificaciones = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM calificaciones", (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

// // Obtener un usuario por ID
const getCalificacionById = (id_calificaciones) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM calificaciones WHERE id_calificaciones = ?",
      [id_calificaciones],
      (error, results) => {
        if (error) return reject(error);
        if (results.length === 0) return resolve(null);
        resolve(results[0]);
      }
    );
  });
};

const updateCalificacion = (id_calificaciones, calificacion) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE calificaciones SET calificacion = ? WHERE id_calificaciones = ?",
      [calificacion, id_calificaciones],
      (error) => {
        if (error) return reject(error);
        resolve();
      }
    );
  });
};

const deletedCalificacion = (id_calificaciones) => {
  return new Promise((resolve, reject) => {
    db.query(
      "DELETE FROM calificaciones WHERE id_calificaciones = ?",
      [id_calificaciones],
      (error) => {
        if (error) return reject(error);
        resolve();
      }
    );
  });
};

module.exports = {
  // con esta sentencia, exportamos los mÃ©todos creados, para que se puedan usar en otras clases
  getAllCalificaciones,
  getCalificacionById,
  createCalificacion,
  updateCalificacion,
  deletedCalificacion,
};
