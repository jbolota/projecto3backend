var Sequelize = require('sequelize');
var sequelize = require('./database');
var Marcacao = require('./marcacao');
var Estado = require('./estado');

var tem = sequelize.define('tem', {
    marcacaoId:{
        type:Sequelize.INTEGER,
        references:{
            model: Marcacao,
            key: 'id'
        }
    },
    estadoId:{
        type: Sequelize.INTEGER,
        references:{
            model: Estado,
            key: 'id'
        }
    },
    data: Sequelize.DATE,
    hora: Sequelize.TIME,
    obs: Sequelize.STRING
    
},
    {
        freezeTableName: true,
        timestamps: false,
    });

tem.belongsTo(Marcacao);
tem.belongsTo(Estado);

module.exports = tem