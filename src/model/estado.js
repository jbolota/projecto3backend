var Sequelize = require('sequelize');
var sequelize = require('./database');

var estado = sequelize.define('estado', {
   /* idestado: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },*/
    estado: Sequelize.STRING,
},
    {
        freezeTableName: true,
        timestamps: false,
    });
module.exports = estado