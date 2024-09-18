

const db = require('../utils/conexion');

/*** EN ESTA CLASE SE GUARDAN TODOS LOS MÉTODOS CRUD, QUE REALIZAN LA CONSULTA A LA BD ***/

// // Crear un nuevo usuario
// const createAlumno = (nombre,apellidos,telefono, status,id_materia) => { // aqui tambien mando id_materia?
//   return new Promise((resolve, reject) => {
//     db.query('INSERT INTO alumno (nombre,apellidos,telefono, status, id_materia) VALUES (?, ?, ?, ?, ?)',
//       [nombre,apellidos,telefono, status, id_materia], ('5', 'Adriana', 'Gonzalez', '55135207411', 'APROBADO', '5')  => {
//       if (error) return reject(error);
//       resolve(results.insertId);
//     });
//   });
// };


const createAlumno = (nombre, apellidos, telefono, status, id_materia) => {
  return new Promise((resolve, reject) => {
    // Se pasan los parámetros a la consulta
    db.query('INSERT INTO alumno (nombre, apellidos, telefono, status, id_Materia) VALUES (?, ?, ?, ?, ?)',
      [nombre, apellidos, telefono, status, id_materia], // Aquí se agregan los valores
      (error, results) => {
        if (error) return reject(error);
        resolve(results.insertId); // Devuelve el ID del nuevo registro
      });
  });
};


// Obtener todos los usuarios
const getAllAlumnos = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM alumno', (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};




// Obtener un usuario por ID-------------------------------------------------
const getAlumnoById = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM alumno WHERE id_alumno = ?', [id], (error, results) => {
      if (error) return reject(error);
      if (results.length === 0) return resolve(null);
      resolve(results[0]);
    });
  });
};

// // Actualizar un usuario existente
// const updateAlumno = (id,nombre,apellidos, telefono, status,id_materia) => {
//   return new Promise((resolve, reject) => {
//     db.query('UPDATE alumno SET id_alumno = ?, nombre = ?, apellidos = ?, telefono = ?, status ?, id_materia, WHERE id = ?', 
//       [id,nombre,apellidos, telefono, status,id_materia], (error) => {
//       if (error) return reject(error);
//       resolve();
//     });
//   });
// };


// Actualizar un usuario existente
const updateAlumno = (id, nombre, apellidos, telefono, status, id_materia) => {
  return new Promise((resolve, reject) => {
    db.query(
      'UPDATE alumno SET nombre = ?, apellidos = ?, telefono = ?, status = ?, id_materia = ? WHERE id_alumno = ?',
      [nombre, apellidos, telefono, status, id_materia, id],
      (error, results) => {
        if (error) return reject(error);
        resolve(results.affectedRows); // Devuelve el número de filas afectadas
      }
    );
  });
};



// Eliminar un usuario
const deleteAlumno = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM alumno WHERE id = ?', [id], (error) => {
      if (error) return reject(error);
      resolve();
    });
  });
};

module.exports = { // con esta sentencia, exportamos los métodos creados, para que se puedan usar en otras clases
  getAllAlumnos,
  createAlumno,
  getAlumnoById,
  updateAlumno,
  
  deleteAlumno,
};