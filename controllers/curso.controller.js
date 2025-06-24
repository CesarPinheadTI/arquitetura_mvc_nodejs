const cursoModel = require('../models/curso.model');

function listar(req,res) {
    const cursos = cursoModel.listarCursos();
    res.json(cursos); 
}

module.exports = {
    listar
}