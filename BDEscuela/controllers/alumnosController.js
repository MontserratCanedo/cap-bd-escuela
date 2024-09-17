// userController.js
const userService = require('../services/userService');

const getAllUsers = async () => {
  try {
    const users = await userService.getAllUsers();
    console.log('Users:', users);
  } catch (error) {
    console.error('Error getting users:', error.message);
  }
};

const getUserById = async (id) => {
  try {
    const user = await userService.getUserById(id);
    if (user) {
      console.log('User:', user);
    } else {
      console.log('User not found');
    }
  } catch (error) {
    console.error('Error getting user:', error.message);
  }
};

const createUser = async (userData) => {
  try {
    const newUser = await userService.createUser(userData);
    console.log('User created:', newUser);
  } catch (error) {
    console.error('Error creating user:', error.message);
  }
};

const updateUser = async (id, userData) => {
  try {
    const updatedUser = await userService.updateUser(id, userData);
    if (updatedUser) {
      console.log('User updated:', updatedUser);
    } else {
      console.log('User not found');
    }
  } catch (error) {
    console.error('Error updating user:', error.message);
  }
};

const deleteUser = async (id) => {
  try {
    const result = await userService.deleteUser(id);
    if (result) {
      console.log('User deleted');
    } else {
      console.log('User not found');
    }
  } catch (error) {
    console.error('Error deleting user:', error.message);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
