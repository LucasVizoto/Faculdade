const gera_matriz_inteira= (mat, linhas, colunas) =>{
    for(let i=0; i<linhas; i++){
        mat[i] = []
        for(let j=0; j<colunas; j++){
            mat[i][j] = (Math.random() * (30 - 1) + 1).toFixed() //30 é o maior valor a ser sorteado, a subtração indica o menor
            mat[i][j] = Math.floor(mat[i][j]) //arredonda a String para o número inteiro mais próximo (o)
        }
    }
    return(mat) //retorna a matriz
} //funcao pra facilitar a vida :) 

const exercicio_6 = ( ) => {

    let mat = [], linhas = 20 , colunas = 10, soma_colunas = [], valor_soma = 0
    mat = gera_matriz_inteira(mat, linhas, colunas)
//definindo variáveis

    for (let j=0;j<colunas; j++){
        for(let i=0;i<linhas; i++){
            valor_soma += mat[i][j]
        } 
        soma_colunas.push(valor_soma)
    } //o ponteiro passa pulando linhas e vai somando pelos valores das colunas, a soma final é jogada num vetor
    //para ser usado o indice e fazer a multiplicação depois , no for de baixo

    for(let i=0;i<linhas;i++){
        for(let j=0;j<colunas;j++){
            mat[i][j] *= soma_colunas[j] //o valor é multiplicado pela soma da respectiva coluna 
        }
        console.log(mat[i]) //exibindo resultado
    }
}

const exercicio_7 = ( ) => {
    let M = [] , N = [], soma_matrizes = []
    const linhas_m = 4 , colunas_m = 6 , linhas_n = 6, colunas_n = 4
    
    M = gera_matriz_inteira(M, linhas_m, colunas_m)
    N = gera_matriz_inteira(N, linhas_n, colunas_n)

    for(let i = 0; i<linhas_m; i++){
        soma_matrizes[i] = [ ] //adicionando um vetor na linha
        for(let j = 0; j<colunas_n; j++){
            soma_matrizes[i][j] = M[i][j] + N[i][j]
        }
        console.log(soma_matrizes[i])
    } //não sei se estaria certo fazer assim, mas foi somado os locais que haviam nas duas matrizes
    //por esse motivo foi usado o menor tamanho das duas
}

const exercicio_8 = ( ) => {
    let primeira_mat = [], segunda_mat = [], soma_matrizes = [], diferenca_matrizes = []
    const linhas = 3, colunas = 8

    primeira_mat = gera_matriz_inteira(primeira_mat, linhas, colunas)
    segunda_mat = gera_matriz_inteira(segunda_mat, linhas, colunas)

    for(let i = 0; i<linhas; i++){
        soma_matrizes [i] = []
        diferenca_matrizes[i] = []
        //gerando posições para ser colocado os números

        for(let j = 0; j<colunas; j++ ){
            soma_matrizes[i][j] = primeira_mat[i][j] + segunda_mat[i][j]
            diferenca_matrizes[i][j] = primeira_mat[i][j] - segunda_mat [i][j]
        } //soma e diferença das duas matrizes
    console.log(soma_matrizes[i][j])//exibindo resultado
    }

    for(let i=0;i<linhas;i++){
        console.log(diferenca_matrizes[i][j]) //exibindo resultado
    }
}

const exercicio_9 = ( ) =>{
    let mat = [], multiplicado = []

    for (let i=0; i<3; i++){
        mat[i] = []
        for(let j = 0; j<3; j++){
            mat[i][j] = Number((Math.random() * (30 - 1) + 1).toFixed(2))
            // a biblioteca Math randomiza valores de 1 a 30
            //Number pq o toFixed retorna string
        }
        console.log(mat[i]) //exibindo resultado
    } //for para gerar a matriz com floats

    let digito = Number(prompt('Digite um número para multiplicar: ')) //pede n°para o usuário
    
    for(let i=0; i<3; i++){
        multiplicado[i] = [ ]
        for(let j = 0; j<3; j++){
            multiplicado[i][j] = mat[i][j]*digito
        }
    } //for para a nova matriz gerada através da multiplicação
}

const exercicio_10 = ( ) =>{
    let mat = []
    const linhas = 5 , colunas = 5
    mat = gera_matriz_inteira(mat, linhas, colunas)
//inicializção do fundamental para o programa

    do{ //opção de menu, só encerra quando o usuário digita 0
        let escolha = Number(prompt('Escolha o que deseja fazer: \n1. Soma dos elementos da Linha 4 \n2. Soma dos elementos da Coluna 2 \n3. Soma dos elementos da diagonal principal \n4. Soma dos elementos da diagonal secundária \n5. Soma de todos elementos da matriz \n0. SAIR'))
        switch(escolha){ //switch case para cada alternativa do menu
            case 0:
                alert(`Programa Encerrado`)
            break
            
            case 1:
                let soma_linha4 = 0
                for (let j=0 ; j<colunas ; j++){
                    soma_linha4 += mat[4][j]
                }
                alert(`A soma dos itens da linha 4 é ${soma_linha4}`)
            break

            case 2:
                let soma_coluna2 = 0
                for(let i = 0; i<linhas ; i++){
                    soma_coluna2 += mat[i][2]
                }
                alert(`A soma dos itens da coluna 2 é ${soma_coluna2}`)
            break

            case 3:
                let soma_diagonal_principal = 0
                for(let i = 0; i<linhas ; i++){
                    soma_diagonal_principal += mat[i][i]
                }
                alert(`A soma da diagonal principal é ${soma_diagonal_principal}`)
            break

            case 4:
                let soma_diagonal_secundaria = 0
                for(let i = 0; i<linhas ; i++){
                    soma_diagonal_secundaria += mat[i][colunas-1-i]
                }
                alert(`A soma da diagonal secundaria é ${soma_diagonal_secundaria}`)
            break

            case 5:
                let soma_todos = 0
                for(let i = 0; i<linhas ; i++){
                    for(let j = 0; j<colunas ; j++){
                        soma_todos += mat[i][j]
                    }
                }
                alert(`A soma de todos os elementos da matriz é ${soma_todos}`)
            break

            default:
                alert(`Opção inválida, favor digitar um número dos listados... `)
            break

        }
    }while(escolha!=0)

}