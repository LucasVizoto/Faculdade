/*esta função é uma função assincrona pos ela vai fazer uma requisição para a API quem a chamar
pode fazer outras tarefas mesmo sem ter a resposta*/

//async diz que você pode ir mexendo na página enquanto essa funcao roda
async function buscaCEP(){

//ou const buscaCEP = async() => {}
 //pega o valor do input
 let cep = document.getElementById('cep').value

//faz a requisição para a API
//await é aguardae pela resposta da requisição (promise) (O codigo interno espera, o escopo global não)
//fetch é a função q faz a requisisção da API
let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
//dados chegaram em resposta e trsnforma a resposta em obj  pois chegou em string
//transforma a resposta em um objeto
let dados = await resposta.json()


//recupera o logradouro e coloca no imput logradouro
document.getElementById('logradouro').value = dados.logradouro
document.getElementById('complemento').value = dados.complemento
document.getElementById('bairro').value = dados.bairro
document.getElementById('localidade').value = dados.localidade
document.getElementById('uf').value = dados.uf
}

const exemple = async () => {
    let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then().json()
 } //Quando a response retorna , transforma num json
 //.then retorna uma promisse, muito usado para cuidadr de erro em React (boto fé)
 /* 

 p1.then(
  function (value) {
    console.log(value); // Success!
  },
  function (reason) {
    console.log(reason); // Error!
  },
); 

*/
