var marcacao = require('../model/marcacao');
var User = require('../model/user');
var Clinica = require('../model/clinica');
var Atraso = require('../model/atraso');
var sequelize = require('../model/database.js');
const Role = require('../model/role');

const controllers = {}
sequelize.sync();

//LISTA
controllers.lista = async (req, res) => {
	const data = await marcacao.findAll({
		include: [User, Clinica, Atraso],
		order: [
			['hora', 'ASC'],
			['data', 'ASC']
		]
	})
		.then(function (data) {
			return data;
		})
		.catch(error => {
			return error;
		});
	res.json({ success: true, data: data });
}

//get
controllers.get = async (req, res) => {
	const {id} = req.params;
	const data = await marcacao.findAll(
		{where: {id:id}},
		{include: [User, Clinica, Atraso]},
		{order: [
			['hora', 'ASC'],
			['data', 'ASC']
		]}
	)
		.then(function (data) {
			return data;
		})
		.catch(error => {
			return error;
		});
	res.json({ success: true, data: data });
}

//get
controllers.getbyuser = async (req, res) => {
	const {id} = req.params;
	const data = await marcacao.findOne(
		{where: {userId:id}},
		{include: [User, Clinica, Atraso]},
		{order: [
			['hora', 'ASC'],
			['data', 'ASC']
		]}
	)
		.then(function (data) {
			return data;
		})
		.catch(error => {
			return error;
		});
	res.json({ success: true, data: data });
}



controllers.adicionaratraso = async (req, res) => {
	const { atrasoId } = req.body;
	const { id } = req.params;
	const data = await marcacao.update(
		{ atrasoId: atrasoId },
		{ where: { id: id } },
		{ include: [Atraso] }
		)
		.then(function (data) {
			return data;
		})
		.catch(error => {
			return error;
		})
	res.json({ success: true, data: data, message: "Atraso adicionado com sucesso" });
}


//EXISTE PRÓXIMAS CONSULTA, SE EXISTEM QUAIS SÃO
controllers.proximasconsultas = async (req, res) => {
	const { mdata, mhora } = req.body;
	const { Op } = require("sequelize");
	//ASSUMIR QUE O DIA DE TRABALHO 21H
	const data = await marcacao.findAll({
		where: { data: datamarcacao },
		include: [User, Clinica, Atraso]
	})
		.then(function (data) {
			return data;
		})
		.catch(error => {
			return error;
		});
	res.json({ success: true, data: data });
}

//TEMPO DE ESPERA ATÉ À HORA ATUAL USER PACIENTE 
controllers.tempoespera = async (req, res) => {
	const { id } = req.params;
	const data = await marcacao.findAll({
		attributes: ['data', 'hora'],
		where: { id: id }
	})
		.then(function (data) {
			//const daysBetween = new Date().getDate() - data[0].hora.getDate()
			// tempo: Date(), hora: data[0].hora, tempoespera:  new Date().getDate() - data[0].hora.getDate()

			// const daysBetween =  data[0].hora;
			return data;
		})
		.catch(error => {
			return error;
		});
	res.json({ success: true, data: data[0].hora, dataactual: new Date() });
}

module.exports = controllers;