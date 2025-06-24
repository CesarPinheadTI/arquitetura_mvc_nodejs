// importando o modulo express
const express = require('express');
// importando os controllers
const cursoController = require('./controllers/curso.controller')
const alunoController = require('./controllers/aluno.controller')
const professorController = require('./controllers/professor.controller')

const app = express();

// rota para listar os cursos
app.get('/listar-cursos', cursoController.listar);
app.get('/listar-alunos', alunoController.listar);
app.get('/listar-professores', professorController.listar);

// definindo porta do servidor
app.listen(3000, function () {
    console.log ('Servidor rodando!');
});