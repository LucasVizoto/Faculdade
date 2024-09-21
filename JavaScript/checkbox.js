function bot(){
    let soma=0
    //If para quando a check box estiver marcada
    if(document.getElementById('padrao').checked){
        let qPadrao= Number(document.getElementById('qPadrao').value)
        soma=soma+(qPadrao*50)
    }
    if(document.getElementById('padrao').checked){
        let qPadrao1 = Number(document.getElementById('qPadrao1').value)
        soma=soma+(qPadrao1*25)
    }
    let troca = document.getElementById('subs')
    troca.innerHTML= soma
}
