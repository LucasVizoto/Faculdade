let memoriaRam =[4,8,16,32,64,128,256,512,1024]

memoriaRam.forEach((item, index, vetor) => {
    console.log(item, index, vetor)
})

//dá pra fazer tbm
let saida = ''
memoriaRam.forEach((item) => saida = saida+item+'GB \n')
console.log(saida)


//exemplo de map ( map retorna)
//mapear um vetor em um outro vetor

let idade = [18,19,20,21,22,23,24,25,26,27]
//função anonima, arrow function, função de uma linha não precisa usar return, caso contrário, USE
let dobrar = idade.map((item) => item*2)
console.log(dobrar)
let variavel = idade.reduce((acm,item) => acm+=item)
console.log(variavel)

let barulho = ['dfsgfga', 'dgSDGsg', 'fsojgsaijgas']
novo_nome = nome.reduce((acm, item) => acm.charAt(0) + item.charAt(0))
//charAt = caracter em pega a letra do indice indicado

//quando o dado vem do servidor, consumido de uma API ele vem como str e precisamos converter em JSON

let string = '{"name": "john", "age" : 60, "city": "New York"}'

let objetoJS = JSON.parse(string)
console.log(objetoJS)

//quando o dado é enviado, ele vai como str e precisa ser convertido

string = JSON.stringify(objetoJS) //converte e volta 


//spread é ...
let texto = ['Arroz',  'Feijão', 'Batata']
console.log(...texto)
//ou
for(let item of texto){
    console.log(item) //forEach mais enfe
}
for(let item in texto){
    console.log(item) //rolê do enumerate em python pois retorna o indice
}