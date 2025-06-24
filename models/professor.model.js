function listarProfessor(){
    const professores = [
        {
            id : 1, nome: "Jefferson Souza", idade: 32, curso: "TI"
        },
        {
            id : 2, nome: "Suelen Cristina", idade: 36, curso: "TI"
        },
        {
            id : 3, nome: "Julia Matos", idade: 24, curso: "TI"
        }
    ]
    return professores;
}

module.exports = {
    listarProfessor
}