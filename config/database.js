const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/clinica.sqlite',
    logging: false
});

module.exports = sequelize;