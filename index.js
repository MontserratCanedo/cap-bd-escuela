const calificacionService = require("./services/calificacionesService"); //guardamos en una variable, los métodos exportados en alumnosServices
const maestrosService = require('./services/maestrosService.js'); //guardamos en una variable, los métodos exportados en alumnosServices
const db = require('./utils/conexion'); //guardamos en una variable, la conexion a la BD

// Ejemplos de uso
const runExamples = async () => {
  try {
    // // Crear un nuevo
    const newCalificacionId = await calificacionService.createCalificacion(
      "13.0"
    );
    console.log("Calificaciones creadas con el ID: ", newCalificacionId);

    // Obtener todo
    const calificaciones = await calificacionService.getAllCalificaciones();
    console.log("Todas las calificaciones: ", calificaciones);

    // Obtener todos los por ID
    const calificaciones2 = await calificacionService.getCalificacionById(196);
    console.log("Calificaciones con el ID", ":", calificaciones2);

    // // Actualizar un usuario
    await calificacionService.updateCalificacion(newCalificacionId, "8.0");
    console.log("Calificaciones actualizadas con el ID:", newCalificacionId);

    // // Eliminar un usuario
    await calificacionService.deletedCalificacion(newCalificacionId);
    console.log("Calificaciones eliminadas con el ID:", newCalificacionId);
    const deletedCalificacion = await calificacionService.getCalificacionById(
      newCalificacionId
    );
    console.log(
      "User with ID",
      newCalificacionId,
      "after deletion:",
      deletedCalificacion
    );
    // // Crear un nuevo usuario
    const newMaestro = await maestrosService.createMaestro('John', 'Doe', 1, 1);
    console.log('Create maestro:', newMaestro);

    // Obtener todos los usuarios
     const maestros = await maestrosService.getAllMaestros();
    console.log('All maestros', maestros); 

     const maestrosByID = await maestrosService.getMaestrosById(1);
    console.log('Maestro con el ID', maestrosByID );
    
    // Actualizar un usuario
    await maestrosService.updateMaestro(9, 'Sandra', 'Lb');
    // // Eliminar un usuario
    const deletedMaestro = await maestrosService.deleteMaestro(45);

  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    db.end();
  }
};

runExamples();