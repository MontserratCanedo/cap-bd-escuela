// index.js
const userController = require('./controllers/userController');

const run = async () => {
  // Ejemplos de llamadas a métodos de controladores
  await userController.createUser({ name: 'John Doe', email: 'john@example.com', age: 30 });
  await userController.getAllUsers();
};

run();
