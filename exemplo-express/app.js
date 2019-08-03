const express = require('express');
//constante que controla nosso app
const app = express ();

app.use('/', (req, res) => res.send('Olá'));

app.listen(3000, () => console.log('servidor iniciado'));
