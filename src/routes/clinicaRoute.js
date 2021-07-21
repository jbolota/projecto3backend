const express = require('express');
const router = express.Router();
//importer os controladores [2]

const ClinicaController = require('../controllers/clinicaController');

router.get('/lista', ClinicaController.lista);
router.post('/create', ClinicaController.create);

module.exports = router;