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
let conta = 1; let conta2 = 1
let n1; n2; n3; n4; caixa
      while (conta2 <= 5){
       n1 = Number(prompt('Informe A'))
       n2 = Number(prompt('Informe B'))
       n3 = Number(prompt('Informe C'))
       n4 = Number(prompt('Informe D'))

while (conta <= 4){
if (n1>n2) { caixa = n1; n1= n2; n2= caixa}
if (n2>n3) { caixa = n2; n2= n3; n3= caixa}
if (n3>n4) { caixa = n3; n3= n4; n4= caixa}
conta++
alert(`Crescente ${A},${B}，${n3} e ${n4}`)
alert(`Decrescente ${D},${C},${n2} e ${n3}`)
conta2++


    }
}
}
//------------------------------------------------------------------------------------------------------

function ex2(){
let preco = 5.0; let qtde = 120;
const desconto = 200;
let saida = "<table border='1'><tr> <th> Preço </th> <th> Qtde </th><th> Desconto </th> <th> Lucro </th></tr>"
         while (preco >= 1){

lucro= (preco *qtde)-desconto
saida += `<tr> <td> ${preco}</td> <td> ${qtde} </td> <td> ${desconto} </td> <td> ${lucro} </td></tr>`
preco = preco - 0.5
qtde = qtde + 26
saida += "</table>"
//+= substitui o Saída=Saída+x
document .getElementById("tabela").innerHTML = saida
    

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
function ex6(){
let cod; val; totVis = 0
let cont = 1; let totPrz = 0;
   while (cont <= 5){
   cod = prompt('Informe P ou V').toUpperCase()
val = Number(prompt('Informe valor'))
if (cod == 'P'){
totPrz += val
}
else if (cod =='V'){
totVis + val 
}
else {
alert('Código inválido valor nao será considerado')
}
cont++
let total = totVis + torPrz
let valorParcela = totPrz / 3
alert(`Total à vista ${totalvista} Total à prazo ${totalPrazo} Total ${total} Primeira parcela ${valorParcela.toFixed(2)}`)
}
}
//------------------------------------------------------------------------------------------------------
function ex7(){
let idade, altura, peso;
let qtddMais50 = 0, totAl0a20 = 0, qtddOa20 = 0;
let qtddP40 = 0;
    for(let i =1;i <=5; i++) {
        idade = Number(prompt(`Digite a idade da pessoa ${i}`))
        altura = Number(prompt(`Digite a altura da pessoa ${i}`))
        peso = Number(prompt(`Digite o peso da pessoa ${i}`))
            if(idade >50) {
            qtddMais50++
            }
            if(idade >= 10 && idade <= 20) {
            totAl0a20 += altura
            qtdd19++
            }
        if(peso <40) {
        qtddP40++
        }
let mediaAltural0a20 = totAl10a20 *qtdd10a20
let porcentagemPesoMenos40 = (qtddP40 / 5)* 100;
alert(`Quantidade de pessoas com mais de 50 anos: ${quantidadeMais50}`)
alert(`Média de altura de pessoas entre 10 e 20 anos: ${mediaAltural0a20.toFixed(2)}`)
alert(`Porcentagem de pessoas com menos de 40KG: ${porcentagemPesoMenos40.toFixed(2)}%`)
}
}
//------------------------------------------------------------------------------------------------------
function ex8(){
let arrIP=[], arrA=[], arrCB=[], num //Vetores que irão receber os valores digitados para amostrar aqueles que cabem nos requisitos
let qtdd50e60=0, qtddIA=0, qtddBlue=0, qtddRsemA=0
    for(let i=0; i<6;i++){
        let idade = Number(prompt(`insira aqui a idade da pessoa ${i}: `))
        let peso = Number(prompt(`insisra aqui o peso da pessoa ${i}: `))
        let altura = Number(prompt(`insisra aqui a altura da pessoa ${i}: `))
        let olhos = prompt(`insisra aqui a cor dos olhos da pessoa ${i}: `)
        let cabelo = prompt(`insisra aqui a cor do cabelo da pessoa ${i}: `)
        let muda1 = document.getElementById('muda1')
        let muda2 = document.getElementById('muda1')
        let muda3 = document.getElementById('muda1')
        let muda4 = document.getElementById('muda1')
        //------//
        if(idade>50&&peso<60){
            qtdd50e60++
            arrIP[i]=idade
        }
        if(altura<1.50){
            qtddIA+=idade //+= substitui o Soma=Soma+x 
            arrA[i]=altura
            num++ //contar quantas vezes vai ser executado este if para ser realizado a média no finas
        }
        if((olhos=='A')||(olhos =='a')){
            qtddBlue++
        }
        if(((cabelo== 'R')||(cabelo=='r')) && ((olhos!='A')||(olhos !='a'))){ //tratamento de erro para letra minúscula
           qtddRsemA++ 
           arrCB[i]=olho
        }
        //------//
    } //encerra o for
    muda1.innerHTML=`A quantidade de pessoas com idade superior a 50 E peso inferior a 1.50m é de: ${qtdd50e60}` //letra A
    muda2.innerHTML=`A Média das idades das pessoas com altura inferior a 1.50m é de: ${(qtddIA/num).toFixed(2)}` //letra B
    muda3.innerHTML=`A porcentagem de pessoas com olhos azuis entre todas as pessoas analisadas é de: ${qtddBlue*16.66}`
    muda4.innerHTML=`A quantidade de pessoas ruivas e que não possuem olhos azuis  ${qtddRsemA}`

    console.log(`Array da relação Idade Peso ${arrI}`)
    console.log(`Array da relação idade altura ${arrA} `)
    console.log(`Array com a cor do olho da pessoa de cabelo Ruivo ${arrCB} `) //teste com array/vetor no console
}
//------------------------------------------------------------------------------------------------------
function ex9(){
let idade, peso, altura
let mediaI=0, qtddPesAlt=0,qtddAltIdd=0, gigante=0
let arr=[]
    for(let i=0; i<=10;i++){
         idade = Number(prompt(`insira aqui a idade da pessoa ${i}: `))
         peso = Number(prompt(`insisra aqui o peso da pessoa em KILOS ${i}: `))
         altura = Number(prompt(`insisra aqui a altura da pessoa em METROS ${i}: `))
        mediaI+=idade
        if(peso>90&&altura<1.50){
            qtddPesAlt++
        }
        if((idade>10&&idade<30)&&altura>1.90){
            qtddAltIdd++
        }
        if(altura>1.90){
            gigante++
            arr[i]=peso
        }   
        }
 muda1.innerHTML=`A media dos idades dessas dez pessoas é de: ${mediaI/i}` //letra A]
 muda2.innerHTML=`A quantidade de pessoas com peso superior a 90KG e altura inferior a 1.50M é de: ${qtddPesAlt}`
 muda3.innerHTML=`A porcentagem de pessoas com idade entre 10 30 anos entre as pessoas com mais de 1.90M é de: ${qtddAltIdd*(100/gigante)}`
        console.log(`O peso das pessoas com mais de 1.90 é de ${arr.length}`)
}
//------------------------------------------------------------------------------------------------------
function ex10(){
let numiro
let somaPar=0; somaImpar=0
        for(let i=1;i<=10;i++){
         numiro = Number(prompt('Entre com um número: '))
            if(numiro%2==0){ //Divide por 2 e vê se o resto é igual a 0 (PAR)
                somaPar+=numiro
            }
            if(numiro%2==1){ //Divide por 2 e vê se o resto é igual a 1 (ÍMPAR)
                somaImpar+=numiro
            }
        }
alert(`Dentre os numeros digitados, a soma dos pares é de: ${somaPar}`)  
alert(`Enquanto a soma dos ímpares é de: ${somaImpar}`)      
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

         alert("Nro de meses inválido")

         break



         case 4: 

         alert("PROGRAMA EXECUTADO")

         break

         

         default:

         alert("INVÁLIDO")   

        }

 } while(opcao!=4)  

    }
}