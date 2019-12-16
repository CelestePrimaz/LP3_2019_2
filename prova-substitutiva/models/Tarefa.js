'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tarefa = sequelize.define('Tarefa', {
    id: {
      type: String,
      required: unique
    },
    descricao: {
      type: String,
      required: true
    },
    deadline:{
      type: Date,
      required: true
    },
    severidade: {
        type: String,
        required: true,
        len:["BAIXA","MEDIA","ALTA","URGENTE"] 
      },
      realizada:{
          type: String,
          required: false,
          len:["SIM", "NAO"]
      },
  }, 
  {});

  Tarefa.associate = function (models) {  
  };
  return Tarefa;
};