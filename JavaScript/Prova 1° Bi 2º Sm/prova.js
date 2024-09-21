
/*Utilizando-se de funções, passagem de parâmetros, e uma função principal contendo um menu de opções, faça um programa em JavaScript para gerenciar álbuns e figurinhas, contendo as seguintes tarefas:

1. Cadastrar 1 álbum, contendo o id,o nom e, e a empresa que faz o álbum . Não se pode cadastrar dois álbuns com o mesmo id, nem com o mesmo nome.

2. Cadastrar 1 figurinha, contendo o número, o nome, o time, a quantidade (inicialmente é 0) e o id do álbum. Não se pode cadastrar duas figurinhas com o mesmo número. Também não é possível cadastrar uma figurinha em um álbum que não exista

3. Comprar 1 figurinha, informando o número desta, o id do álbum, e atualizando a quantidade. Verifique se a figurinha existe

4. Trocar 1 figurinha, informando os números das figurinhas e os ids dos álbuns que serão trocadas (atualize os estoques). Verifique se as figurinhas existem

5. Calcular e mostrar todas as figurinhas que tem para troca (quantidade maior que 1)

6. Calcular e mostrar qual figurinha tem maior quantidade, exibindo o nome e empresa do álbum, bem como o nome e o time da figurinha

7. Sair */

const provaPrincipal =()=>{
    let albuns = [], figurinhas=[]
    let opcao = Number(prompt(`Digite aqui a opção que deseja realizar: \n 1. Cadastrar Álbum \n 2. Cadastrar Figurinha \n 3. Comprar Figurinha
    \n 4. Trocar Figurinha \n 5. Calcular e Mostrar todas as FIgurinhas para Troca \n 6. Calcular e Mostrar qual figurinha tem maior quantidade \n 7. SAIR`))
    do{
        switch(opcao){
            case 1:
                cadastrarAlbum(albuns)
                break
            case 2:
                cadastrarFig(figurinhas, albuns)
                break
            case 3: 
                compraFig(figurinhas)
                break
            case 4:
                trocaFig(figurinhas)
                break
            case 5:
                calcularTroca(figurinhas)
                break   
            case 6:
                maiorqtdd(figurinhas, albuns)
                break
            case 7:
                break
            default:
                alert(`OPÇÃO INVÁLIDA`)
        }
    }while (opcao!=7)
}

const cadastrarAlbum = (vetor)=> {
    let album = {
        id: Number(prompt(`Digte o ID desse album a ser Cadastrado`)),
        nome: String(prompt(`Digite o nome deste album a ser cadatrado`)),
        empresa: String(prompt(`Digite o nome da empresa que produziu este album`))
    }
    while(vetor.some((item) => item.id == album.id)){
        album.id = Number(prompt(` ID de album já cadastrado, entre com o ID correto`))
    }
    while(vetor.some((item) => item.nome == album.nome)){
        album.nome = String (prompt(`Nome de album já existente, favor digite um novo`))
    }
    vetor.push(album)
    return vetor 
}

const cadastrarFig = (vetor, vetor2) =>{
    let figurinha= {
        numero: Number(prompt(`Digite o número da figurinha`)),
        nome: String (prompt(`Digite o nome da figurinha`)),
        time: String(prompt(`Insira o time desta figurinha`)),
        qtdd: Number(prompt(`Insira a quantidade de figurinhas  disponíveis`)),
        idAlbum: Number(prompt(`Insira o ID do album que esta figurinha será cadastrada`))        
    }
    while(vetor.some((item) => item.numero == figurinha.numero)){
        figurinha.numero = Number(prompt(`Numero de figurinha já existente, favor digitar um novo`))
    }
    while(!vetor2.some((item) => item.id == figurinha.idAlbum)){
        figurinha.idAlbum = Number(prompt(`ID de album inexistente, favor informar um novo`))
    }
    vetor.push(figurinha)
    return vetor
}

const compraFig= (vetor)=>{
    let achou = false
    let compra ={
        numero: Number(prompt(`Informe o numero da fig que deseja comprar`)),
        idAlbum: Number(prompt(`Informe o ID do album desta fig`)),
        qtdd: Number(prompt(`Informe a quantidade de figs que deseja comprar`))
    }
    if(vetor.length== 0){ alert(`Não há figurinhas cadastradas`)}
    else{
        for(let i=0; i<vetor.length; i++){
            if(vetor[i].numero == compra.numero && vetor[i].idAlbum == compra.idAlbum){
                achou = true
                if(vetor[i].qtdd >= compra.qtdd){
                    vetor[i] -= compra.qtdd
                }
                else{alert(`Quantidade em estoque insuficiente`)}
            }
        }
        if(!achou){alert(`Figurinha não encontrada`)}
        return vetor
    }
}

const trocaFig=(vetor)=>{
let achou = false
let trocaDado = {
    numero: Number(prompt(`Informe o número da fig que deseja trocar`)),
    idAlbum: Number(prompt(`Informe o ID do albun desta fig`))
}
let trocaRecebido = {
    numero: Number(prompt(`Informe o número da fig que deseja trocar`)),
    idAlbum: Number(prompt(`Informe o ID do albun desta fig`))
}
 if(vetor.length == 0){alert (`Não há figs cadastradas`)}
    else{
        for(let i=0; i<vetor.length;i++){
            if(vetor[i].numero == trocaDado.numero && vetor[i].idAlbum == trocaDado.idAlbum){
                for(let j=0; j<vetor.length; j++){
                if(vetor[j].numero == trocaRecebido.numero && vetor[j].idAlbum == trocaRecebido.idAlbum){
                    achou = true
                    vetor[i].qtdd--
                    vetor[j].qtdd++
                }
                }
                if (!achou){alert(`Recebido não encontrado`)}
            }
        }
        return vetor
    }
}
const calcularTroca =(vetor)=>{
    let soma = 0
    for(let i=0; i<vetor.length; i++){
        if(vetor[i].qtdd > 1){
         soma+= vetor[i].qtdd-1   
        }
    }
    alert(`A quantidade total de figurinhas disponíveis para troca é ${soma}`)
}
const maiorqtdd = (vetor, vetor2) =>{
    let maior = vetor[0].qtdd, nmaior =0
    for(let i=0; i<vetor.length; i++){
        if(vetor[i].qtdd>maior){
            maior = vetor[i].qtdd
            nmaior=i
        }
    }
    for(let i=0; i<vetor.length; i++){

    }

alert(`A figurinha com maior quantidade é a ${vetor[nmaior].nome} com ${maior} figurinhas. Do album ${vetor2[nmaior].nome} da empresa ${vetor2[nmaior].empresa}. Do time ${vetor[nmaior].time}`)
} //Não tive tempo de revisar e comentar o código, desde já peço perdão pelas monstruosidades que o senhor vai encontrar aqui. Boa sorte Dani :)
