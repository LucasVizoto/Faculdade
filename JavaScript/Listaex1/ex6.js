function ex6(){
    //recupera o salário fixo do usuário
let sal = Number(document.getElementById('sal').value)
//Number converte em número
//recupera a quantidade de vendas
let vend = Number(document.getElementById('ven').value)
let comit = (vend*0.04)
let final=(sal+comit)
alert('Comissão R$'+comit+'   Salário final R$'+ final)
}