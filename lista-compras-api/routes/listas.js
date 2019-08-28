const express = require('express');
const ListaCtrl = require('../controllers/ListaController');


/**
 * Cria o roteador do web services 
 * relacionados a Lista. Por meio
 * do roteador será possível definir 
 * os nossos web services.
 */
const router = express.Router();


/**
 * Rota para o serviço: /listas
 * Verbo HTTP : GET
 */
router.get('/', ListaCtrl.recuperarTodas);

/**
 * Rota para serviço: /listas
 * Verbo HTTP: POST 
 */
router.post('/', ListaCtrl.salvar);

module.exports = router;
