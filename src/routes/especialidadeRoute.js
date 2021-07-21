const express = require('express');
const router = express.Router();
//importer os controladores [2]

const EspecialidadeController = require('../controllers/especialidadeController');

router.get('/lista', EspecialidadeController.lista);
router.post('/create', EspecialidadeController.create);
router.post('/delete', EspecialidadeController.delete);

module.exports = router;