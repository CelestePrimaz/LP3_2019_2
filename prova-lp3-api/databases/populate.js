
require('./db');
const Lista = require ('../models/ListaUsuario');

Lista
    .insertMany(
        listas,
        (erro, listasSalvas) => console.log('Listas salvas')
    );