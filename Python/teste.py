# A jornada de trabalho semanal de um 
# funcionário é de 40 horas. O funcionário 
# que trabalhar mais de 40 horas receberá 
# hora extra, cujo cálculo é o valor da 
# hora regular com um acréscimo de 50%. 
# Escreva uma função que receba o 
# número de horas trabalhadas em uma 
# semana e o salário por hora, e retorne o 
# salário do funcionário.

#valor hora extra = horanormal+50%
def exemplo_1():
    def salario_funcionário(horas_trabalhadas, salario_por_hora):
        hora_extra = horas_trabalhadas - 40
        salario = horas_trabalhadas * salario_por_hora
        print(salario)

        if horas_trabalhadas > 40:
            salario = hora_extra*salario_por_hora*0.50+salario
    
        return salario


    horas_trabalhadas = int(input('Digite a quantidade de horas trabalhada por este funcionário na semana: '))
    salario_por_hora = int(input('Digite o valor da hora: '))
    salario = salario_funcionário(horas_trabalhadas, salario_por_hora)
    print(salario)

#----------------------------------------------------------------
from random import randint
print(randint(2,10))

# Fazer uma função que calcule a média 
# dos elementos de um vetor
def exercicio_2():
    def media(lista):
        soma = 0
        for item in lista:
            soma += item 
        media = soma/len(lista)
        return media

    lista = [randint(0,100) for i in range(20)]
    print(media(lista))

# Fazer uma função que verifica se uma 
# palavra, frase ou número é um 
# palíndromo.
# Um palíndromo é qualquer sequência de 
# caracteres que seja a mesma se lida da 
# esquerda para a direita ou da direita 
# para a esquerda. Por exemplo, a palavra 
# “osso” é um palíndromo, pois é idêntica 
# não importa o sentido da leitura
def execicio_3():
    palavra = input('')
    lista = []
    lista_reversa = []
    for letra in palavra:
        lista.append(letra)
    for i in range(len(lista)):
        lista_reversa.append(lista[len(lista)-i-1])

    print(lista_reversa)
    if lista == lista_reversa:
        print('É palindromo')
    else:
        print('NÃO É palindromo')
#Faça um programa que use a função valorPagamento para determinar o valor a ser pago por uma
# prestação de uma conta. O programa deverá solicitar ao usuário o valor da prestação e o número
# de dias em atraso e passar estes valores para a função valorPagamento, que calculará o valor a
# ser pago e devolverá este valor ao programa que a chamou. O programa deverá então exibir o
# valor a ser pago na tela. Após a execução o programa deverá voltar a pedir outro valor de
# prestação e assim continuar até que seja informado um valor igual a zero para a prestação. Neste
# momento o programa deverá ser encerrado, exibindo o relatório do dia, que conterá a
# quantidade e o valor total de prestações pagas no dia. O cálculo do valor a ser pago é feito da
# seguinte forma: para pagamentos sem atraso, cobrar o valor da prestação, e quando houver
# atraso, cobrar 3% de multa, mais 0,1% de juros por dia de atraso
def valor_pagamento(valor_prestacao, dias_atraso):
    total = valor_prestacao
    if dias_atraso > 0:
        total = valor_prestacao*1.03 + valor_prestacao*0.01*dias_atraso
    return total
    

soma = 0
while True:
    valor_prestacao = int(input(''))
    numero_de_dias_em_atraso = int(input(''))
    if valor_prestacao == 0:
        break
    total = valor_pagamento(valor_prestacao,numero_de_dias_em_atraso)
    print(f'R${total:.2f}')

    soma+=total

print(f'O valor pago no total R${soma:.2f}')