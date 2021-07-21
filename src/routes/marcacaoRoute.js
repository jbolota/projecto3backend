const express = require('express');
const router = express.Router();

const MarcacaoController = require('../controllers/marcacaoController');

router.get('/lista', MarcacaoController.lista);
router.get('/tempoespera/:id', MarcacaoController.tempoespera);
router.get('/get/:id', MarcacaoController.get);
router.get('/getbyuser/:id', MarcacaoController.getbyuser);
router.get('/proximasconsultas', MarcacaoController.proximasconsultas);
router.post('/adicionaratraso/:id', MarcacaoController.adicionaratraso);

module.exports = router;
