const express = require('express');

const app = express();

//nossos web services 
app.use('/data', (req, res) => { 
    let dataAtual = new Date();
    dataAtual = dataAtual.toLocaleDateString();
    res.json(dataAtual);
} );

app.use('/inverter/:str', ( req , res ) => {
    //recupera a variavel de parametro
    let str = req.params.str;
    //inverte a string 
    str = str.split('').reverse().join('');
    res.json(str);
 } );

app.use('/cpf/:cpf', ( req , res ) => { 
    let cpf = req.params.cpf;
    //fazer essa parte enviar no repositorio
    res.send('Validador de cpf');

    //fffff
} );



app.listen(3000,
     () => console.log('Servidor iniciado')
);