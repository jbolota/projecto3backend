var Sequelize = require('sequelize');
var sequelize = require('./database');

var Notificacao = sequelize.define('notificacao', {
    /*idnotificao: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },*/
    mensagem: Sequelize.STRING
},
    {
        freezeTableName: true,
        timestamps: false,
    });
module.exports = Notificacao