var Clinica = require('../model/clinica');

var sequelize = require('../model/database.js');

const controllers = {}
sequelize.sync();

//LISTA
controllers.lista = async(req, res) =>{
    const data = await Clinica.findAll({})
    .then( function(data){
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

//Registar
controllers.create = async (req,res) =>{
    //data
    const {nome, morada, telemovel, cod_postal, obs} = req.body;
    //create
    const data = await Clinica.create({
        nome: nome,
        morada: morada,
        telemovel: telemovel,
        cod_postal: cod_postal,
        obs: obs
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
        message: "Utilizador Registado com sucesso",
        data: data
    });
}

module.exports = controllers;