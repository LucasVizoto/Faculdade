'''
A sequência de Fibonacci é uma das sequências mais famosas do mundo. Os termos de Fibonacci são sempre iguais à soma dos dois termos anteriores a eles na sequência, e os dois primeiros termos são 1. Ou seja:

1 , 1, 2, 3, 5, 8, 13, 21, 34 ...

Porém, não estamos interessados em achar os termos da sequência de Fibonacci, mas sim os termos da sequência de Fibonot!

A sequência de Fibonot é composta pelos números que não pertencem à sequência de Fibonacci. Mais especificamente, os números inteiros positivos não-nulos. Em ordem crescente!

Eis os primeiros termos de Fibonot:

4, 6, 7, 9, 10, 11, 12, 14, 15 ...

Sua tarefa é achar o K-ésimo número de Fibonot.


Entrada
A entrada consiste um único inteiro K (1 ≤ K ≤ 105) especificando o índice do elemento da sequência de Fibonot desejado.


'''



usuario_enter = int(input(''))
fibonacci = [1, 1]
fibonot = []
index = 1
while len(fibonot) <= usuario_enter :
    fibonacci.append(fibonacci[index]+fibonacci[index-1])
    if index not in fibonacci:
        fibonot.append(index)
    index += 1

print(fibonot[usuario_enter -1])