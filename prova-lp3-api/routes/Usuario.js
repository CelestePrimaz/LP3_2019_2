const express = require('express');
const listaCtrl = require('../controllers/UsuarioController');


const router = express.Router();


router.post('/', listaCtrl.salvar);


router.get('/usuario', listaCtrl.recuperarDados);

module.exports = router;