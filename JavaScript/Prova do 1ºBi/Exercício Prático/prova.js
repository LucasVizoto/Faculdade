function ex1(){
let muda=document.getElementById('muda')
let vaga = document.getElementById('vaga')
let anos = Number(document.getElementById('anos').value)
let escolha = Number(document.getElementById('escolha').value)
let salario
    if(anos<5){

    }
//----------------- case ---------------
switch(escolha){
    case 1 : 
    if(anos<5 && anos>0){
        muda.innerHTML = "3.000,00"
        salario=3000
        } 
    else if(anos>=5){
        muda.innerHTML ="6.000,00"
        salario=6000
    }
    break

    case 2 :
        if(anos<5 && anos>0){
         muda.innerHTML="5.000,00"
         salario=5000
        }
       else if(anos>=5){
         muda.innerHTML="8.000,00"
         salario=8000   
        }
        break

        case 3 :
            if(anos<5 && anos>0){
             muda.innerHTML="4.000,00"
             salario=4000
            }
            else if(anos>=5){
             muda.innerHTML="7.000,00"
             salario=7000   
            }
            break
 }
 //-----------------------------------------
    if(salario<4500){
 vaga.innerHTML = "ALTA"   
 }
 else if(salario>=4500 && salario<=6000){
 vaga.innerHTML = "MÉDIA"   
 }
 else if(salario>6000){
vaga.innerHTML = "BAIXA"
 }
}