const express = require('express');
const artCtrl = require('../controllers/ArtigoController');

//cria o roteador dos web services relacionados a artigo.
const router = express.Router();

//recupera artigos
router.get('/', artCtrl.recuperarArtigos);

//salva artigos
router.post('/', artCtrl.salvar);

//atualiza 
router.put('/:id', artCtrl.atualizar);

//deleta
router.delete('/:id', artCtrl.remover);

module.exports = router;
