function calcular() {
    var conjP = Number(document.getElementById("ConjP").value)
    var kitA = Number(document.getElementById("KitA").value)
    var suple = Number(document.getElementById("Suple").value)
    var arroz5 = Number(document.getElementById("Arroz5").value)
    var arroz1 = Number(document.getElementById("Arroz1").value)
    var feijao2 = Number(document.getElementById("Feijao2").value)
    var feijao1 = Number(document.getElementById("Feijao1").value)
    var macarrao = Number(document.getElementById("Macarrao").value)
    var oleo = Number(document.getElementById("oleo").value)
  
    // Calcular a soma dos valores
    var soma = (conjP * 50) + (kitA * 25) + (suple * 10) + (arroz5 * 5) + (arroz1 * 1) + (feijao2 * 2) + (feijao1 * 1) + (macarrao * 0.5) + (oleo * 1);
  
    // Exibir a soma no parágrafo com id "somaFinal"
    document.getElementById("somaFinal").innerHTML = "A soma dos valores é: " + soma
  }

  function ConjPCal() {
    let conjP = Number(document.getElementById("ConjP").value)
    var ValorConjP = conjP * 50
    document.getElementById("ConjPP").textContent = "Os pontos adquiridos com esses alimentos é: " + ValorConjP
  }

  function KitACal() {
    let kitA = Number(document.getElementById("KitA").value)
    var ValorKitA = kitA * 25
    document.getElementById("KitAP").innerHTML = "Os pontos adquiridos com esses alimentos é: " + ValorKitA 
  }

  function SupleCal() {
    let suple = Number(document.getElementById("Suple").value)
    var ValorSuple = suple * 10
    document.getElementById("SupleP").innerHTML = "Os pontos adquiridos com esses alimentos é: " + ValorSuple
  }

  function Arroz5Cal() {
    let arroz5 = Number(document.getElementById("Arroz5").value)
    var ValorArroz5 = arroz5 * 5
    document.getElementById("Arroz5P").innerHTML = "Os pontos adquiridos com esses alimentos é: " + ValorArroz5
  }

  function Arroz1Cal() {
    let arroz1 = Number(document.getElementById("Arroz1").value)
    var ValorArroz1 = arroz1
    document.getElementById("Arroz1P").innerHTML = "Os pontos adquiridos com esses alimentos é: " + ValorArroz1
  }

  function Feijao2Cal() {
    let feijao2 = Number(document.getElementById("Feijao2").value)
    var ValorFeijao2 = feijao2 * 2
    document.getElementById("Feijao2P").innerHTML = "Os pontos adquiridos com esses alimentos é: " + ValorFeijao2
  }

  function Feijao1Cal() {
    let feijao1 = Number(document.getElementById("Feijao1").value)
    var ValorFeijao1 = feijao1 * 1
    document.getElementById("Feijao1P").innerHTML = "Os pontos adquiridos com esses alimentos é: " + ValorFeijao1
  }

  function MacarraoCal() {
    let macarrao = Number(document.getElementById("Macarrao").value)
    var ValorMacarrao = macarrao * 0.5
    document.getElementById("MacarraoP").innerHTML = "Os pontos adquiridos com esses alimentos é: " + ValorMacarrao
  }

  function OleoCal() {
    let oleo = Number(document.getElementById("oleo").value)
    var ValorOleo = oleo * 1
    document.getElementById("OleoP").innerHTML = "Os pontos adquiridos com esses alimentos é: " + ValorOleo
  }

  function trocaSwitch() {
    // vamos obter o doc HTML(root)
    const html = document.documentElement
    //verificar se no doc tem a classe claro
    if (html.classList.contains('claro')) {
        html.classList.remove('claro')
    }
    else {
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