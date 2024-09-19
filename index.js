const userService = require('./services/alumnosService'); //guardamos en una variable, los métodos exportados en alumnosServices
const db = require('./utils/conexion'); //guardamos en una variable, la conexion a la BD

// Ejemplos de uso
const runExamples = async () => {
  try {
    // Crear un nuevo usuario
    const newUserId = await userService.createAlumno('Rosalba' );
    console.log('Crear Alumno con ID:', newUserId);

    // Obtener todos los usuarios
    const alumno = await userService.getAllAlumnos();
    console.log('Todos los alumnos:', alumno);

    // Obtener un usuario por ID
    const usaer =await userService.getAlumnoById(1);
    //const user = await  userService.getAlumnoById(newUserId);
    console.log('Usuario con ID', newUserId, ':', usaer);

    // Actualizar un usuario
    const newUserId2 = await userService.updateAlumno('Alan', 'Lopez', '45124512454', 'APROBADO', 464);
    console.log('Actualizar alumno:', newUserId2);

    //Obtener el usuario actualizado
    const updatedUser = await userService.updateAlumno(newUserId2);
    console.log('Actualizar alumno con ID', newUserId2, ':', updatedUser);

    //Eliminar un usuario
    const borrar = await userService.deleteAlumno(1);
    console.log('Borrar Alumno  por ID:', newUserId, 'Affected rows:', borrar);
  
    //Verificar si el usuario fue eliminado
    const deletedUser = await userService.getAlumnoById(newUserId);
    console.log('Verificación de alumno eliminado', newUserId, 'after deletion:', deletedUser); // Debería ser null o undefined
  } catch (error) {
    console.error('Error:', error.message); //captura el error y lo muestra
  } finally {
    db.end(); // Cierra la conexión a la base de datos
  }
};

runExamples();