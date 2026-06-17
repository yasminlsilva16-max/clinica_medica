const express = require('express');

const router = express.Router();

const controller = require('../controllers/consultaController');

router.get('/', controller.listar);

router.post('/', controller.criar);

router.patch('/:id/finalizar', controller.finalizar);

router.patch('/:id/cancelar', controller.cancelar);

module.exports = router;