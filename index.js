const userService = require('./services/alumnosService'); //guardamos en una variable, los métodos exportados en alumnosServices
const db = require('./utils/conexion'); //guardamos en una variable, la conexion a la BD



// Ejemplos de uso

const runExamples = async () => {
  try {
    // // Crear un nuevo usuario
    const newUserId = await userService.createAlumno('Ferchito' );
    // console.log('Crear usuario con ID:', newUserId);

    // // // Obtener todos los usuarios
    // const alumno = await userService.getAllAlumnos();
    // console.log('Todos los alumnos:', alumno);

    // // Obtener un usuario por ID
    // const usaer =await userService.getAlumnoById(1);
    // //const user = await  userService.getAlumnoById(newUserId);
    // console.log('Usuario con ID', newUserId, ':', usaer);

    // // Actualizar un usuario
    //  const actualizar = await  await userService.updateAlumno(newUserId, 'Gabrie', 'Lopez', '45124512454', 'APROBADO', '4');
    // console.log('Updated user with ID:', newUserId);


    // const actualizar = await userService.updateAlumno(276, 'Gabrie', 'Lopez', '45124512454', 'APROBADO', '4');
    // console.log('Updated user with ID:', newUserId);

    // // // Obtener el usuario actualizado
    // const updatedUser = await userService.updateAlumno(newUserId);
    // console.log('Updated user with ID', newUserId, ':', updatedUser);

    // // // // // Eliminar un usuario
    // // // const borrar = await userService.deleteAlumno()
    // // // console.log('Deleted user with ID:', newUserId ':', borrar);

    // // // // // Verificar si el usuario fue eliminado
    // // // const deletedUser = await getUserById(newUserId);
    // // // console.log('User with ID', newUserId, 'after deletion:', deletedUser);

      // Eliminar un usuario
      const borrar = await userService.deleteAlumno(newUserId);
      console.log('Deleted user with ID:', newUserId, 'Affected rows:', borrar);
  
      // Verificar si el usuario fue eliminado
      const deletedUser = await userService.getAlumnoById(newUserId);
      console.log('User with ID', newUserId, 'after deletion:', deletedUser); // Debería ser null o undefined
  
    




  } catch (error) {
    console.error('Error:', error.message); //captura el error y lo muestra
  } finally {
    db.end(); // Cierra la conexión a la base de datos
  }
};

runExamples();
