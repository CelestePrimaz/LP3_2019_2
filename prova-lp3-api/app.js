const express = require('express');

// Middlewares
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const rotasListas = require('./routes/Usuario');
require('./databases/db');

const app = express();

app.use(logger('dev'));

app.use(cors());


app.use(bodyParser.json());

app.use('/usuario', rotasListas);


module.exports = app;
