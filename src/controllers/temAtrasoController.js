var Tem2 = require('../model/tem2');
var sequelize = require('../model/database.js');
var Marcacao = require('../model/marcacao');
var Atraso = require('../model/atraso');

const controllers = {}
sequelize.sync();


//ADICIONAR ATRASO
controllers.adicionaatraso = async (req, res) => {
    const { marcacaoId, atrasoId } = req.body;
    const data = await Tem2.create({
        marcacaoId: marcacaoId,
        atrasoId: atrasoId
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
        message: "Atraso adicionado a marcação com sucesso",
        data: data
    });
}

//PROCURA ATRASO

controllers.atraso = async (req, res) => {
    const { id } = req.params;
    const data = await Tem2.findAll({
        attributes: ['marcacaoId'],
        include: [Marcacao, Atraso]
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ success: true, data: data });
}


module.exports = controllers;