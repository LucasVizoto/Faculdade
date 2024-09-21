function ex5(){
    //recuperar n1 e n2 e escolha
 let n1 = Number(document.getElementById('n1').value)
 let n2 = Number(document.getElementById('n2').value)
 let escolha = Number(document.getElementById('escol').value)   
 let resultado
 let res = document.getElementById('res')
 //ver oq o usuário escolheu, usando o escolha (Switch)
 switch(escolha){
    case 1: resultado = (n1+n2)/2
            break //pare do Portugol

    case 2: if(n1>=n2){
        resultado= n1-n2
    }
            else{
        resultado = n2-n1        
            }
            break

    case 3: resultado= n1*n2
            break
    case 4:
    if(n2!=0){    
    resultado = n1/n2
    }
    else{
    resultado='Não pode dividir por zero'    
    }
    default: resultado = 'Opção inválida'

        //no escolha(do HTML) foram declarados valores esses valores são puxados pelo let
        //case = Caso do portugol
        //default é o CasoContrário do Portugol
 }
        res.innerHTML = resultado
}

function exe23(){
let codigo = Number(document.getElementById('').value)  
let unitario = Number(document.getElementById('').value)
}