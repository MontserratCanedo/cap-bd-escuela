const maestrosService = require('./services/maestrosService.js'); //guardamos en una variable, los métodos exportados en alumnosServices
const db = require('./utils/conexion'); //guardamos en una variable, la conexion a la BD

// Ejemplos de uso
const runExamples = async () => {
  try {
    // Insertar maestro
    const newMaestro = await maestrosService.createMaestro('Leo', 'Doe', 1, 1);
    console.log('Create maestro:', newMaestro);
    
   // Obtener todos los maestros
    const maestros = await maestrosService.getAllMaestros();
    console.log('All maestros', maestros);
    
    // Obtener maestro por id
    const maestrosByID = await maestrosService.getMaestrosById(2);
    console.log('Maestro con el ID', maestrosByID );
    
    // Actualizar un usuario
    await maestrosService.updateMaestro(9, 'Sandra', 'Kg');

    // Eliminar un usuario
    await maestrosService.deleteMaestro(47);
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    db.end();
  }
};

runExamples();
