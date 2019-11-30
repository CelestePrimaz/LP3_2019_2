const {Schema, model} = require('mongoose');
 const artigo = new Schema({
     titulo:{
         type: String,
         required: true
     },
     texto:{
         type:String,
         required: true
     }
 });
 const Artigo = model('Artigo', artigo);
 module.exports = Artigo;