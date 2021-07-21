var Sequelize = require('sequelize');
var sequelize = require('./database');

var Marcacao = require('./marcacao');
var Notificacao = require('./notificacao');

var cria = sequelize.define('cria', {
    data: Sequelize.DATE,
    hora: Sequelize.TIME,
    marcacaoId:{
        type:Sequelize.INTEGER,
        references:{
            model: Marcacao,
            key: 'id'
        }
    },
    notificacaoId:{
        type: Sequelize.INTEGER,
        references:{
            model: Notificacao,
            key: 'id'
        }
    }
},
    {
        freezeTableName: true,
        timestamps: false,
    });

cria.belongsTo(Marcacao);
cria.belongsTo(Notificacao)

module.exports = cria