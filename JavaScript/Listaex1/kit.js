function calcular(){
let kits= Number(document.getElementById('kits').value)
let ponto
if(kits >= 80){
    ponto = 5000
}
else if((kits>=64) && (kits<80)){
    ponto= 4000
}
else if ((kits>=40)&&(kits<64)){
    ponto = 2500
}
else if((kits>=16)&&(kits<40)){
    ponto=1000
}
else if ((kits>=0)&&(kits<16)){
    ponto=0
}
else{
    ponto=-1
}
if(ponto==-1){
document.getElementById('pontos').innerHTML = "Impossível calcular"
}
else{
document.getElementById('pontos').innerHTML="A pontuação foi de"+ ponto    
}
}