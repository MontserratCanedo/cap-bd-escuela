const materiaService = require('./services/materiasService'); //guardamos en una variable, los métodos exportados en alumnosServices
const calificacionService = require("./services/calificacionesService"); //guardamos en una variable, los métodos exportados en alumnosServices
const maestrosService = require('./services/maestrosService.js'); //guardamos en una variable, los métodos exportados en alumnosServices
const userService= require('./services/alumnosService.js');

const db = require('./utils/conexion'); //guardamos en una variable, la conexion a la BD


// Ejemplos de uso
const runExamples = async () => {
  try {
    // // Crear un nuevo usuario
    // const newUserId = await userService.createAlumno('Job',
    // 'Pen Dejo', 12345678910,'APROBADO',  );
    // console.log('Crear Alumno con ID:', newUserId);

    // Crear un nuevo usuario
    const nuevaMateria = await materiaService.createMateria('85', 'musica', '1');
    console.log('Nueva materia creada con el  ID:', nuevaMateria);

    // Obtener todos los usuarios
    const alumno = await userService.getAllAlumnos();
    console.log('Todos los alumnos:', alumno);
    const materias = await materiaService.getAllMaterias();
    console.log('todas las materias:', materias);

    // Obtener un usuario por ID
    const usaer =await userService.getAlumnoById(1);
    //const user = await  userService.getAlumnoById(newUserId);
    console.log('Usuario con ID', newUserId, ':', usaer);
    // Obtener un usuario por ID
    const materia = await materiaService.getMateriaById(nuevaMateria);
    console.log('materia con ID', materia);

    // Actualizar un usuario
    const newUserId2 = await userService.updateAlumno('Alan', 'Lopez', '45124512454', 'APROBADO', 464);
    console.log('Actualizar alumno:', newUserId2);
    // Actualizar un usuario
    const actualizarMateria = await materiaService.updateMateria('60', 'ivan');
    console.log('Materia actualizada con ID:', actualizarMateria.id_Materia);
    console.log(actualizarMateria.message);

    // Obtener el usuario actualizado
    await materiaService.getMateriaById(nuevaMateria);
    console.log('Materia actualizada con el  ID', actualizarMateria.id_Materia);

    // Eliminar un usuario
    const borrar = await materiaService.borrarMateria('77');
    console.log('Materia borrada con el ID:', borrar.id);
    console.log(borrar.message);

    // Verificar si el usuario fue eliminado
    const deletedmateria = await materiaService.getMateriaById(borrar.id);
    console.log('materia con  ID', borrar.id, 'after deletion:', deletedmateria);
    console.error('Error:', error.message);

    // Crear un nuevo
    const newCalificacionId = await calificacionService.createCalificacion("13.0");
    console.log("Calificaciones creadas con el ID: ", newCalificacionId);

    // Obtener todo
    const calificaciones = await calificacionService.getAllCalificaciones();
    console.log("Todas las calificaciones: ", calificaciones);

    // Obtener todos los por ID
    const calificaciones2 = await calificacionService.getCalificacionById(196);
    console.log("Calificaciones con el ID", ":", calificaciones2);

    // Actualizar un usuario
    await calificacionService.updateCalificacion(newCalificacionId, "8.0");
    console.log("Calificaciones actualizadas con el ID:", newCalificacionId);

    // Eliminar un usuario
    await calificacionService.deletedCalificacion(newCalificacionId);
    console.log("Calificaciones eliminadas con el ID:", newCalificacionId);
    const deletedCalificacion = await calificacionService.getCalificacionById(newCalificacionId);
    console.log("User with ID", newCalificacionId, "after deletion:", deletedCalificacion);
    
    // Crear un nuevo usuario
    const newMaestro = await maestrosService.createMaestro('Johny', 'Doe', 1, 1);
    console.log('Create maestro:', newMaestro);


    
    // Obtener todos los usuarios
     const maestros = await maestrosService.getAllMaestros();
    console.log('All maestros', maestros); 

     const maestrosByID = await maestrosService.getMaestrosById(1);
    console.log('Maestro con el ID', maestrosByID );
    
    // Actualizar un usuario
    await maestrosService.updateMaestro(9, 'Sandra', 'Lb');
    // Eliminar un usuario
    const deletedMaestro = await maestrosService.deleteMaestro(45);
    //Obtener el usuario actualizado
    const updatedUser = await userService.updateAlumno(newUserId2);
    console.log('Actualizar alumno con ID', newUserId2, ':', updatedUser);

    //Eliminar un usuario
    const borrarAlumno = await userService.deleteAlumno(1);
    console.log('Borrar Alumno  por ID:', newUserId, 'Affected rows:', borrarAlumno);
  
    //Verificar si el usuario fue eliminado
    const deletedUser = await userService.getAlumnoById(newUserId);
    console.log('Verificación de alumno eliminado', newUserId, 'after deletion:', deletedUser); // Debería ser null o undefined
  } catch (error) {
    console.error('Error:', error.message); //captura el error y lo muestra
  } finally {
    db.end(); // Cierra la conexión a la base de datos
  }
 }
};

runExamples();