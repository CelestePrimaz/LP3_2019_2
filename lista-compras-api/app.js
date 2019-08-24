const express = require('express');

//Midddlewares
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const rotasListas = require('./routes/listas');

const app = express();

app.use(logger('dev'));

/**
 * Ao utilizar a função cors() sem
 * nenhuma argumento, você estará liberando
 * o acesso a todos os serviços para 
 * qualquer outra aplicação que tenha acesso à internet..
 */
app.use(cors());

/**
 * Permite que nosso app Express 
 * consiga interpretar dados do fronend 
 * em formato JSON..
 */
app.use(bodyParser.json() );

/**
 * Registra as rotas relacionadas a listas
 */
app.use(rotasListas);

module.exports = app;
