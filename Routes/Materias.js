const express = require('express');
const router = express.Router();
const { getAllMaterias, createMateria, borrarMateria, getMateriaById, updateMateria } = require('../services/materiasService');

// Obtener todas las materias
router.get('/materias', async (req, res) => {
  try {
    const materias = await getAllMaterias();
    res.json(materias);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


router.post('/materias', async (req, res) => {
  const { id_Materia, nombre_Materia, id_calificaciones } = req.body;
  try {
   await createMateria(id_Materia, nombre_Materia, id_calificaciones);
    res.status(201).json({ id: insertId });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Obtener una materia por ID
router.get('/materias/:id', async (req, res) => {
  try {
    const materia = await getMateriaById(req.params.id);
    if (!materia) return res.status(404).send('Materia no encontrada');
    res.json(materia);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Actualizar una materia
router.put('/materias/:id', async (req, res) => {
  const { nombre_Materia ,id_calificaciones} = req.body;
  try {
    await updateMateria(req.params.id, nombre_Materia,id_calificaciones);
    res.json({ message: 'Materia actualizada con éxito' });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Borrar una materia
router.delete('/materias/:id', async (req, res) => {
  try {
    await borrarMateria(req.params.id);
    res.json({ message: 'Materia eliminada con éxito' });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
