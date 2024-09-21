const gera_matriz = (linhas, colunas, matriz, vetor) => {
    for (let i = 0; i < linhas; i++) { // para cada aluno
        vetor.push(prompt(`Informe o Nome do Aluno `))
        matriz[i] = [] //cria um vetor dentro de outro vetor
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.floor((Math.random() * (10 - 1) + 1).toFixed())
        }
    }
}

const calcular_media = (linhas,colunas, vetor, matriz) => {
    let soma
    for(let i = 0; i <linhas; i++) { //pra cada aluno
        soma = 0
        for(let j = 0; j < colunas; j++) { // pra cada nota
            soma+=matriz[i][j]
        } // acabei as notas
        if(soma/colunas<3){
            console.log (`Aluno ${vetor[i]} está reprovado com a média ${soma/colunas}`)
        }
        else if(soma/colunas){
            console.log(`Aluno ${vetor[i]} está em exame com a média ${soma/colunas}`)
        }
    }
}

const principal = () => {
    let vetor_alunos = []
    let matriz = []
    let linhas = 4, colunas = 5
    gera_matriz(linhas, colunas, matriz, vetor_alunos)
    calcular_media(linhas, colunas,matriz, vetor_alunos)
}