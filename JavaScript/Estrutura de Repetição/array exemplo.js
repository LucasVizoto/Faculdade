// pos = 0,1,2,3,4,5
const arr=[12,1,2,3,4,69]
//buscou o valor do array= arr na posição 5
console.log(arr[5]) // 1
//quer saber quantas posições o array = arr tem
console.log(arr.length) // 5  (lenght == comprimento)
//pegar o ultimo elemento do arr
//console.log(arr.lastIndexOf()) //1
arr.splice(1,12,30) //valor que vai entrar o valor | Valor a ser apagado apartir do n° digitado | Valor a ser colocado na posição informada no 1º número
console.log(arr)

const a2=[1,5,652,85,5256,4]
a2.splice(1,5,12)
console.log(a2)