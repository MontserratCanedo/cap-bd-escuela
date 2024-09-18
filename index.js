const userService = require('./services/materiasService'); //guardamos en una variable, los métodos exportados en alumnosServices
const db = require('./utils/conexion'); //guardamos en una variable, la conexion a la BD



// Ejemplos de uso
const runExamples = async () => {
  try {
    // // Crear un nuevo usuario
  const NuevaMateria = await userService.createMateria('81', 'musica','1');
     console.log('Nueva materia creada con el  ID:', NuevaMateria);

    // Obtener todos los usuarios
    const materias = await userService.getAllMaterias();
    console.log('todas las materias:', materias);

    // // Obtener un usuario por ID
     const materia = await userService.getmateriaById(NuevaMateria);
    console.log('materia with ID', materia);

    // // Actualizar un usuario
    const actualizarMateria = await userService.updateMateria('60', 'ivan');
   console.log('Materia actualizada con ID:', actualizarMateria.id_Materia);
   console.log(actualizarMateria.message);

    // // Obtener el usuario actualizado
      await userService.getmateriaById(NuevaMateria);
     console.log('Materia actualizada con el  ID', actualizarMateria.id_Materia);

    // // Eliminar un usuario
   const borrar = await userService.BorarMateria('77');
    console.log('Materia borrada con el ID:', borrar.id);
    console.log(borrar.message);
    // // Verificar si el usuario fue eliminado
    const deletedUser = await userService.getmateriaById(borrar.id);
     console.log('User with ID', borrar.id, 'after deletion:', deletedUser);
  } catch (error) {
    console.error('Error:', error.message); 
  } finally {
    db.end(); 
  }
};

runExamples();

