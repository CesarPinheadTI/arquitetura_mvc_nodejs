const professorModel = require('../models/professor.model');

function listar(req,res) {
    const professores = professorModel.listarProfessor();
    res.json(professores); 
}

module.exports = {
    listar
}