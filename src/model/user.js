var Sequelize = require('sequelize');
var sequelize = require('./database');

var Role = require('./role');
var Especialidade = require('./especialidade');
const bcrypt = require('bcrypt');

var user = sequelize.define('user', {
  nome: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  telemovel: Sequelize.BIGINT,
  nif: Sequelize.INTEGER,
  qrcode: Sequelize.STRING,
  obs: Sequelize.STRING,
  especialidadeId: {
    type: Sequelize.INTEGER,
    references: {
      model: Especialidade,
      key: 'id'
    }
  },
  roleId: {
    type: Sequelize.INTEGER,
    references: {
      model: Role,
      key: 'id'
    }
  },
},
  {
    freezeTableName: true,
    timestamps: false,
  });
  
user.beforeCreate((user, options) => {
  return bcrypt.hash(user.password, 10)
    .then(hash => {
      user.password = hash;
    })
    .catch(err => {
      throw new Error();
    });
});

user.belongsTo(Role);
user.belongsTo(Especialidade);

module.exports = user