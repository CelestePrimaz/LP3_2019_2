const Artigo = require('../models/Artigo');

const controller = {
    recuperarArtigos: async (req, res) => {
        const artigos = await Artigo.find();
        return res.json(artigos);
    },
    salvar: (req, res) => {
        const { titulo } = req.body;
        const { texto } = req.body;

        if (titulo && texto) {
            const artigo = req.body;
            Artigo
                .create(artigo)
                .then(artigoSalvo => res.status(201).json(artigoSalvo))
                .catch(erro => {
                    console.log(erro);
                    res.status(500).json({
                        mensagem: 'Erro ao tentar salvar o artigo'
                    });
                });
        } else {
            return res.status(400).json({
                mensagem: 'Um dos dados não foi informado'
            });
        }
    },
    atualizar: (req, res) => {
        const { id } = req.params;
        const artigo = req.body;

        Artigo
            .findByIdAndUpdate(id, artigo)
            .exec()
            .then(artigoAtualizado => {
                /**
                 * Se encontrou o artigo e
                 * a atualizou...
                 */
                if (artigoAtualizado) {
                    res.json({mensagem: 'Artigo atualizado'});
                } else {
                    res
                        .status(404)
                        .json({
                            mensagem: 'Artigo não encontrado'
                        });
                }
            })
            .catch(erro => {
                console.log(erro);
                res
                    .status(500)
                    .json({
                        mensagem: 'Erro ao tentar atualizar o artigo'
                    });
            });
    },

    remover:(req, res) => {
        const{id} = req.params;
        Artigo
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
                mensagem: 'Erro ao tentar remover o artigo'
            });
        });
    }
};

module.exports = controller;
