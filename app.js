const express = require('express');

const swaggerUi = require('swagger-ui-express');

const swaggerSpec = require('./swagger');

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/pacientes', require('./routes/pacienteRoutes'));

app.use('/medicos', require('./routes/medicoRoutes'));

app.use('/especialidades', require('./routes/especialidadeRoutes'));

app.use('/usuarios', require('./routes/usuarioRoutes'));

app.use('/consultas', require('./routes/consultaRoutes'));

module.exports = app;