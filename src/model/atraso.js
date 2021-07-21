var Sequelize = require('sequelize');
var sequelize = require('./database');

var Atraso = sequelize.define('atraso', {
  tempoatraso: Sequelize.INTEGER,
},
  {
    freezeTableName: true,
    timestamps: false,
  });
module.exports = Atraso