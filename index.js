const materiaService = require('./services/materiasService'); //guardamos en una variable, los métodos exportados en alumnosServices
const db = require('./utils/conexion'); //guardamos en una variable, la conexion a la BD



// Ejemplos de uso
const runExamples = async () => {
  try {
    // Crear un nuevo usuario
    const nuevaMateria = await materiaService.createMateria('100', 'musica', '1');
    console.log('Nueva materia creada con el  ID:', nuevaMateria);

    // Obtener todos los usuarios
    const materias = await materiaService.getAllMaterias();
    console.log('todas las materias:', materias);

    // Obtener un usuario por ID
    const materia = await materiaService.getMateriaById(nuevaMateria);
    console.log('materia con ID', materia);

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
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    db.end();
  }
};

runExamples();

