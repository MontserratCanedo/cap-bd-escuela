const db = require('../utils/conexion');

const createMaestro = (nombre, apellidos, id_calificaciones, id_materia) =>{
  return new Promise ((resolve, reject) => {
    db.query('INSERT INTO maestros (nombre, apellidos, id_calificaciones, id_materia) VALUES (?, ?, ?, ?)', [nombre, apellidos, id_calificaciones, id_materia], (error, results) => {
      if (error) return reject (error);
      resolve(results.insertId);
    });
  });
};

const getAllMaestros = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM maestros', (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getMaestrosById = (idMaestro) =>{
  return new Promise((resolve, reject) =>{
    db.query('SELECT * FROM maestros WHERE id_maestro = ?', [idMaestro], (error, results) => {
      if (error) return reject(error);
      if (results.length === 0) return resolve(null);
      resolve(results[0]);
    });
  });
};

const updateMaestro = (idMaestro, nombre, apellidos) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE maestros SET nombre = ?, apellidos = ? WHERE id_maestro = ?', [nombre, apellidos, idMaestro], (error) => {
      if (error) return reject(error);
      resolve();
    });
  });
};

const deleteMaestro = (idMaestro) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM maestros WHERE id_maestro = ?', [idMaestro], (error) =>{
      if (error) return reject(error);
      resolve();
    });
  });
};

module.exports = {
  createMaestro,
  getAllMaestros,
  getMaestrosById,
  updateMaestro,
  deleteMaestro
};