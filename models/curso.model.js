/* CRUD
* C - Create - POST - INSERT INTO
* R - Read - GET - SELECT
* U - Update - PUT - UPDATE
* D - Delete - DELETE - DELETE FROM
*/

function listarCursos(){
    const cursos = [
        {
            id : 1, nome: "Desenvolvimento Web", duracao: 1200,
            descricao: "Curso focado em lógica de programação e desenvolvimento para ambiente web"
        },
        {
            id : 2, nome: "Segurança da Informação", duracao: 1600,
            descricao: "Curso focado em analise de segurança e preparamento de um ambiente de teste e infiltração"
        },
        {
            id : 3, nome: "Desenvolvimento Desktop", duracao: 1200,
            descricao: "Curso focado em lógica de programação e desenvolvimento para ambiente esktop"
        }
    ]
    return cursos;
}

module.exports = {
    listarCursos
}