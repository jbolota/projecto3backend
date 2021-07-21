var Sequelize = require('sequelize');
var sequelize = require('./database');

var Marcacao = require('./marcacao');
var Atraso = require('./atraso');

var tem2 = sequelize.define('tem2', {
  /*  id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },*/
    marcacaoId:{
        type:Sequelize.INTEGER,
        references:{
            model: Marcacao,
            key: 'id'
        }
    },
    atrasoId:{
        type: Sequelize.INTEGER,
        references:{
            model: Atraso,
            key: 'id'
        }
    }    
},
    {
        freezeTableName: true,
        timestamps: false,
    });

tem2.belongsTo(Marcacao);
tem2.belongsTo(Atraso)

module.exports = tem2