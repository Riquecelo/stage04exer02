const listAlunos = [
    {
        nome: "João",
        primeiraNota: 8,
        segundaNota: 6
    },
    {
        nome: "Letícia",
        primeiraNota: 8,
        segundaNota: 7
    },
    {
        nome: "Diego",
        primeiraNota: 5,
        segundaNota: 5
    },
    {
        nome: "Julia",
        primeiraNota: 3,
        segundaNota: 5
    }
]

function verificAprovado(verificaM){
    if(verificaM >= 7){
        return 'Parabens! Você passou'
    }else{
        return 'Não desista! Quem sabe na próxima'
    }
}
function media(nota1, nota2){
    return ((nota1 + nota2)/2)
}

function mensg(aluno){
    let mediaA = media(aluno.primeiraNota, aluno.segundaNota)
    return ` 
        O aluno(a): ${aluno.nome}
        tem a media ${mediaA}
        ${verificAprovado(mediaA)}
    `
}

for(let aluno of listAlunos){
    let reslt = mensg(aluno)

    alert(reslt)
}