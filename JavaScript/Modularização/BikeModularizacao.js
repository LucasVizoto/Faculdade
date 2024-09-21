function bike(){
    let bike = []
    let marcas=["CALOI", "SCOTT", "CANONDALE"] //Vetor com as marcas de Bike

    entradaDados(bike, marcas) //vetor bike como parametro para poder "Conversar" entre os mundos.
                                //Marcas passado como paramentro pq o While usa 
     //MEDIA DE PREÇO DE TODAS AS BIKES
    mediaPreco(bike)

    //QUAL A BIKE MAIS ANTIGA
    maisAntigo(bike)

    //QUAIS AS BIKES SÃO DA MARCA CALOI
    BikeCaloi(bike)

    //QUANTAS BIKES POSSUEM ARO 29
    BikesAro29(bike)

    //QUAL A BIKE COM MAIOR QUADRO
    BikeMaiorQuadro(bike)
} //função modularizada

function entradaDados(vetor, vetor2){ //Nome diferente no parametro e mudando em baixo
    for(let i =0; i<10; i ++){
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
}

function mediaPreco(vetor){ //Modularização da Media dos preços
   let mediaPrecos = 0 //Declarando variável que só existe nesse mundo
    for(let i=0; i<vetor.length; i++){
        mediaPrecos+= vetor[i].preco //Cálculo da média de preço
    }
    console.log(`\nA média de preço das bikes é de ${mediaPrecos/vetor.length}`) //!!!!
}


function maisAntigo(vetor){ //Modularização do mais antigo
     let objmaisAntigo = vetor[0] //objeto recebendo o primeiro ponto do outro objeto. Se for mais antigo, mostra tudo
    for(let i=0; i<vetor.length; i++){
        if(vetor[i].ano<objmaisAntigo.ano){
            objmaisAntigo = vetor[i]
        } //verificar se é mais antigo e substituir no objeto 
    }
    console.log(`\nA bike mais antiga é do ano ${objmaisAntigo} `)//!!!!
}

function BikeCaloi(vetor){ //Modularização da quantidade de bikes que possuem a marca Caloi
let modeloCaloi=[] //Declarando variável que só existe nesse mundo
    for(let i =0; i<vetor.length; i++){ 
        if(vetor[i].marca=="CALOI"){ //se bike for exatamente igual a CALOI
            modeloCaloi.push(vetor[i].modelo) //joga no vetor os modelos das bikes Caloi
        }
    }
    console.log(`\nAs bikes da marca Caloi são: ${modeloCaloi}`)//!!!!
}

function BikesAro29(vetor){ //Modularização da quantidade de bikes que possuem o aro 29
let  qtddAro29=0 //Declarando variável que só existe nesse mundo
    for(let i=0; i<vetor.length; i++){
        if(vetor[i].aro==29){
            qtddAro29++
        }
    }
    console.log(`\nA quantidade de bikes que possuem aro 29 é de ${qtddAro29}`)//!!!!

    maiorQuadro = vetor[0].quadro //setando o primeiro para poder fazer comparação
    maiorQuadroModelo = vetor[0].modelo
     
}
function BikemaiorQuadro(vetor){
let maiorQuadro, maiorQuadroModelo=[]
    for(let i=0; i<vetor.length; i++){
        if(vetor[i].quadro>=maiorQuadro){
           maiorQuadro = vetor[i].quadro
           maiorQuadroModelo.push(vetor[i].modelo) 
        }
    }
    console.log(`\nA bike com maior quadro é a bike ${maiorQuadroModelo} tendo quadro ${maiorQuadro}`) //!!!!
}