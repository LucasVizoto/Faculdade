const principal = () => { //chma uma função
    let vetfarmacia = [], vetremedios = []
    let opcao = Number(prompt(`Digite \n 1.Cadastrar uma farmácia \n2.Cadastrar remédio \n3.Comprar remédio\n4.Sair`))
    do{
        switch(opcao){
            case 1 :
                DadosFarmacia(vetfarmacia)
                break
                
            case 2:
                DadosRemedio(vetremedios, vetfarmacia)
                break
                
            case 3:
                VendaRemedio(vetremedios)
                break
                
            case 4:
                break
                
            default:
                alert(`Opção inválida`)
        }
        }while(opcao!=4)

}

const DadosFarmacia = (vetor) => {
        let obj = {
            codigo: String(prompt(`Informe o código da ${i + 1}º farmacia `)),
            nome: String(prompt(`Informe o nome da ${i + i}º farmacia `)),
            endereco: String(prompt(`Informe o endereço ${i + i}º farmacia`))
        }
        //verificar se o codigo da nova farmacia está no vetor
        while (vetor.some((farm) => farm.codigo == obj.codigo)) {
            //farm é o elemento do vetor e tu nomeia o rolê. Arrow cria função e cria a comparação que queria fazer (ver se o rolê do farm.codigo é igual a obj.codigo)
            obj.codigo = String(prompt(`O código informado já existe, informe novo`))
        }
        vetor.push(obj)
    return vetor
}

const DadosRemedio = (vetor, vetor2) => {
        let obj = {
            codFarm: String(prompt(`Insira aqui o código da farmacia deste remédio `)),
            nome: String(prompt(`Insira aqui o nome do remédio`)),
            qtddEstoq: Number(prompt(`Insira aqui a quantidade em estoque deste remédio`)),
            preco: Number(prompt(`Insira aqui o preço do remédio`))
        }
        while (!vetor2.some((item) => item.codFarm == obj.codFarm)) {
            //se item.codigo da farmacia for identico ao codigo da farm´qacia dentro de qualquer objeto (qualquer pq .some percorre o vetor)
            obj.codFarm = String(prompt(`Dodigo invalido, favor informe novo`))
        }
        vetor.push(obj) //joga pro final do vetor
    return vetor
}

const VendaRemedio = (vetor) => {
    let achou = false
    let objVenda = {
        codigo: Number(prompt(`Código do remédio`)),
        nome: String(prompt(`Nome do Remédio`)),
        qtdd: Number(prompt(`Quantidade a ser comprado`))
    }
    if(vetor.lenghth==0){alert(`Não há remédios cadastrados`)}
    else{
        for (let i = 0; i < vetor.length; i++) {
            if (vetor[i].codFarm == objVenda.codigo && vetor[i].nome == objVenda.nome) {
                //percorre o vetor comparando se o código da farmácia é idêntico ao codigo digitado no objeto *E* o mesmo para o nome
                achou = true // se achou os dados podemos efetuar a venda
                if (vetor[i].qtddEstoq >= objVenda.qtdd) { //Verifica se o estoque disponível é maior ou igual ao digitado pelo usuário
                    vetor[i].qtddEstoq -= objVenda.qtdd //tira do estoque
                }
                else {
                    alert(`Estoque insuficiente para essa venda`) //else para não encontrado e não ter satisfeito a condição
                }
            }
        }
        if (!achou) { //se não achou
            alert(`Produto não encontrado`) //alert fora do for pra mensagem não aparecer toda hr
        }
        return vetor
    }
} 
