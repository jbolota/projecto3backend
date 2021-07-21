var User = require('../model/user');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


var Role = require('../model/Role');
var Especialidade = require('../model/especialidade');

var sequelize = require('../model/database.js');
const config = require('../config');

const controllers = {}
sequelize.sync();

//LISTA
controllers.lista = async (req, res) => {
  const data = await User.findAll({
    include: [Role, Especialidade]
  })
    .then(function (data) {
      return data;
    })
    .catch(error => {
      return error;
    });
  res.json({ success: true, data: data });
}

//LISTA FUNCIONÁRIOS
controllers.listafuncionarios = async (req, res) => {
  const data = await User.findAll({
    where: { roleId: 2 },
    include: [Role, Especialidade]
  })
    .then(function (data) {
      return data;
    })
    .catch(error => {
      return error;
    });
  res.json({ success: true, data: data });
}

//REGISTAR 
controllers.registar = async (req, res) => {
  //data
  const { nome, email, password, telemovel, nif, qrcode, obs, especialidadeId, roleId } = req.body;

  //create
  const data = await User.create({
    nome: nome,
    email: email,
    password: password,
    telemovel: telemovel,
    nif: nif,
    qrcode: qrcode,
    obs: obs,
    especialidadeId: especialidadeId,
    roleId: roleId
  })
    .then(function (data) {
      return data;
    })
    .catch(error => {
      console.log("Erro:" + error)
      return error;
    })
  res.status(200).json({
    success: true,
    message: "Utilizador Registado com sucesso",
    data: data
  });
}

//APAGAR
controllers.delete = async (req, res) => {
  const { id } = req.body;
  const del = await user.destroy({
    where: { id: id }
  })
  res.json({ success: true, deleted: del, message: "Apagado com sucesso!" });
}

//// INFO USER POR IDUSER
controllers.getinfo = async (req, res) => {
  const { id } = req.params;
  const data = await User.findAll({
    where: { id: id }
  })
    .then(function (data) {
      return data;
    })
    .catch(error => {
      return error;
    });
  res.json({ success: true, data: data });
}

//// QRCODE LINK USER POR IDUSER
controllers.getqrcode = async (req, res) => {
  const { id } = req.params;
  const data = await User.findAll({
    attributes: ['qrcode'],
    where: { id: id }
  })
    .then(function (data) {
      return data;
    })
    .catch(error => {
      return error;
    });
  res.json({ success: true, data: data });
}

/// ALTERA ROLE DE FUNCIONÁRIO
controllers.setrole = async (req, res) => {
  const { id } = req.params;
  const { roleId } = req.body;
  const data = await User.update({
    roleId: roleId
  },
    {
      where: { id: id }
    })
    .then(function (data) {
      return data;
    })
    .catch(error => {
      return error;
    })
  res.json({ success: true, data: data, message: " Role actualizada" });
}

controllers.login = async (req, res) => {
  if (req.body.email && req.body.password) {
    var email = req.body.email;
    var password = req.body.password;
  }
  var user = await User.findOne({ where: { email: email } })
    .then(function (data) {
      console.log("return data");
      console.log(data);
      return data;
    })
    .catch(error => {
      console.log("Erro: " + error);
      return error;
    })
  if (password === null || typeof password === "undefined") {
    res.status(403).json({
      success: false,
      message: 'Campos em Branco'
    });
  } else {
    if (req.body.email && req.body.password && user) {
      const isMatch = bcrypt.compareSync(password, user.password);
      if (req.body.email === user.email && isMatch) {
        let token = jwt.sign({ email: req.body.email }, config.jwtSecret,
          {
            expiresIn: '1h' //expira em 1 hora
          });
        res.json({
          success: true, message: 'Autenticação realizada com sucesso!', token: token, roleId: user.roleId, userId: user.id, nome: user.nome
        });
      } else {
        res.status(403).json({
          success: false, message: 'Dados de autenticação inválidos.'
        });
      }
    } else {
      res.status(400).json({
        success: false, message: 'Erro no processo de autenticação.Tente de novo mais tarde.'
      });
    }
  }
}
module.exports = controllers;