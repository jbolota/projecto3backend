var cria = require('../model/cria');

var Notificacao = require('../model/notificacao');
var Marcacao = require('../model/marcacao');

var sequelize = require('../model/database.js');

const controllers = {}
sequelize.sync()

//LISTA MARCACAÇÕES
controllers.lista = async (req, res) => {
    const data = await cria.findAll({
        include: [Notificacao, Marcacao]
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ success: true, data: data });
}

//LISTA NOTIFICACOES
controllers.get = async (req, res) => {
    const { id } = req.params;
    const data = await cria.findAll(
        { where: { marcacaoId: id } },{include: [Notificacao, Marcacao]}
    )
    .then(function (data) {
            return data;
        })
    .catch(error => {
        return error;
    });
res.json({ success: true, data: data });
}



//LISTA TIPO DE NOTIFICAÇÕES ADICIONADAS
controllers.listatipo = async (req, res) => {
    const data = await Notificacao.findAll({})
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ success: true, data: data });
}

//CRIAR NOTIFICAÇÃO PARA PACIENTE
controllers.adiciona = async (req, res) => {
    //data
    const { marcacaoId, notificacaoId } = req.body;
    //create
    const data = await cria.create({
        data: new Date(),
        marcacaoId: marcacaoId,
        notificacaoId: notificacaoId
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
        message: "Nova notificação criada",
        data: data
    });
}

module.exports = controllers;