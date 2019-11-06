const Usuario = require('../models/ListaUsuario');

const controller = {

   recuperarDados: async (req,res)=>{    
      const { consulta } = req.body;
      const user = await Usuario.find({
         nome: {'$regex':consulta,'$options':'i'},
         email:{'$regex':consulta,'$options':'i'}
      });
      return res.json(user);
  },

  salvar: (req, res) => {
   const {nome, email, senha, confirmacaoSenha} = req.body;
      if(nome && email){ 
         const usario = req.body;
         Usuario
         .create(usario)
         .then(userSava => res.status(201).json(userSava))
         .catch(erro => {console.log(erro);
            res.status(500).json({ 
                mensagem: 'Erro ao tentar salvar Usuario' })
            });
      }else{
        return res.status(400).json({ mensagem:'Dados não informados corretamente' });
      }
    
         if(senha.length == confirmacaoSenha.length){
   
         }else{
            return res.status(400).json({ mensagem:'Senha incompatível'});
         }
    }

};

module.exports = controller;