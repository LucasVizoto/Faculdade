function prova(){
 /*   Faça um programa que receba dados de 10 posts, com os dados a seguir, e
  coloque cada dado em um vetor diferente:  título, descrição, usuário (autor) e qtdeLikes
Durante a entrada dos dados, o usuário não pode ser repetido, bem como a quantidade não pode ser negativa.

Após a entrada de dados, o programa deve permitir que se façam 5 mudanças nos posts, informando o usuário.
 Se o usuário não existir, cancelar a mudança. Se o usuário existir, solicitar se a mudança vai aumentar ou diminuir a qtde de likes, 
informando também o valor. Para aumentar, não há restrição. Para diminuir, verificar se a quantidade de likes não ficará negativa.

Ao final, o programa deve mostrar os títulos e descrições dos posts com maior e menor quantidade de likes. */

let titulo=[], descricao=[], usuario=[], qtddLikes=[] // declaração dos vetores
let aux, continua, maior, menor
for(let i=0; i<10;i++){ // for para receber os 10 posts

    aux = prompt(`Escreva aqui o usuario do ${i+1}º post: `) // solicitar pela auxiliar para poder verificar

    while(usuario.includes(aux)){ // loop de repetição para ver se o usuário já exite ou não
        alert(`O usuário informado já existe! Favor informar um novo`)  
        aux = prompt(`Escreva aqui o usuario do ${i+1}º post: `) // solicitar novamente uma informação para não ser um loop infinito
        }
        while(qtddLikes[i]<0){ // loop para prender o usuário ENQUANTO o valor digitado for negativo
        alert(`Quantidade de likes inválida, favor, inserir número positivo`)    
        qtddLikes.push(prompt(`Escreva aqui a quantidade de likes que o ${i+1}º post recebeu: `))  // solicitar novamente uma informação para não ser um loop infinito
        }
    
    titulo.push(prompt(`Escreva aqui o título do ${i+1}º post: `))
    descricao.push(prompt(`Digite qui a descrição do ${i+1}º post: `))
    usuario.push(aux) //valor já digitado para realizar a comparação
    qtddLikes.push(prompt(`Escreva aqui a quantidade de likes que o ${i+1}º post recebeu: `))

//solicitado os dados ao usuário

 do{ // do while para ter a possibilidade do usuario não querer alterar
    let i=0
    i++
    continua = prompt(`Você deseja realizar alterações em algum post? \n.Digite 1 para sair deste campo`) 
    let usuarioMUDANCA = prompt(`Informe aqui o usuário que deseja alterar: `) // usuario que deseja mudar
    if(usuario.includes(usuarioMUDANCA)){
        let mudar = Number(prompt(`A mudança será no número de likes? \n.Digite 0 para NÃO\n.Digite 1 pra SIM`)) // condição para ver se quer mudar a quantidade de Likes
        switch (mudar){
            case 1:
            qtddLikes[usuario.indexOf(usuarioMUDANCA)] = Number(prompt(`Insira aqui o novo valor a ser colocado na quantidade de likes do post:`)) // muda o valor da quantidade de likes correspondente ao usuário (indexOf)
            while(qtddLikes[i]<0){ // loop para prender o usuário ENQUANTO o valor digitado for negativo
                alert(`Quantidade de likes inválida, favor, inserir número positivo`)    
                qtddLikes[usuario.indexOf(usuarioMUDANCA)](prompt(`Escreva aqui a quantidade de likes que o post recebeu: `))  // solicitar novamente uma informação para não ser um loop infinito
                }
            
            break

            case 0: //encerra esse Escolha se for digitado 0
            alert(`Programa encerrado!`)
            break
            
            default: // caso seja digitado qualquer outro valorque não seja 1 e 0
            alert(`--! OPÇÃO INVÁLIDA !--`)    
        }
    }    
    else{
    alert(`Usuário informado não existe, informar novo`)
      i--    //Retira um no i para o programa não parar antes dos 5 (pois a soma já foi feita acima)
    } 
 }while((continua!=1) && (i<5)) //só permitir 5 mudanças e valor digitdo em continua for diferente de 1 (duas condições de encerramento)

 } // fecha for


        maior=qtddLikes[0] //recebe o primeiro para iniciar a comparação
        menor=qtddLikes[0] 
        for(let i=0;i<qtddLikes.length;i++){ //Comparação passando por todos os valores digitados e até corrigidos (caso hja alteração)
                if(qtddLikes[i]>maior){
                    maior=qtddLikes[i]
                } //fecha do Maior
                if(qtddLikes[i]<menor){
                    menor=qtddLikes[i]
                } // fecha if de menor
            }


    alert(`Titulo e Descrição dos posts com maior e menor nº de likes no console`) //alerta para o usuário olhar no console
    console.log(`O titulo do post com maior número de likes é: ${titulo[qtddLikes.indexOf(maior)]}`)
    console.log(`A Descreição do post com o maior número de likes é: ${descricao[qtddLikes.indexOf(maior)]}`)
    //MAIORES ACIMA
    console.log(`O titulo do post com menor número de likes é: ${titulo[qtddLikes.indexOf(menor)]}`)
    console.log(`A Descreição do post com o menor número de likes é: ${descricao[qtddLikes.indexOf(menor)]}`)
    //MENORES ACIMA

}