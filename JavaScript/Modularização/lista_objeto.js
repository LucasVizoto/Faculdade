function exemplo(){
   let objt = {
     codigo : 12,
     nome : "Derival",
     qtdd : 6,
     preco: 3.40
   }
}

function ex1(){
/*Usando objetos, faça um programa que solicite ao usuário que entre com os valores a, b e c . 
O programa deve calcular e mostrar o delta da fórmula de Báhskara*/
    let delta = {
        a : Number(prompt("Isira aqui o valor de A: ")),
        b: Number(prompt = ("Isira aqui o valor de B: ")), //solicitar informações pro usuário pela declaração do objeto
        c : Number(prompt = ("Isira aqui o valor de C: "))
    }
    alert(`O valor de Delta é ${delta.b**2-4*delta.a*delta.c}`) //Declaração da fómula usando o nome do objeto antes para sinalizar onde está o valor
    // **2 eleva ao quadrado
    console.log(delta)
}

function ex2(){
/* Usando Objeto, SEM USAR VETOR, faça um produtp que peça ao usuário entra com código, nome, p1 e p2 de 10 aluno. 
O progama deve exibir a média de cada aluno, bem como a média da turma*/     

   let soma=0
for(let i = 0; i<10;i++){ //loop com for para pedir os dados de 10 alunos
    let aluno = {
        codigo: Number(prompt("Digite o código do aluno: ")),
        nome: String(prompt("Digite o nome do aluno: ")), //String converte para  texto
        p1: Number(prompt("Digite a primeira nota do aluno: ")), //solicitação de dados
        p2: Number(prompt("Digite a segunda nota do aluno: "))
    }
    let media = (aluno.p1+aluno.p2)/2 //calcula média
    alert(`A média do aluno ${aluno.nome} é ${media}`) // media do aluno digitado no objeto
     soma += media //somar notas para pedir média depois
    }
    alert(`A média da turma é: ${media/10}`) //mostra a média da turma
}

function VetordeObjeto(){
//vetor de objetos em JS
        let filmes=[] //vetor que guarda os filmes 
    for(let i =0; i<4;i++){ //para cada filme
        //cria objeto filme
        let ObjtFilme = { // dentro do objetto apenas os valores específicos deste filme escolhido
         codigo: Number(prompt("Digite aqui o código do filme: ")),
         nome: prompt("Digite aqui o nome do filme "),
         etaria: Number(prompt("Digite aqui a classificação etária do filme ")),
         avaliacao: Number(prompt("Digite aqui sua nota sobre o filme ")),
         duracao: Number(prompt("Digite aqui a duração em minutos do filme "))
        } //o loop nn entra em conflito pois é guardado no vetor o valor do objeto como indivíduo e nn como nome do objeto
                                                                            //    vetor.push(objeto)
        filmes.push(ObjtFilme) //adiciona o Objeto criado no vetor filmes
    } //recomenda-se fazer separado para deixar as coisas bem definidas e organizadas

//---------------------------------------------------------------------------------------------------------------
    //media da classificação etária
    let mediaEtaria=0
    for(let i=0; i < 4; i++){
        mediaEtaria+=filmes[i].etaria
    }
    console.log(`A média etária dos filmes é de: ${mediaEtaria/i}`)
//---------------------------------------------------------------------------------------------------------------
    //filme mais longo e mais curto
    let filmeGrande , duracaoGrande=filmes[0].duracao, duracaoPequeno=filmes[0].duracao
    for(let i=0; i<4;i++){
        if(filmes[i].duracao>duracaoGrande){
            duracaoGrande=filmes[i].duracao
            filmeGrande=filmes[i].nome
        }
        if(filmes[i].duracao<duracaoPequeno){
            duracaoPequeno=filmes[i].duracao
            filmePequeno = filmes[i].nome
        }
    }
    console.log(`\nO filme mais longo é ${filmeGrande} e o menor é ${filmePequeno}`)
//---------------------------------------------------------------------------------------------------------------
    //melhor avaliação
    let maiorAva=filmes[0].avaliacao , nomeAva=filmes[0].nome //iniciar a variável com o primeiro valor ao invés de inicializar com valores fixos
    for(let i=0; i<4; i++){
        if(filmes[i].avaliacao>maiorAva){
            maiorAva=filmes[i].avaliacao
            nomeAva = filmes[i].nome 
        }
    }
    console.log(`\nO filme mais bem avaliado é o ${nomeAva}`)
//---------------------------------------------------------------------------------------------------------------
} //basicamente declara o vetor, declara objeto, .push pra jogar pro final e quando for buscar infomação usar o número da posição no vetor

