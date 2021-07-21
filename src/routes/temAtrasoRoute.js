const express = require('express');
const router = express.Router();

const temAtrasoController = require('../controllers/temAtrasoController');

router.post('/adicionaratraso', temAtrasoController.adicionaatraso);
router.get('/atraso', temAtrasoController.atraso);
module.exports = router;