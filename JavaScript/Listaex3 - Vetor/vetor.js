function ex1(){
    let qtddP=0 , qtddI=0 
    let arrPar=[],arrImp=[],num=[]

    for(let i = 0; i<6; i++){
    num[i]=Number(prompt(`Digite aqui ${i+1}º número: `))
        if(num[i]%2==0){
            qtddP++
            arrPar[i]=num[i]
        }
        else if(num[i]%2==1){
            qtddI++ //sobe a quantidade de vezes dentro deste ELSE IF
            arrImp[i]=num[i] //Coloca o valor digitado pelo usuário dentro do vetor principal
        }
        else{
            console.log("--!INVÁLIDO!--") //Tratamento de erro
        }
    }//sai do for
    console.log(`A quantidade de número Pares é de ${qtddP}\nTodos os pares digitados ${arrPar}`) //imprime no console 
    console.log(`A quantidade de número Ímpares é de ${qtddI}\nTodos os ímpares digitados ${arrImp}`)
    console.log(`\nA quantidade de itens dentro do vetor é de Ímpares é de: ${qtddI.length}`)
    console.log(`\nA quantidade de itens dentro do vetor é de pares é de: ${qtddP.length}`)
}

//----------------------------------------------------------------------------------------------------------------------

// .push insere na última posição do vetor (Ajuda pra não precisar ficar mexendo com índice)
function ex2(){
    let arr=[]; mult2=[]; mult3=[]; melt2e3=[]
    
    for(let i=0; i<7; i++){
        arr[i]=Number(prompt("Informe o elemento"))
    }
    for(i=0; i<7; i++){
        if( (arr[i]%2==0) && (arr[i]%3==0) ){ //Nesse if coloca em todos os Vetores, pois o número é mmc de 2 e 3
            mult2.push(arr[i]) 
            mult3.push(arr[i])                // Nome do vetor, .push pra colocar no final e o numero a ser pegado, no caso o nome do vetor no prompt (arr[i])
            mult2e3.push(arr[i])
        }
        if(arr[i]%2==0){ //Múltiplo de 2
            mult2.push(arr[i])
        }
        if(arr[i]%3==0){ // múltiplo de 3
            mult3.push(arr[i])
        }
    } //Fecha o for
    console.log(`Múltiplos de 2 ${mult2} com quantidade ${mult2.length}`)
    console.log(`Múltiplos de 3 ${mult3} com quantidade ${mult3.length}`) //length para mostrar quantos números estão dentro do vetor
    console.log(`Múltiplos de 2 e 3 ${mult2e3} com quantidade ${mult2e3.length}`)
}
//----------------------------------------------------------------------------------------------------------------------
function ex3(){
    //declaração dos vetores
let codigos=[]; estoque=[];  
    // entrada de 5 produtos
    for(let i =0; i<5; i++){
        codigos[i]=Number(prompt(`Informe o código do ${i+1}º produto`)) // i+1 pq os números da array iniciam em 0, ou seja, 0 = 1º
        estoque[i]=Number(prompt(`Informe o código do ${i+1}º produto`))
        }
        let cliente = Number(prompt(`Informe o código do cliente (digite 0 para encerrar)`))

        while(cliente!=0){
        //vamos perguntar o que ele quer comprar
                let cod = Number(prompt(`Qual o código do produto para compra ?`))
                let qtdd = Number(prompt(`Qual a quantidade deseja comprar?`))
                //Vamos procurar pra ver se o código existe 
                let achou = false
                for(let i=0; i<4;i++){
                    if(cod == codigo[i]){
                    //produto encontrado (caso feliz)
                        achou = true
                    if(estoque[i]<=qtdd){
                    estoque[i] -=qtdd //atualiza o estoque | -= é a mesma coisa que estoque[i] = estoque[i] - qtdd    
                    }
                    else{  //tratamento de erro
                        alert("--!ESTOQUE INSUFICIENTE!--")
                    } 
                }
            }
            if(!achou){ 
                alert("--!PRODUTO NÃO EXITE!--")
            }
            /* Se não encontrou o Código digitado dentro do Vetor, executa este trataamento de erro
            ! representa negação
            Foi declarada a variável como falsa, se encontrou, ela se torna verdadeira
            e executa o resto
            */
             cliente = Number(prompt(`Informe o código do cliente (digite 0 para encerrar)`))
        } // encerra While
    console.log(estoque) //imprime no console o estoque
}
//----------------------------------------------------------------------------------------------------------------------
function ex4(){
    let arr=[]
    let num
    for(let i = 0; i <=15; i++){
        num = Number(prompt("Insira aqui um valor: ")) 
        arr[i]=num //Vetor recebe o número digitado
        if(num==30){ // == pra condição ser exatamente o númeo 30 (= significa recebe)
           console.log(arr.length)        // imprime no console o comprimento do vetor, como está dentro do for, isso vai se repetir conforme o i aumenta
        }
    }
    alert("As posições do vetor na qual este é exatamente iguala 30 estão impressas no console") // aviso para olhar o console
}
//----------------------------------------------------------------------------------------------------------------------
function ex5(){
    let alunoLogica=[], alunoProg=[]
    let codigo
    for(let i=0; i<=15; i ++){
        codigo=Number(prompt("Insira aqui o código do(a) aluno(a) que cursa Lógica de Programação: "))
        alunoLogica.push(codigo)
    } //for para solicitar o codigo do(a) aluno(a) e inserir este no vetor
    for(let i =0; i<=10; i++){
        codigo=Number(prompt("Insira aqui o código do(a) aluno(a) que cursa Programação de Computadores"))
        alunoProg.push(codigo)
    } //for para solicitar o codigo do(a) aluno(a) e inserir este no vetor
for(let cont = 0; cont<alunoLogica.length; cont++){ //For para analisar se um número está em ambos os vetores, baseado em comparações realizadas dentro dos "for"
    for(i=0;i<alunoProg.length;i++){
        if(alunoLogica[cont]==alunoProg[i]){ 
            /*Se o aluno[cont] (a variável é diferente pois enquanto o i cresce, o cont cresce mais devagar, por estar fora da segunda repetição)
            for igual a alunoProg[i] (i cresce de forma mais rápida, logo a comparação seria feita com todos os número de alunoProg)*/
            console.log(`\n\nO aluno ${alunoLogica[cont]} está matriculado em ambos os cursos!`) //imprime no console o código do(a) aluno(a) que esá em ambos os cursos 
        }
    }
 }
}
//----------------------------------------------------------------------------------------------------------------------
// o exercício 5 pode ser feito assim também
function exe5(){
    let alunoLogica=[], alunoProg=[]
    let codigo
    for(let i =0; i<10;i++){
        codigo =Number(prompt("Informe aluno que faz lógica"))
    }
    for(let i =0; i<10;i++){
            codigo =Number(prompt("Informe aluno que faz programação"))
        }
   // verificar alunos que fazem disciplinas em comum
   let comum=[]     
   for(let i =0; i<10;i++){ // para cada aluno que faz lógica
    //verificar se está em Linguagem também
    if(alunoProg.includes(alunoLogica[i])){ //função que analisa no vetor alunoProg se possui alunoLogica ".includes()" 
        comum.push(alunoLogica[i]) // adicioina ao vetor "comum"
    }
   }
   console.log(`Alunos que fazem ambas são ${comum}`)
}
//----------------------------------------------------------------------------------------------------------------------
function ex6(){
    let nomes = [], salario=[]
    //entrada de dados
    for(let i =0; i<10;i++){
        nomes[i]= prompt("informe nome: ")
        salario[i]= Number(prompt("informe salario: "))
    }
    //calcular maior e menor salário
    let maior = salario[0]
        let menor = salario[0]
        for(let i =0; i<10;i++){
            if(salario[i]>maior){
                maior = salario[i] //atauliza maior
            }
            if(salario[i]<menor){
                menor = salario[i] //atualiza menor
            }
        }
        let nomeMaior=nomes[salario.indexOf(maior)] //indexOf diz a posição do valor requisitado
        let nomeMenor=nomes[salario.indexOf(menor)]
        console.log(`${nomeMaior} vai receber o maior salário ${maior}`)
        console.log(`${nomeMenor} vai receber o menor salário ${menor}`)
}
//----------------------------------------------------------------------------------------------------------------------
function desafio(){
    let codigo=[], aluno=[], aux // declaração de variáveis
    
    for(let i=0;i<5;i++){
        
        aux = Number(prompt(`insira aqui o código do(a) aluno(a)`)) 
        
        while(codigo.includes(aux)){// procura o que tem dentro de aux pra ver se tem dentro do vetor
            aux= Number(prompt(`Código informado já existe, informe um novo`))
        } // Vai ficar no while até inserir um valor diferente

        codigo.push(aux) //recebe auxiliar pois este passou pela "peneira" do while
        aluno[i] = prompt(`insira aqui o Nome do(a) aluno(a): `)

    } //fecha for
    console.log(codigo)
    console.log(nome)
    
    /*peça ao usuário para entrar com o código de um aluno
     mostre o nome do(a) aluno(a) caso seja um código cadastrado*/
    let existe = Number(prompt(`Insira aqui um código de um aluno: `))
        if(codigo.includes(existe)){
        let codigoNome = nome[codigo.indexOf(existe)] //indexOf está inserido no i do vetor de nomes para selecionar o valor referente de ambas as variáveis 
         alert(`O nome do(a) aluno(a) ${existe} é ${codigoNome}`)//codigoNome recebeu o nome do código digitado e foi escrito aqui   
        }
        else{
        alert(`O código informado não se encontra no vetor`)    
        }
}
//----------------------------------------------------------------------------------------------------------------------
function ex7(){
    let numero, soma=0, contNegativ=0, vetorNumero=[] //declaração das variáveis
    for(let i=0;i<10;i++){
            numero=Number(prompt(`Insira um número: `))
                if(numero<0){ //se numero menor que 0
                    vetorNumero.push(numero) //adiciona número negativo no final
                    contNegativ++ //Conta a quantidade de numeros negativos
                }
                else if(numero>0){ //se numero maior que 0
                    vetorNumero.push(numero) //adiciona número positivo no final
                    soma+=numero
                }  
    } // fecha o for
    console.log(vetorNumero) //mostra o vetro no console
    console.log(`\nA soma dos numeros positivos do vetro acima é de: ${soma}`) //pula linha e mostra soma
    console.log(`\nE a quantidade de numeros negativos dentro deste vetor é de: ${contNegativ}`) //pula linha e mostra quantidade
}
//----------------------------------------------------------------------------------------------------------------------
function ex8(){
    let nomeAlunos=[], MediaAlunos=[]
    let maiorMédia=0 // variável para verificar qual é maior (iniciada em 0)
    let contadorFalta = 0 // variável para contar quantos pontos faltaram para o aluno estar na média
    for(let i=0;i<7;i++){
        nomeAlunos[i] = prompt(`Insira o nome do(a) aluno(a): `)
        MediaAlunos[i] = Number(prompt(`Insira o media do(a) aluno(a) ${nomeAlunos[i]}`))  
            if(MediaAlunos[i]>maiorMédia){
                maiorMédia=MediaAlunos[i]
     /*verificação para comparar o valores digitados, se o valor digitado 
     for maior do que o que está dentro, subtititui*/
            }
            if(MediaAlunos[i]<7){ //mostrar quanto falta para chegar na média
                quantoFalta = MediaAlunos // Variável auxilar para fazer a comparação sem perder o valor
                while(quantoFalta<7){ //loop para somar e ver quanto falta
                    quantoFalta++
                    contadorFalta++
                } // fecha while
            console.log(`Para o aluno ${nomeAlunos[i]}, falta ${contadorFalta} pontos para estar na média`) // imprime no console a quantidade de pontos que faltam para o aluno digitado entrar na média 
            } // fecha if
    }
   let NomeMaior = nomeAlunos[MediaAlunos.indexOf(maiorMédia)] //indexOf busca a posição do valor na variável dentro do vetro, por isso ele está no indice deste vetor
   console.log(`O nome do(a) aluno(a) com a maior média é ${NomeMaior}, e sua média é: ${maiorMédia}`)
}
//----------------------------------------------------------------------------------------------------------------------
function ex9(){
    let nomeProdutos=[], codigoProdutos=[], precoProdutos=[] //declaração de variaveis
    for(let i=0;i<10;i++){
        nomeProdutos[i]= prompt(`Insira o nome do produto: `) //pegar o nome dos dez produtos
        codigoProdutos[i]= Number(prompt(`Insira o código do produto: `))
        precoProdutos[i] = Number(prompt(`Insira o preço do produto: `))

        if(codigoProdutos[i]%2==0){ //analisa a a condição para mostrar o aumento
            precoProdutos[i] += precoProdutos[i]*0.15 //pega o valor antigo e adiciona 15% , ou 0.15
        }
        else if(precoProdutos[i]>1000){ // analisa a a condição para mostrar o aumento
            precoProdutos[i] += precoProdutos[i]*0.10 //pega o valor antigo e adiciona 10% , ou 0.10
        }
        if((codigoProdutos[i]%2==0) && (precoProdutos[i]>1000)){ // if satisfaz as duas, para sobrepor o outro if. Caso colocasse Else If não rodaria este trecho
            precoProdutos[i] += precoProdutos[i]*0.20 //pega o valor antigo e adiciona 20% , ou 0.20
        }
    } // fecha for
console.log(`Nomes dos produtos listados são: ${nomeProdutos}
        \nO código dos produto são, respectivamente: ${codigoProdutos}
        \nO preço dos produto são, respectivamente: ${precoProdutos}`) // imprimir no console os resultados obtidos (shift + enter, para quebrar linha no código no VSCode)
    }
