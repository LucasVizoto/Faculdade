const votacao = () => {
let vetPartido = [], vetPoliticos = [], opcao
    do{
    opcao = Number(prompt(`Escolha \n 1. Cadastrar partido\n 2. Cadastrar Candidato\n 3. votar\n 4. Sair`))
    switch(opcao){
        case 1:
        cadastrarPartido(vetPartido)
            break


        case 2:
        cadastrarCandidato(vetPoliticos, vetPartido) 
            break


        case 3:
        votar(vetPoliticos)
            break


        case 4: alert(`Programa encerrado`)
            break


        default:
            alert(`!!!!!!!PEIDOU NA FAROFA VIADO!!!!!!!!`)                
    }
    }while(opcao!=4)
}

const cadastrarPartido = (vetor) => {
    //obtendo dados do ususário e criando objeto
    let objPartido = {
        codigo: String(prompt(`Informe o código do partido`)),
        nome: String(prompt(`Informe o nome do partido`)),
        sigla: String(prompt(`Informe a sigla do partido`)),
        presidente: String(prompt(`Informe o nome do presidente`)),
        nPoliticos: Number(prompt(`Informe o número de pessoas neste partido`))
    }
    //verificar se o codigo já existe em algum partido
    while(vetor.some(item => item.codigo == objPartido.codigo)){
        objPartido.codigo = Number(prompt(`Codigo já existente, informe novo código`))
    }
    //adiciona partido no vetor
    vetor.push(objPartido)
}

const cadastrarCandidato = (vetor, vetor2) => {
    let objPolitico = {
        codiP: String(prompt(`Insira o código do partido`)),
        nomeP: String(prompt(`Insira o nome do politico`)),
        qtddVotos: 0,
        cargo: String(prompt(`Insira o cargo do politico`))
    } //elicitação de requisitos
    while(!vetor.some(item => item.codiP == vetor2.codigo)){ //verificar se o código é válido
        (objPartido.length == 0 ? alert(`Sem partido`): alert(`Partido não existe`)  )
       objPolitico.codiP = String(prompt(`Cod invalido. Insira o codigo correto `)) 
    }
    vetor.push(objPolitico) //push no objeto
}

const votar = () => {

}