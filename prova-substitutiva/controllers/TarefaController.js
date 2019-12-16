const Tarefa = require('../models/Tarefa');

const controller ={
    recuperarTarefas: async (req, res) => {
        const tarefas = await Tarefa.find();
        return res.json(tarefas);
    },
     salvar: (req, res) => {
         const { descricao } = req.body;
         const { deadline } = req.body;
         const { severidade } = req.body;

         if (descricao && deadline && severidade ) {
            const tarefa = req.body;
            Tarefa
                .create(tarefa)
                .then(tarefaSalva => res.status(201).json(tarefaSalva))
                .catch(erro => {
                    console.log(erro);
                    res.status(500).json({
                        mensagem: 'Erro ao tentar salvar a Tarefa!'
                    });
                });
        } else {
            return res.status(400).json({
                mensagem: 'Um dos dados não foi informado, verifique!'
            });
        }
    },
    atualizar: (req, res) => {
        const { id } = req.params;
        const tarefa = req.body;

        Tarefa
            .findByIdAndUpdate(id, tarefa)
            .exec()
            .then(TarefaAtualizada => {
                

                if (TarefaAtualizada) {
                    res.json({mensagem: 'Tarefa Atualizada!!!!'});
                } else {
                    res
                        .status(404)
                        .json({
                            mensagem: 'Tarefa não encontrada'
                        });
                }
            })
            .catch(erro => {
                console.log(erro);
                res
                    .status(500)
                    .json({
                        mensagem: 'Erro ao tentar atualizar a tarefa'
                    });
            });
    },

    remover:(req, res) => {
        const{id} = req.params;
        Tarefa
        .findByIdAndRemove(id)
        .exec()
        .then(
            () => res.status(204).end(), 
            erro => { 
                console.log(erro);
            }
            )
        .catch(erro => {
            console.log(erro);
            res.status(500).json({
                mensagem: 'Erro ao tentar remover a tarefa!!!'
            });
        });
    }
};

module.exports = controller;
