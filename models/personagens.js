const mongoose = require("mongoose");  //importando o mongoose

const personagensModel = new mongoose.Schema({
    nome: { type: String, required: true},
    imagemUrl: { type: String, required: true},
    dataCriacao: { type: Date, default: Date.now }
});

const Personagem = mongoose.model("personagens",personagensModel);

module.exports = Personagem;