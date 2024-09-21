const gera_matriz= (mat, linhas, colunas) =>{
    for(let i=0; i<linhas; i++){
        mat[i] = []
        for(let j=0; j<colunas; j++){
            mat[i][j] = (Math.random() * (30 - 1) + 1).toFixed() //30 é o maior valor a ser sorteado, a subtração indica o menor
            mat[i][j] = Math.floor(mat[i][j]) //arredonda a String para o número inteiro mais próximo (o)
        }
    }
    return(mat) //retorna o valor
}

const exercicio_1 = () =>{
    let mat = [], linhas = 3, colunas = 5, qtdd_15_20 = 0
    mat = gera_matriz(mat, linhas, colunas)
    console.log(mat)
    for(let i=0; i<linhas; i++){
        for(let j=0; j<colunas; j++){
            if(mat[i][j]>=15 && mat[i][j]<=20){
                qtdd_15_20++
            }
        }
    }
    console.log(` A quantidade de numero entre 15 e 20 é ${qtdd_15_20} \n`)
}

const exercicio_2 = () =>{
let mat = [], linhas=2, colunas = 4, elemento_12_20_linhas = 0, soma_pares=0, qtdd_pares = 0
mat = gera_matriz(mat, linhas, colunas)//parametros
console.log(mat)
    for(let i = 0;i<linhas; i++){
        elemento_12_20_linhas = 0 // zera o valor quando colocad em uma nova linha
        for(let j=0; j<colunas; j++){
            if(mat[i][j]>=12 && mat[i][j]<=20){ //comparação para ver se está entre
                elemento_12_20_linhas++
            }

            if(mat[i][j]%2==0){ //verifica o módulo de mat[i][j]
                soma_pares+= mat[i][j]
                qtdd_pares++
            }
        }
        console.log(`A quantidade de elementos entre 12 e 20 na linha ${i+1} é ${elemento_12_20_linhas} \n`) 
        //console.log depois do for interno para não mostrar a mensagem toda hora e sim quando for criar uma nova linha
    }
console.log(`A média dos números pares dessa matriz é de ${(soma_pares/qtdd_pares).toFixed(2)}`) //toFixed(2) para mostrar apenas 2 casas após a vírgula, caso um número dê uma divisão racional
}


const exercicio_3 =()=>{
let mat = [], linhas = 6, colunas = 3, posicao_maior_i , posicao_maior_j, posicao_menor_i, posicao_menor_j
    mat = gera_matriz(mat, linhas, colunas)
    console.log(mat)    
    let maior_elemento = mat[0][0], menor_elemento = mat[0][0] //declara o menor e maior como o inicio para fazer a comparação
    for(let i=0; i<linhas; i++){ 
        for(let j=0; j<colunas; j++){

            if(mat[i][j]>maior_elemento){ //comparação do maior para substituição na variável
                maior_elemento = mat[i][j]
                posicao_maior_i = i
                posicao_maior_j = j
            }
            if(mat[i][j]<menor_elemento){
                menor_elemento = mat[i][j]
                posicao_menor_i = i
                posicao_menor_j = j
            }
        } //fecha colunas
    } //fecha linhas
    console.log(`O maior elemento é ${maior_elemento} e está na linha ${posicao_maior_i+1} e na coluna ${posicao_maior_j+1}`)
    console.log(`O menor elemento é ${menor_elemento} e está na linha ${posicao_menor_i+1} e na coluna ${posicao_menor_j+1} `)
}

const exercicio_4 =()=>{
    let mat = [], linhas=15 , colunas=5, nome_alunos=[], soma_média_alunos = 0 , soma_turma=0, situacao

    for(let i=0; i<linhas; i++){
        mat[i] = []
        nome_alunos[i] = prompt(`Digite o nome do aluno: `)
        for(let j=0; j<colunas ; j++){
            mat[i][j] = Math.floor((Math.random()*(10-1)+1).toFixed()) 
            //floor para converter de String para Interger. 
            //random para randommizar número e toFixed para arredondar
            soma_turma += mat[i][j]
        }
    }   //Não usei a funcao gera_matriz pois precisaria mudar o valor maximo do random para 10, e isso entraria em conflito com os demais códigos


    console.log(mat)

    for(let i=0; i<linhas; i++){
        soma_média_alunos = 0
        for(let j=0; j<colunas ; j++){
        soma_média_alunos+=mat[i][j] //olha a média de cada linha para dividir no console.log abaixo
        }

    if((soma_média_alunos/colunas) >= 6){ //if joga a string na variavel e diz se o aluno foi aprovado ou não
        situacao = 'APROVADO'
    }
    else{
        situacao = 'REPROVADO'
    }  

    console.log(`\nO aluno ${nome_alunos[i]} teve média ${(soma_média_alunos/colunas).toFixed(2)} e sua situação é de : ${situacao} `)
    //console log dentro do for para fazer com cada item. Dá pra fazer mauito masi facilmente com forEach, mas ainda não sei usar ksks
    }

    console.log(`\n\nA média da turma é de ${(soma_turma/(linhas*colunas)).toFixed(2)}`)
    
}

const exercicio_5 = () =>{
    let meses = {
        0: 'Janeiro',
        1: 'Fevereiro',
        2: 'Março',
        3: 'Abril',
        4: 'Maio',
        5: 'Junho',
        6: 'Julho',
        7: 'Agosto',
        8: 'Setembro',
        9: 'Outubro',
        10: 'Novembro',
        11: 'Dezembro'
    } //criação de uma listinha para chamar depois (dicionario) (obj)

let mat= [], linhas = 12, colunas = 4, soma_meses=0, total_ano=0
    //meses[i]
    mat= gera_matriz(mat, linhas, colunas)
    console.log(mat)
    for(let i=0;i<linhas;i++){
        soma_meses = 0
        for(let j=0; j<colunas;j++){
            soma_meses += mat[i][j]
            total_ano += mat[i][j]
        }
    console.log(`O total vendido no mês de ${meses[i]} é de R$${soma_meses.toFixed(2)} `)
    }
    console.log(`\nO total vendido no ano todo é R$${total_ano.toFixed(2)}\n`)
}

const exercicio_6 = ( ) => {

    let mat = [], linhas = 20 , colunas = 10, soma_colunas = [], valor_soma = 0
    mat = gera_matriz(mat, linhas, colunas)
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
    
    M = gera_matriz(M, linhas_m, colunas_m)
    N = gera_matriz(N, linhas_n, colunas_n)

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

    primeira_mat = gera_matriz(primeira_mat, linhas, colunas)
    segunda_mat = gera_matriz(segunda_mat, linhas, colunas)

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
    mat = gera_matriz(mat, linhas, colunas)
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