const express = require('express');
const router = express.Router();

const temEstadoController = require('../controllers/temEstadoController');

router.get('/lista', temEstadoController.lista);
router.get('/listatipo', temEstadoController.listatipo);
router.post('/adiciona/:id1/:id2', temEstadoController.adiciona);

module.exports = router;