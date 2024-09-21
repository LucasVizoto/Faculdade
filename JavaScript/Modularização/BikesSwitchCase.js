/* alteração no exercício pro próprio usuário entrar com o que ele quer fazer */

const bike = () =>{
    let bike = []
    let marcas=["CALOI", "SCOTT", "CANONDALE"] //Vetor com as marcas de Bike
    let opcao
    do{
        opcao = Number(prompt(`Digite \n 1. Cadastrar *UMA* Bike \n 2.Média de preços \n
         3.Bike mais antiga \n4.Bike Caloi \n5.Qtde Bikes aro 29
         \n6. Bikes maior quadro \n7.sair`))

         switch (opcao) {

            case 1:
            entradaDados(bike, marcas) //vetor bike como parametro para poder "Conversar" entre os mundos.
            //Marcas passado como paramentro pq o While usa 
                break

            case 2:
            //MEDIA DE PREÇO DE TODAS AS BIKES
            mediaPreco(bike)
                break

            case 3:
            //QUAL A BIKE MAIS ANTIGA
            maisAntigo(bike)
                break

            case 4:
            //QUAIS AS BIKES SÃO DA MARCA CALOI
            BikeCaloi(bike)
                break

            case 5:
            //QUANTAS BIKES POSSUEM ARO 29
            BikesAro29(bike)
                break

            case 6:
            //QUAL A BIKE COM MAIOR QUADRO
            BikeMaiorQuadro(bike)
                break

            case 7:
                break

            default: alert(`Opção Inválida`) 
                                        
        }
    }while (opcao!=7)
} //função modularizada

const entradaDados = (vetor, vetor2) =>{ //Nome diferente no parametro e mudando em baixo
        let obj = { // lembrar de sempre jogar um objeto para dentro do vetor
        marca: prompt(`Insira a marca da bike ${i+1}`).toUpperCase(), // toUpperCase joga tudo pra maiúsculo
        modelo: prompt(`Insira o modelo da bike ${i+1}`).toUpperCase(),
        quadro: Number(prompt(`Insira o quadro da bike ${i+1}`)),
        aro: Number(prompt(`Insira o arro da bike ${i+1}`)),
        ano: Number(prompt(`Insira o ano da bike ${i+1}`)),
        preco: Number(prompt(`Insira o preço da bike ${i+1}`))
       } 
            while(!vetor2.includes(obj[i].marca)){
                obj[i].marca = prompt(`Marca inválida, Insira o marca`).toUpperCase()
            } //tratamento de erro para caso marca inválida
             //Push do objeto no vetor depois de todo o tratamento de erro (lembrando que push joga pro final do vetor)
        vetor.push(obj)  //Puxa o Objeto para o vetor principal. No caso do programa que usa a função, vai jogar para    *"bikes"*
}

const mediaPreco = (vetor) => { //Modularização da Media dos preços
   let mediaPrecos = 0 //Declarando variável que só existe nesse mundo
    for(let i=0; i<vetor.length; i++){
        mediaPrecos+= vetor[i].preco //Cálculo da média de preço
    }

    if(vetor.length == 0){ alert(`Não há bikes cadastradas`)} //Verificação de erro para não dividir por 0
    else{console.log(`\nA média de preço das bikes é de ${mediaPrecos/vetor.length}`) //!!!!} 
}
}


const maisAntigo = (vetor) => { //Modularização do mais antigo
    if(vetor.length == 0){alert(`Bikes não cadastradas`)}//Verificação de erro para não usar 0
    else{
        let objmaisAntigo = vetor[0] //objeto recebendo o primeiro ponto do outro objeto. Se for mais antigo, mostra tudo
        for(let i=0; i<vetor.length; i++){
            if(vetor[i].ano<objmaisAntigo.ano){
                objmaisAntigo = vetor[i]
            } //verificar se é mais antigo e substituir no objeto 
        }
            console.log(`\nA bike mais antiga é do ano ${objmaisAntigo} `)//!!!!
    }
}

const BikeCaloi = (vetor) =>{ //Modularização da quantidade de bikes que possuem a marca Caloi
let modeloCaloi=[] //Declarando variável que só existe nesse mundo
    for(let i =0; i<vetor.length; i++){ 
        if(vetor[i].marca=="CALOI"){ //se bike for exatamente igual a CALOI
            modeloCaloi.push(vetor[i].modelo) //joga no vetor os modelos das bikes Caloi
        }
    }
    if(vetor.length == 0){alert(`Não existem bikes cadastradas`)} //Verificação de erro para não usar 0
    else{
    console.log(`\nAs bikes da marca Caloi são: ${modeloCaloi}`)//!!!!
    }
}

const BikesAro29 = (vetor) => { //Modularização da quantidade de bikes que possuem o aro 29
let  qtddAro29=0 //Declarando variável que só existe nesse mundo
    for(let i=0; i<vetor.length; i++){
        if(vetor[i].aro==29){
            qtddAro29++
        }
    }
    if(vetor.length == 0){ alert(`não existem bikes cadastradas`)} //Verificação de erro para não usar 0
    else{
    console.log(`\nA quantidade de bikes que possuem aro 29 é de ${qtddAro29}`)//!!!!
    }

    maiorQuadro = vetor[0].quadro //setando o primeiro para poder fazer comparação
    maiorQuadroModelo = vetor[0].modelo
     
}
const BikemaiorQuadro = (vetor) =>{
let maiorQuadro, maiorQuadroModelo=[]
    for(let i=0; i<vetor.length; i++){
        if(vetor[i].quadro>=maiorQuadro){
           maiorQuadro = vetor[i].quadro
           maiorQuadroModelo.push(vetor[i].modelo) 
        }
    }
    if(vetor.length == 0 ){alert(`Não foram cadastradas bikes`)}
    else{
    console.log(`\nA bike com maior quadro é a bike ${maiorQuadroModelo} tendo quadro ${maiorQuadro}`) //!!!!
    }
}