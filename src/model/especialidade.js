var Sequelize = require('sequelize');
var sequelize = require('./database');

var Especialidade = sequelize.define('especialidade', {
    especialidade: Sequelize.STRING,
},
    {
       freezeTableName: true,
        timestamps: false,
    });
module.exports = Especialidade