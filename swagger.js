const swaggerJsDoc = require('swagger-jsdoc');

const options = {

    definition: {

        openapi: '3.0.0',

        info: {

            title: 'API Clínica Médica',

            version: '1.0.0',

            description: 'Documentação da API'

        }

    },

    apis: ['./routes/*.js']

};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;