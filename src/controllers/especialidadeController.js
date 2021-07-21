var sequelize = require('../model/database.js');
var Especialidade = require('../model/especialidade');

const controllers = {}
sequelize.sync();

//LISTA
controllers.lista = async(req, res) =>{
    const data = await Especialidade.findAll({})
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
    const {especialidade} = req.body;
    //create
    const data = await Especialidade.create({
        especialidade: especialidade
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

//APAGAR
controllers.delete = async (req,res) =>{
    const { id } = req.body;
    const del = await Especialidade.destroy({
        where: {id:id}
    })
    res.json({success:true, deleted:del, message:"Apagado com sucesso!"});
}

module.exports = controllers;