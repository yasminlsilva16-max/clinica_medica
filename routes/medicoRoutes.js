const express = require('express');

const router = express.Router();

const controller = require('../controllers/medicoController');

router.get('/', controller.listar);

router.post('/', controller.criar);

module.exports = router;