function calcularIMC(){
    //recuperar o peso informado na caixa de texto
    //document representa toda a pagina html
let peso = document.getElementById('peso').value//pega valor
//pegar o peso digitada na caixa de texto
let altura = document.getElementById('altura').value
//pegar a altura digitada na caixa de texto
let imc = (peso / (altura*altura)).toFixed(2)
alert(imc)
}