const express = require('express');
const router = express.Router();
const middleware = require('../middleware');

const UserController = require('../controllers/userController');

router.get('/lista',UserController.lista);
router.get('/listafuncionarios', UserController.listafuncionarios);
router.get('/info/:id', UserController.getinfo);
router.get('/qrcode/:id', UserController.getqrcode);
router.post('/delete', UserController.delete);
router.post('/estado/:id', UserController.setrole);

//LOGIN
router.post('/registar',UserController.registar);
router.post('/login',UserController.login);

module.exports = router;