function ex4() {
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    let media =(n1*2+n2*3)/5
    var ap= document.getElementById('element')
    alert("Sua média é de  "+media)
    if (media<7) {
       ap.innerHTML = "<b>REPROVADO</b>"
    }
    else{
        ap.innerHTML ='<b>APROVADO</b>'
    }
}