function ex7(){
    let p = Number(document.getElementById('n1').value)
    let p1 = p+(p*0.15)
    let p2 = p-(p*0.2)
    var tp1 = document.getElementById('elem1')
    var tp2 = document.getElementById('elem2')

    tp1.innerHTML= "Se você engordar 15% do seu peso atual, seu peso será de  "+p1
    tp2.innerHTML = "Se você emagrecer 20% do seu peso atual, seu peso será de  "+p2
}