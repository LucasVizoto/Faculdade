/*
Com base na tabela abaixo, escreva um programa que leia o código de um 
item e a quantidade deste item. A seguir,
calcule e mostre o valor da conta a pagar.

1 Cachorro-Quente R$4,00
2 X-Salada R$4,50
3 X-Bacon R$5,00
4 Torrada Simples R$2,00
5 Refrigerante R$1,50


*/ 
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var codigo = parseInt(lines[0]);
var qttd = parseInt(lines[1]);
let preco = 0

console.log(`Total: R$ ${vetor_precos[codigo-1]*qttd}`);

/*let vetor_alimentos = ['Cachorro-Quente', 'X-Salada', 'X-Bacon', 'Torrada Simples', 'Refrigerante']
let vetor_precos = [4.00, 4.50, 5.00, 2.00, 1.50] 

codigo = Number(prompt(' '))
qttd = Number(prompt(' '))

console.log(`Total: R$ ${vetor_precos[codigo-1]*qttd}`)*/