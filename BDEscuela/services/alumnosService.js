// userService.js
const db = require('../models/database');

const getAllUsers = async () => {
  const [rows] = await db.execute('SELECT * FROM users');
  return rows;
};

const getUserById = async (id) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
  return rows[0];
};

const createUser = async (userData) => {
  const { name, email, age } = userData;
  const [result] = await db.execute('INSERT INTO users (name, email, age) VALUES (?, ?, ?)', [name, email, age]);
  return { id: result.insertId, ...userData };
};

const updateUser = async (id, userData) => {
  const { name, email, age } = userData;
  const [result] = await db.execute('UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?', [name, email, age, id]);
  if (result.affectedRows === 0) {
    return null; // No se encontró el usuario
  }
  return { id, ...userData };
};

const deleteUser = async (id) => {
  const [result] = await db.execute('DELETE FROM users WHERE id = ?', [id]);
  return result.affectedRows > 0; // Retorna true si se eliminó algún usuario
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
