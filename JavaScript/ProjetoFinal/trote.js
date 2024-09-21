function Switch () {
//vamos obter a pagina do html
//obtem o elemento root do html
const html= document.documentElement
//ver se no doc tem a classe claro
if(html.classList.contains('claro')){
    //se o doc tem claro vamos remover
    html.classList.remove('claro')
}
else{
    html.classList.add('claro')
}
}

function bot(){
const html=document.documentElement
const kert = document.getElementById('kert')
kert.src = './assets/dancing-kermit.gif'
}
function bot2(){
    const html=document.documentElement
    const kert = document.getElementById('kert')
    kert.src = ''
    }