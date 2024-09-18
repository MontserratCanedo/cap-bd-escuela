const maestrosService = require('./services/maestrosService.js'); //guardamos en una variable, los métodos exportados en alumnosServices
const db = require('./utils/conexion'); //guardamos en una variable, la conexion a la BD



// Ejemplos de uso
const runExamples = async () => {
  try {
    // // Crear un nuevo usuario
    // const newUserId = await createUser('John Doe', 'john.doe@example.com');
    // console.log('Created user with ID:', newUserId);
    /* const newMaestro = await maestrosService.createMaestro('John', 'Doe', 1, 1);
    console.log('Create maestro:', newMaestro); */
    

    // Obtener todos los usuarios
    /* const users = await userService.getAllClients();
    console.log('All users:', users); */
    /* const maestros = await maestrosService.getAllMaestros();
    console.log('All maestros', maestros); */
    
    // Obtener un usuario por ID
    // const user = await getUserById(newUserId);
    // console.log('User with ID', newUserId, ':', user);
    /* const maestrosByID = await maestrosService.getMaestrosById(1);
    console.log('Maestro con el ID', maestrosByID ); */
    

    // // Actualizar un usuario
    // await updateUser(newUserId, 'John Smith', 'john.smith@example.com');
    // console.log('Updated user with ID:', newUserId);
    /* await maestrosService.updateMaestro(4, 'Leo', 'Kg');
    console.log('Update user with id', updatedMaestro); */
    //const updatedMaestro = await maestrosService.updateMaestro(4, "Leo", "Gree");

    // // Obtener el usuario actualizado
    // const updatedUser = await getUserById(newUserId);
    // console.log('Updated user with ID', newUserId, ':', updatedUser);

    // // Eliminar un usuario
    // await deleteUser(newUserId);
    // console.log('Deleted user with ID:', newUserId);
    //const deletedMaestro = await maestrosService.deleteMaestro(45);

    // // Verificar si el usuario fue eliminado
    // const deletedUser = await getUserById(newUserId);
    // console.log('User with ID', newUserId, 'after deletion:', deletedUser);
  } catch (error) {
    console.error('Error:', error.message); //captura el error y lo muestra
  } finally {
    db.end(); // Cierra la conexión a la base de datos
  }
};

runExamples();
