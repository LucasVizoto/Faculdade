BLM = 4
const principal = () => {
/*let mat = [[], [], [], []] //uma matriz são vetores dentro de vetores
mat[0] = []
mat[1] = []
mat[2] = []
mat[3] = [] */
let mat = []
//daqui pra baixo é igual a aula da Jaque
gera_matriz(mat)
console.log(mat)

soma = soma_diagonal_principal(mat)    //ou console.log(mat)
console.log(soma)

soma_secundaria = soma_diagonal_secundaria(mat)
console.log(soma_secundaria)
}
[[[]], [[]]]
const gera_matriz = (mat) => {
    for(let i=0; i<BLM; i++){
        mat[i] = [] // coloca um vetor dentro da matriz
        for(let j=0; j<BLM; j++){
            mat[i][j] = (Math.random() * (100 - 1) + 1).toFixed() //Math.random()randomiza um númmero pra colocar na matriz e toFixed pra tirar os valores depois da virgula
        }
    }
    return(mat)
}
const soma_diagonal_principal = (mat) =>{
    soma = 0
    for(let i=0; i<BLM; i++){
            soma+=mat[i][i]
    }
    return(soma)
}
const soma_diagonal_secundaria = (mat) => {
    soma=0
    for(let i=0; i<BLM; i++){
      soma = mat[i][BLM-1]  
    }
    return(soma)
}