const express = require('express');

const router = express.Router();

const controller = require('../controllers/pacienteController');

/**
 * @swagger
 * /pacientes:
 *   get:
 *     summary: Lista pacientes
 *     responses:
 *       200:
 *         description: Lista de pacientes
 */

router.get('/', controller.listar);

router.post('/', controller.criar);

module.exports = router;