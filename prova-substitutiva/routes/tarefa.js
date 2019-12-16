const express = require('express');
const trfCtrl = require('../controllers/TarefaController');

const router = express.Router();

router.get('/', trfCtrl.recuperarTarefas);

router.post('/', trfCtrl.salvar);

router.put('/:id', trfCtrl.atualizar);

router.delete('/:id', trfCtrl.remover);

module.exports = router;