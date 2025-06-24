function listarAluno(){
    const alunos = [
        {
            id : 1, nome: "Cesar Pinhead", idade: 34, matricula: 2025
        },
        {
            id : 2, nome: "Joaquim Lima", idade: 38, matricula: 2022
        },
        {
            id : 3, nome: "Christopher da Cruz", idade: 26, matricula: 2023
        }
    ]
    return alunos;
}

module.exports = {
    listarAluno
}