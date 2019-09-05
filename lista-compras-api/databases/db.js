const Sequelize = require('sequelize');

const dbConfig = require('./config');

const modo = process.env.NODE_ENV || 'development';
const config = dbConfig[modo];

const conexao = new Sequelize(
    config.db,
    config.user,
    config.password,{
        host: config.host,
        dialect: config.dialect
    });
conexao 
    .sync({alter: true})
    .then(() => console.log('BD conectado'));

