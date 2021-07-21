var tem = require('../model/tem');

var Estado = require('../model/estado');
var Marcacao = require('../model/marcacao');

var sequelize = require('../model/database.js');
const controllers = {}
sequelize.sync()

//LISTA MARCACAÇÕES
controllers.lista = async(req, res) =>{
    const data = await tem.findAll({
        include:[Estado, Marcacao]
    })
    .then( function(data){
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

//LISTA TIPO DE ESTADOS A ADICIONAR
controllers.listatipo = async(req, res) =>{
    const data = await Estado.findAll({})
    .then( function(data){
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

//CRIAR ESTADO PARA MARCAÇÃO DE PACIENTE
controllers.adiciona = async (req,res) =>{
    //data
    const {id1,id2} = req.params;
    //create
    const data = await tem.create({
        data: new Date(),
        marcacaoId: id1,
        estadoId: id2,
        obs: "CHECKIN FEITO VIA QRCODE"
    })
    .then(function(data){
        return data;
    })
    .catch(error=>{
        console.log("Erro:" +error)
        return error;
    })
    res.status(200).json({
        success: true,
        message: "Novo estado adicionado a marcação",
        data: data
    });
}

module.exports = controllers;