//----------------------------------------------------------------------------------------------------------------------
function ex10(){
   let  vetor10=[]; vetor5=[]; vetorResult1=[]; vetorResult2=[]
   let aux
   for(let i=0;i<5;i++){
    vetor5[i] = Number(prompt(`Insira aqui um número Para o Vetor de 5 posições: `)) // coletar 5 valores
    }
   for(let i2 = 0;i2<10;i2++){
    vetor10[i2] = Number(prompt(`Insira aqui um número Para o Vetor de 10 posições: `)) // coletar 10 valores
      
    if(vetor10[i2]%2==0){ // se vetor10 dividido por 2 der resto 0 (par), execute
        aux = vetor10[i2] // auxiliar para não perder o valor digitado dentro do vetor
            for(i=0; i<5; i++){ //for para repetir a conta até que o índice seja 5
               aux = aux*vetor5[i] // multiplicação do auxiliar com os valores de dentro do vetor menor
            } // fecha for dentro do if
        vetorResult1.push(aux) // adicion no vetor o valor obtido dentro do for inicializado
        } // fecha if dos pares

    if(vetor10[i2]%2==1){ // se vetor10 dividido por 2 der resto 1 (impar), execute
        aux=vetor10[i2] 
            for(i=0; i<5; i++){ // for para repetir a conta até que o ´[indice seja 5]
                aux = aux*vetor5[i]
            }
        vetorResult2.push(aux)    
    }//fecha if dos pares    
   }// fecha o big for
console.log(`O vetor resultande dos numeros ímpares digitados no vetor10[] são ${vetorResult2}`)
console.log(`O vetor resultande dos numeros pares digitados no vetor10[] são ${vetorResult1}`)   
}
//----------------------------------------------------------------------------------------------------------------------
function ex11(){
    let vetorPrincipal=[]; vetorResultPar=[]; vetorResultImpar=[] // declaração de variáveis

    for(let i=0;i<10;i++){ // repetição para pedir 10 números
        vetorPrincipal=[i] = Number(prompt(`Insira aqui um valor`)) // Pedir valor ao Usuário
    
         if((vetorPrincipal[i]%2==0)){ // comparação para ver se é par, se for adiciona no vetor de Pares
            vetorResultPar.push(vetorPrincipal[i])
        } 
         if(vetorPrincipal[i]%2==1){ // comparação para ver se é impar, se for adiciona no vetorde Ímpares
            vetorResultImpar.push(vetorPrincipal[i])
        }
    }
console.log(`Os Números pares digitados são ${vetorResultPar}`)  // Imprime no console os o vetro dos pares
console.log(`Os Números impares digitados são ${vetorResultImpar}`)// imprime no console o vetor de Ímpares
}
//----------------------------------------------------------------------------------------------------------------------
// tentativa de fazer o 11 com .includes
function tent11(){
    let n; vetorResultPar=[]; vetorResultImpar=[] // declaração de variáveis

    for(let i=0;i<10;i++){ // repetição para pedir 10 números
        n = Number(prompt(`Insira aqui um valor`)) // Pedir valor ao Usuário

       while((vetorResultPar.includes(n))||(vetorResultImpar.includes(n))){ // operador (OU ||) para incluir os dois vetores
    //condição para loopar o usuário enquanto o valor digitado já existir dentor de um dos vetores
       alert(`O número ${n} já existe em um dos vetores, favor digitar outro`) 
       n = Number(prompt(`Insira aqui um valor`)) // Pedir valor ao Usuário
       }

         if((n%2==0)){ // comparação para ver se é par, se for adiciona no vetor de Pares
            vetorResultPar.push(n)
        } 
         if(n%2==1){ // comparação para ver se é impar, se for adiciona no vetorde Ímpares
            vetorResultImpar.push(n)
        }
    }
console.log(`Os Números pares digitados são ${vetorResultPar}`)  // Imprime no console os o vetro dos pares
console.log(`Os Números impares digitados são ${vetorResultImpar}`)// imprime no console o vetor de Ímpares
}
//----------------------------------------------------------------------------------------------------------------------
function ex12(){
    let vetorValores=[]
    let soma=0

    for(let i=0; i<5;i++){
        vetorValores[i] = Number(prompt(`Digite o ${i+1}º número: `)) // coletar 5 valores
        console.log(`Digite o ${i+1}º número: ${vetorValores[i]}`) //imprime no console o requisitado pelo exercício
        soma += vetorValores[i] // variável de soma
    }
    i=0 // coloca o índice como 0 para serem colocador os valores dentro do console.log
    console.log(`Os números digitados foram: ${vetorValores[i]} + ${vetorValores[i+1]} + ${vetorValores[i+2]} + ${vetorValores[i+3]} + ${vetorValores[i+4]} = ${soma}`)
}
//----------------------------------------------------------------------------------------------------------------------