/*Para chamar um iten de dentro desse objeto basta colocar o nome do vetor, a posição que deseja 
analisar em colchetes[], ponto a variavel a ser analisada

nome do Vetor[i].nome da variável
console.log(filmes[2].titulo) */


//---------------------------------------------------------------------------------------------------------------

/* Fazer um sistema para votação, entrar com 10 candidatos 
- código
- nome
- partido (PT, PSDB, PL, PSB)
 - qtdd de votos 
 1. Informar nome e partido do candidato mais votado
 2. A prtir de um partido informado peço usuário, mostre o mais votado*/
function urna(){
    let candidato = []
    let partido = [`PT`,`PSDB`,`PL`,`PSB`,`PCdoB`] //Vetor Pra registrar os únicos partidos disponíveis
    let CandidatoMaisV, QtddMaisVotados, partidoMais, PartidoInform, NomeCabaco
    for(let i = 0; i<10;i++){
        let candidato = {
            codigo: Number(prompt(`Digite o código do candidato: `)),
            nome: String(prompt(`Digite o nome do candidato: `)),
            partido1: String(prompt(`Digite o partido do candidato: `).toUpperCase()),
            qtddVotos: Number(prompt(`Digite a quantidade de votos do candidato: `))
        } //elicitação de Requisitos
            while(!partido.includes(candidato.partido1)){
            candidato.partido1 = String(prompt(`Partido Invalido. Digite o partido correto do candidato: `))
            } // Tratamento de erro para caso o Partido, dentro do objeto Candidato, não esteja no vetor já definido
            candidato.push(candidato) //push depois do tratamento de erro
    }
    CandidatoMaisV = candidato[0].nome
    QtddMaisVotados = candidato[0].qtddVotos
    partidoMais = candidato[0].partido1
    //Set de variáveis para fazer as comparações
    for(let i =0; i < 10; i++){
        if(candidato[i].qtddVotos>QtddMaisVotados){  //Se os votos dentro do objeto Candidato[i] é maior que a variável, muda o valor lá  dentro
            QtddMaisVotados = candidato[i].qtddVotos
            CandidatoMaisV = candidato[i].nome
            partidoMais = candidato[i].partido1
        }
    }
    console.log(`O candidato mais votado é ${CandidatoMaisV} com ${QtddMaisVotados} votos e é do partido ${partidoMais}`)
    let p = prompt("Informe um partido").toUpperCase()

                while(!partido.includes(p)){
                    p = prompt(`Informe um partido válido`).toUpperCase()
                } // Tratamento de erro para ver  se o partido é válido

    PartidoInform = 0
    NomeCabaco = "" // set das variávei spara começar comparações 

    for(let i =0; i<10; i++){
        if(candidato[i].partido1.includes(n)){ //Verificar se o candidato é do partido "p", se nn for passa direto
            if(candidato[i].qtddVotos>PartidoInform){ //Ver se é maior para substituir
                PartidoInform = candidato[i].qtddVotos
                NomeCabaco = candidato[i].nome
            }
        }
    }
    console.log(`O Candidato Mais votado do Partido ${n} é ${NomeCabaco} com ${PartidoInform} votos`)
}
//---------------------------------------------------------------------------------------------------------------

