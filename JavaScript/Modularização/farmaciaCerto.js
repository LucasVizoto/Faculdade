/*Faça um programa em JS que guarde em um vetor dados de 5  farmacias: código, Nome e endereço 

Em seguida, guarde em um vetor dados de 10 remédios: código da farmácia, nome do remédio, qtde em estoque e preço

 Não é possível crias duas farmácias com o mesmo código

 Não é possível cadastrar um remédio de uma farmácia que não exista

Ao final, efetive a compra de 5 remédios, e atualize o estoque*/

/* 

let vetor = [2,4,6,8,10]
vetor.some((iten) => console.log(iten))  (some percorre o vetor. verificar se existe um item dentro do vetor)
             |      
        parametro        => arrow function chama função 

vetor.some((vetorFarmacia) => vetorFarmacia.codigo == obj3.codigo)       

.find (verifica e retorna o objeto que ele enontrou)  (retorna o item de parametro)

.some retorna se encontrou ou não (True ou False)

.filter retorna um novo vetor com as ocorrencias encontradas (Vetor com bglh)

.find | .some  |  .filter

functio soma (x,y) {
    console.log(x,y)
}

(x,y) => console.log(x+y)       função anonima com seta

*/

const principal = () => { //chma uma função
    let vetfarmacia = [], vetremedios = []
    DadosFarmacia(vetfarmacia)
    DadosRemedio(vetremedios, vetfarmacia)
    VendaRemedio(vetremedios)
}

const DadosFarmacia = (vetor) => {
    for (let i = 0; i < 5; i++) {
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
    }
    return vetor
}

const DadosRemedio = (vetor, vetor2) => {
    for (let i = 0; i < 10; i++) {
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
    }
    return vetor
}

const VendaRemedio = (vetor) => {
    let achou = false
    let objVenda = {
        codigo: Number(prompt(`Código do remédio`)),
        nome: String(prompt(`Nome do Remédio`)),
        qtdd: Number(prompt(`Quantidade a ser comprado`))
    }
    for (let i2=0; i2<5; i2++) { //realizar a compra de 5 remédios
        //percorre o vetor vetremedios procurando pelo código do remedio, e o nome
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





    let vet = ['um', 'dois', 'tres']

    let chosenIndex = vet.forEach((item, index, vetor) => { //explicação de forEach
        console.log(item) // 'um' 'dois' 'tres'
        console.log(index) // 0      1      2
        console.log(vetor) // ['um', 'dois', 'tres']
        if (item.nome == nomeV) {
            return index
        }
    })