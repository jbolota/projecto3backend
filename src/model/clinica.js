var Sequelize = require('sequelize');
var sequelize = require('./database');

var Clinica = sequelize.define('clinica', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: Sequelize.STRING,
  morada: Sequelize.STRING,
  telemovel: Sequelize.BIGINT,
  cod_postal: Sequelize.BIGINT,
  obs: Sequelize.STRING
},
  {
    freezeTableName: true,
    timestamps: false,
  });

module.exports = Clinica