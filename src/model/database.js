var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'projetofinal',
    'postgres',
    '123456',
    {
        host: 'localhost',
        port: '5432',
        dialect: 'postgres'
    },

);
module.exports = sequelize;