async function buscaFILME(){
    let busca = document.getElementById('busca').value //Puxa do id o valor digitado pelo usuáriuo para ser usado no link da API logo abaixo
    let resposta = await fetch(`https://www.omdbapi.com/?apikey=e402584a&t=${busca}`) //chama a API
    let dados = await resposta.json() //colocar a response da API numa variável , guarda o json


    //substitui os dados dos inputs para os dados conseguidos no json
    document.getElementById(`nomeFilme`).value = dados.Title
    document.getElementById(`classificacao`).value = dados.Rated
    document.getElementById(`lancado`).value = dados.Released
    document.getElementById(`plot`).value = dados.Plot
    document.getElementById(`genre`).value = dados.Genre
    document.getElementById(`language`).value = dados.Language
    document.getElementById(`foto`).src = dados.Poster //src pra mudar apenas essa parte no img do html
}