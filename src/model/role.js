var Sequelize = require('sequelize');
var sequelize = require('./database');

var Role = sequelize.define('role', {
 /*   idRole: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },*/
    descricao: Sequelize.STRING,
},
    {
        freezeTableName: true,
        timestamps: false,
    });
module.exports = Role