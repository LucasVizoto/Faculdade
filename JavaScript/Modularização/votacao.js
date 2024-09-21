/*Faça um programa em JS que guarde em um vetor dados de 5  partidos políticos: código, nome, sigla, presidente, nro de políticos
Em seguida, guarde em um vetor dados de 5 políticos: 
código do partido,
 nome do político, qtde de votos na eleição atual (inicie com 0) e cargo que ocupa

 Não é possível crias dois partidos com o mesmo código
 Não é possível cadastrar um político de um partido que não exista

Ao final, inicie uma votação, faça o cadastro de 10 votos, e atualize a qtde de votos do político. 
Não é possível votar em candidato que não exista, votar em um candidato de um partido errado.

Finalmente, mostrar os dados do político que teve mais votos.  */

const principal = () => {
    let vetPartido=[], vetPolitico=[]
    dadosPartido(vetPartido)
    dadosPolitico(vetPolitico, vetPartido)
    votacao(vetPolitico, vetPartido)
}

const dadosPartido =(vetor) => {
    for(let i = 0; i <5; i++){ //criar 5 partidos
        let objPartido ={
            codigo: String(prompt(`Informe o código do partido`)),
            nome: String(prompt(`Informe o nome do partido`)),
            sigla: String(prompt(`Informe a sigla do partido`)),
            presidente: String(prompt(`Informe o nome do presidente`)),
            nPoliticos: Number(prompt(`Informe o número de pessoas neste partido`))
            } //elicitação de requisitos
        while(vetor.some((item) => item.codigo == objPartido.codigo)){ //verificação com some para ver se existe, se já existe, informar um novo
            objPartido.codigo = String(prompt(`Código informado já existe, informe um  novo`))
        }    
        vetor.push(objPartido)
        }
        return vetor
}

const dadosPolitico = (vetor, vetor2) => {
    for(let i = 0; i <5;i++){
        let objPolitico = {
            codiP: String(prompt(`Insira o código do partido`)),
            nomeP: String(prompt(`Insira o nome do politico`)),
            qtddVotos: 0,
            cargo: String(prompt(`Insira o cargo do politico`))
        } //elicitação de requisitos
        while(!vetor.some(item => item.codiP == vetor2.codigo)){ //verificar se o código é válido
           objPolitico.codiP = String(prompt(`Cod invalido. Insira o codigo correto `)) 
        }
        vetor.push(objPolitico) //push no objeto
    }
    return vetor
}

const votacao = (politico) => {
    const maisVoted = {}
    for(let i =0; i<10; i++){

        let codPoli = String(prompt(`Insira o codigo Politico `))
        while(!politico.some(item => item.codiP == codPoli)) {
            codPoli = String(prompt(`Código inválido, favor inserir correto`))
        }

        const frilto = politico.filter(item => item.codigo == codPoli) // filter cria um vetor com o elemento inteiro com base no rolê encontrado

        let nomePoli = String(prompt(`Nome do político`))
        while(!frilto.some (item => item.nomeP == nomePoli)) { //verificação para ver se o nome do político é válido
            nomePoli = String(prompt(`Nome inválido, favor insira nome válido`))
        }

        politico.forEach(item => { //Variável que vai ser percorrida .forEach , item == cada elemento dentro do vetor, neste caso os elementos são os objs 
         if(item.nomeP == nomePoli && item.codiP == codPoli){ //se o elemento conter ambos , solicita a quantidade de votos que o candidato recebeu
            item.qtddVotos = Number(prompt(`Insira a quantidade de votos recebidos por este candidato`))
         }   
        });

        maisVoted = politico.sort((a, b) => b.qtddVotos - a.qtddVotos)[0] //sort
    }
  alert(`O politico mais votsado é o ${maisVoted.nomeP} com ${maisVoted.qtddVotos} votos`)  
}