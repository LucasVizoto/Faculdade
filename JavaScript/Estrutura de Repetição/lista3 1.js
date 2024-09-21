function ex3(){
let cont = 1
let faixa1 = 0
let faixa2 = 0
let faixa3 = 0
let faixa4 = 0
let faixa5 = 0

    while(cont<=8){
    let idade = Number(prompt('Isira aqui a idade de oito pessoas: '))  
    if(idade<0){
     prompt('Numero inválido, digite um número positivo')    
    }
    else{
    if((idade>=0) && (idade<=15)){
        faixa1++
    }
    else if((idade>=16) && (idade<=30)){
        faixa2++
    }
    else if((idade>=31) && (idade<=45)){
        faixa3++
    }
    else if((idade>=46) && (idade<=60)){
        faixa4++
    }
    else{
        faixa5++
    }
    cont++
}
    }
     //letra A
let faixa1t=document.getElementById('faixa1').innerHTML = 'A quantidade de pessoas em cada faixa etaria é de: 1º Faixa(até 15 anos): '+faixa1
let faixa2t=document.getElementById('faixa2').innerHTML = '2º Faixa(de 16 até 30 anos): '+faixa2
let faixa3t=document.getElementById('faixa3').innerHTML = '3º Faixa(de 31 até 45 anos): '+faixa3
let faixa4t=document.getElementById('faixa4').innerHTML = '4º Faixa(de 46 até 60 anos): '+faixa4
let faixa5t=document.getElementById('faixa5').innerHTML = '5º Faixa(maiores de 60 anos): '+faixa5
    
//letra B
let pct = faixa1*12.5
let letraB= document.getElementById('letraB').innerHTML = 'A porcentagem de indivíduos da 1º Faixa comparada com as demais é de: '+ pct+'%'
//letra C
let pct2 = faixa5*12.5
let letraC= document.getElementById('letraC').innerHTML = 'A porcentagem de indivíduos da 5º Faixa comparada com as demais é de: '+ pct2+'%'
}

//------------------------------------------------------------------------------------------------------

function ex4(){
let cont=0    
let user = Number(prompt('Insira aqui o numero que deseja saber a tabuada'))
let produto 
while(cont<=10){
produto=user*cont
console.log(user+' X '+cont+' = '+produto)
cont++
}
}
//------------------------------------------------------------------------------------------------------
function ex5(){
let cont=0   
let cont1 = 1 
let produto 
while(cont1<=10){
  while(cont<=10){
    produto=cont1*cont
    console.log(cont1+' X '+cont+' = '+produto)
    cont++  
  }
  cont1++
  console.log('----------------')
  cont = 0
 }
}
//------------------------------------------------------------------------------------------------------
function ex1(){

}
//------------------------------------------------------------------------------------------------------
function ex2(){
    
}
function ex20(){
let opcao, n1, n2

    do{
        opcao= Number(prompt("Menu de opções \n 1. Média aritmética \n 2. Média ponderada \n 3. Sair"))
    switch(opcao){
        
        case 1 : 
        alert("Opção 1 escolhida")
         n1 = Number(prompt('Digite aqui o primeiro número para cálcular a média aritmética'))
         n2 = Number(prompt('Digite aqui o segundo número para cálcular a média aritmética'))
        alert(`A média aritmética destes números é: ${(n1+n2)/2}`)
        break

        case 2:
        alert("Opção 2 escolhida")
         n1 = Number(prompt("Digite a nota 1"))
         n2 = Number(prompt("Digite a nota 2"))
         let n3 = Number(prompt("Digite a nota 3"))
        alert("Agora os pesos")
         let p1 = Number(prompt("Digite peso 1"))
         let p2 = Number(prompt("Digite peso 2"))
         let p3 = Number(prompt("Digite peso 3"))
        alert(`A média ponderada destas notas : ${((n1*p1)+(n2*p2)+(n3*p3))/p1+p2+p3}`)
        break

        case 3:
        alert("*PROGRAMA ENCERRADO*")
        break
        
        default:
        alert("Opção inválida")    
    }
    }while(opcao!=3)    
}

//------------------------------------------------------------------------------------------------------
function ex21(){
    let candidato1=0; candidato2=0; candidato3=0; candidato4=0; nulo=0; branco=0; votar=0; qtddVotos=0
            do{
            votar = Number(prompt('Digite aqui seu voto sendo: \n1. Candidato 1 \n2. Candidato 2 \n3. Candidato 3 \n4. Candidato 4\n 5. Nulo\n 6. Branco\n 0. FINALIZAR'))
                qtddVotos++
            switch(votar){

            //Analisar o voto e armazenar quantidade num lugar
            case 0:
            alert('PROGRAMA FINALIZADO')
            break
    
            case 1:
            candidato1++
            break
    
            case 2:
            candidato2++
            break
    
            case 3:
            candidato3++
            break
    
            case 4:
            candidato4++
            break
    
            case 5:
            nulo++
            break
    
            case 6:
            branco++
            break
            
            default:
            alert("Mete outro numero")    
          }
        } while(votar != 0)  //quando for 0 para de executar o programa
        
    
     let a = document.getElementById('totalCada').innerHTML = (`A quantidade de votos de cada candidato é: <br> Candidato1: ${candidato1} <br> Candidato2: ${candidato2} <br> Candidato3: ${candidato3} <br> Candidato4: ${candidato4}`) 
     let b = document.getElementById('nulos').innerHTML = (`Votos Nulos: ${nulo}`)
     let c = document.getElementById('branco').innerHTML = (`Votos Brancos: ${branco}`)
     let d = document.getElementById('%nuloTotal').innerHTML = (`Porcentagem de votos nulos comprados sobre o total: ${((nulos/qtddVotos)*100).toFixed(2)}%`)
     let e = document.getElementById('%brancoTotal').innerHTML = (`Porcentagem de Votos Brancos comparados com o total: ${((branco/qtddVotos)*100).toFixed(2)}%`)
        }

//------------------------------------------------------------------------------------------------------

function ex23(){
 let salario;novo,ferias;decTerc; meses; opcao
 do{
    opcao= Number(promp("Escolha uma opção: \n1.Novo Salário \n2.Férias\n3. Décimo Terceiro\n4. SAIR"))
    switch(opcao){
        case 1:
           salario=Number(prompt("Digite o salário do usuário: "))
           salario>0  && salario<=210 ? novo = salario+salario*0.15 : //? substitui o IF e : o ELSE
           salario>=210 && salario<=600 ? novo = salario+salario*0.10:
           salario>600 ? novo = salario+salario*0.5: alert("INVÁLIDO!!!")
           alert(`Seu novo salário terá o valor de : ${novo}`)
         break

         case 2:
         salario= Number(prompt("Informe Salário"))
         ferias= salario+1/3*salario
         alert(`Férias: ${ferias}`)
         break

         case 3: 
         salario=Number(prompt("Informe Salário: "))
         meses = Number(prompt("Informe Meses: "))
         meses>=1 && meses<=12 ? decTerc= salario+salario*meses/12 && alert(`Décimo terceiro: ${decTerc}`): // && serve para completar o que será executado
         alert("Nrode meses inválido")
         break

         case 4: 
         alert("PROGRAMA EXECUTADO")
         break
         
         default:
         alert("INVÁLIDO")   
        }
 } while(opcao!=4)  
}