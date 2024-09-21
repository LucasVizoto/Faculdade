function exe1(){
    let conta = 1; let conta2 = 1
    let A, B, C, D, aux
    while (conta2 <= 5){
        A = Number(prompt('Informe A'))
        B = Number(prompt('Informe B'))
        C = Number(prompt('Informe C'))
        D = Number(prompt('Informe D'))
        let conta = 1
        while (conta <= 4){
            if (A>B) { aux = A; A = B; B = aux;}
            if (B>C) { aux = B; B = C; C = aux;}
            if (C>D) { aux = C; C = D; D = aux;}
            conta++
        }
        alert(`Crescente ${A}, ${B}, ${C} e ${D}`)
        alert(`Decrescente ${D}, ${C}, ${B} e ${A}`)
        conta2++
    }
}

function exe2(){
    let preco = 5.0; let qtde = 120; 
    const desconto = 200;
    let saida = "<table border='1'> <tr> <th> Preço </th> <th> Qtde </th> <th> Desconto </th> <th> Lucro </th> </tr>"
    while (preco >= 1){
        lucro = (preco * qtde) - desconto
        saida += `<tr> <td> ${preco} </td> <td> ${qtde} </td> <td> ${desconto} </td> <td> ${lucro} </td> </tr>`
        preco = preco - 0.50
        qtde = qtde + 26

    }
    saida += "</table>"
    document.getElementById("tabela").innerHTML = saida
}

function exe3(){
    let idade;
    let f1 = 0; let f2 = 0; let f3 = 0; let f4 = 0; let f5 = 0;
    let conta = 1
    while (conta <=8) {
        idade = Number(prompt(`Informe a idade ${conta}`))
        if ((idade >= 0) && (idade <= 15)){
            f1++ 
        }
        else if ((idade >= 16) && (idade <= 30)){
            f2++
        }
        else if ((idade >= 31) && (idade <= 45)){
            f3++
        }
        else if ((idade >= 46) && (idade <= 60)){
            f4++
        }
        else if (idade > 60){
            f5++
        }
        conta++
    }

    alert(`Fx1: ${f1} Fx2: ${f2} Fx3: ${f3} Fx4: ${f4} Fx5: ${f5}`)
    alert(`% Fx1: ${f1/8*100} %Fx5: ${f5/8*100}`)
}
function exe4(){
    let numero = Number(prompt(`Informe um número`))
    let conta = 0
    let resultado
    let saida = ""
    while(conta <= 10){
        resultado = numero * conta
        saida = saida + `\n ${numero} X ${conta} = ${resultado}`
        conta++
    }
    alert(saida)
}

function exe5(){
    let conta1 = 1
    while (conta1 <= 10){
        let conta2 = 0
        let saida = "" 
        while (conta2 <= 10){
            saida = saida + `\n ${conta1} x ${conta2} = ${conta1*conta2}` 
            conta2++
        }
        alert(saida)
        conta1 ++
    }
}

function exe6(){
    let codigo
    let valor; let totalVista = 0;
    let conta = 1; let totalPrazo = 0;
    while (conta <= 5){
        codigo = prompt('Informe P ou V').toUpperCase()
        valor = Number(prompt('Informe valor'))
        if (codigo == 'P'){
            totalPrazo += valor
        }
        else if (codigo == 'V'){
            totalVista += valor
        }
        else {
            alert('Código inválido, valor não será considerado')
            continue 
        }
        conta++
    }
    let total = totalVista + totalPrazo
    let valorParcela = totalPrazo / 3
    document.getElementById("result6").innerHTML = `Total à vista ${totalVista} Total à prazo ${totalPrazo} Total ${total} Primeira parcela ${valorParcela.toFixed(2)}`
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



function ex21(){
    let candidato1=0; candidato2=0; candidato3=0; candidato4=0; nulo=0; branco=0; votar=0; qtddVotos=0
            do{
            votar = Number(prompt('Digite aqui seu voto sendo: \n1. Candidato 1 \n2. Candidato 2 \n3. Candidato 3 \n4. Candidato 4\n 5. Nulo\n 6. Branco\n 0. FINALIZAR'))
                qtddVotos++
            switch(votar){

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
        } while(votar != 0)
        
    
    let a = document.getElementById('totalCada').innerHTML = (`A quantidade de votos de cada candidato é: <br> Candidato1: ${candidato1} <br> Candidato2: ${candidato2} <br> Candidato3: ${candidato3} <br> Candidato4: ${candidato4}`) 
    let b = document.getElementById('nulos').innerHTML = (`Votos Nulos: ${nulo}`)
    let c = document.getElementById('branco').innerHTML = (`Votos Brancos: ${branco}`)
    let d = document.getElementById('%nuloTotal').innerHTML = (`Porcentagem de votos nulos comprados sobre o total: ${((nulos/qtddVotos)*100).toFixed(2)}%`)
    let e = document.getElementById('%brancoTotal').innerHTML = (`Porcentagem de Votos Brancos comparados com o total: ${((branco/qtddVotos)*100).toFixed(2)}%`)
}


function ex23(){
 let salario;novo,ferias;decTerc; meses; opcao
 do{
    opcao= Number(promp("Escolha uma opção: \n1.Novo Salário \n2.Férias\n3. Décimo Terceiro\n4. SAIR"))
    switch(opcao){
        case 1:
           salario=Number(prompt("Digite o salário do usuário: "))
           salario>0  && salario<=210 ? novo = salario+salario*0.15 :
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
         meses>=1 && meses<=12 ? decTerc= salario+salario*meses/12 && alert(`Décimo terceiro: ${decTerc}`):
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