/*Faça um programa em JavaScript que solicite ao usuário dados de 10 bikes. Cada bike deve conter informações como marca,
 modelo, quadro, aro, ano e preço.
 Após a entrada de dados, o programa deve calcular e exibir ao usuário:

1) a média de preço das bikes !!!!

2) qual a bike é mais antiga, deve-se considerar empates !!!!

3) quais as bikes são do marca Caloi !!!!

4) quantas bikes possuem aro 29 !!!!

5) qual bike possui maior quadro, pode-se desconsiderar empates */

function bike(){
    let bike = [], mediaPrecos, modeloCaloi=[], qtddAro29=0, maiorQuadro, maiorQuadroModelo=[]
    let marcas=["CALOI", "SCOTT", "CANONDALE"] //Vetor com as marcas de Bike

    for(let i=0; i<10;i++){ 
    let obj = { // lembrar de sempre jogar um objeto para dentro do vetor
    marca: prompt(`Insira a marca da bike ${i+1}`).toUpperCase(), // toUpperCase joga tudo pra maiúsculo
    modelo: prompt(`Insira o modelo da bike ${i+1}`).toUpperCase(),
    quadro: Number(prompt(`Insira o quadro da bike ${i+1}`)),
    aro: Number(prompt(`Insira o arro da bike ${i+1}`)),
    ano: Number(prompt(`Insira o ano da bike ${i+1}`)),
    preco: Number(prompt(`Insira o preço da bike ${i+1}`))
   } 
        while(!marcas.includes(obj[i].marca)){
            obj[i].marca = prompt(`Marca inválida, Insira o marca`).toUpperCase()
        } //tratamento de erro para caso marca inválida
        bike.push(obj) //Push do objeto no vetor depois de todo o tratamento de erro (lembrando que push joga pro final do vetor)
    } //elicitação de requisitos

    //MEDIA DE PREÇO DE TODAS AS BIKES
    for(let i=0; i<bike.length; i++){
        mediaPrecos+= obj[i].preco //Cálculo da média de preço
    }
    console.log(`\nA média de preço das bikes é de ${mediaPrecos/bike.length}`) //!!!!

    //QUAL A BIKE MAIS ANTIGA
    let objmaisAntigo = bike[0] //objeto recebendo o primeiro ponto do outro objeto. Se for mais antigo, mostra tudo
    for(let i=0; i<bike.length; i++){
        if(bike[i].ano<objmaisAntigo.ano){
            objmaisAntigo = bike[i]
        } //verificar se é mais antigo e substituir no objeto 
    }
    console.log(`\nA bike mais antiga é do ano ${objmaisAntigo} `)//!!!!

    //QUAIS AS BIKES SÃO DA MARCA CALOI
    for(let i =0; i<bike.length; i++){ 
        if(bike[i].marca=="CALOI"){ //se bike for exatamente igual a CALOI
            modeloCaloi.push(bike[i].modelo) //joga no vetor os modelos das bikes Caloi
        }
    }
    console.log(`\nAs bikes da marca Caloi são: ${modeloCaloi}`)//!!!!

    //QUANTAS BIKES POSSUEM ARO 29
    for(let i=0; i<bike.length; i++){
        if(bike[i].aro==29){
            qtddAro29++
        }
    }
    console.log(`\nA quantidade de bikes que possuem aro 29 é de ${qtddAro29}`)//!!!!

    maiorQuadro = bike[0].quadro //setando o primeiro para poder fazer comparação
    maiorQuadroModelo = bike[0].modelo
    
    //QUAL A BIKE COM MAIOR QUADRO
    for(let i=0; i<bike.length; i++){
        if(bike[i].quadro>=maiorQuadro){
           maiorQuadro = bike[i].quadro
           maiorQuadroModelo.push(bike[i].modelo) 
        }
    }
    console.log(`\nA bike com maior quadro é a bike ${maiorQuadroModelo} tendo quadro ${maiorQuadro}`) //!!!!
}