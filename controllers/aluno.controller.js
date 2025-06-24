const alunoModel = require('../models/aluno.model');

function listar(req,res) {
    const alunos = alunoModel.listarAluno();
    res.json(alunos); 
}

module.exports = {
    listar
}