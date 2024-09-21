function ex9(){
    let bmo = Number(document.getElementById('b1').value)
    let lav = Number(document.getElementById('b2').value)
    let h = Number(document.getElementById('h').value)
    let A =((bmo+lav)*h)/2
    var txt = document.getElementById('elemt1')

    txt.innerHTML ="<b>A área desse Trapézio é de  </b>"+A 
}