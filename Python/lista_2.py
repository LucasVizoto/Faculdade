# Fazer um programa que leia um vetor de 20 números 
# inteiros e determine qual o maior e o menor número
# do vetor e imprima os dois itemes.
def exercicio_1():
    lista = []

    for i in range(21):
        lista.append(int(input(' '))) 
    menor = maior = lista[0]
    for j in range(len(lista)):
        menor=lista[j] if lista[j]<menor else menor
        maior=lista[j] if lista[j]>maior else maior
    print(f'O maior número é {maior}\
        \n E o menor número é {menor}')
    
# Crie um programa que leia um vetor de 30 números 
# inteiros e gere um segundo vetor cujas posições pares
# são o dobro do vetor original e as ímpares são o triplo.    
def exercicio_2():
    lista = []
    for i in range(5):
        lista.append(int(input(' ')))

    lista_nova = []

    for item in lista:
        if item%2 == 0:
            item*=2
        else:    
            item*=3
        lista_nova.append(item)    
    print(lista, end='\n')

    print(lista_nova)    

# Crie um programa que permita a leitura de um vetor de 30 números inteiros 
# e gere um segundo vetor com os mesmos dados, só que de maneira invertida, 
# ou seja, o primeiro elemento do vetor original ficará na última posição do 
# novo vetor, o segundo na penúltima posição e assim por diante.
def exercicio_3():
    import random
    lista = []
    lista_nova = []
    for i in range(30):
        lista.append(random.randint(0,20))
    for i in range(len(lista)):
        lista_nova.append(lista[len(lista) - 1 - i])
    print(lista, end='\n')
    print(lista_nova)

# Crie um programa que leia um vetor de 20 números inteiros e em
# seguida divida estes números em outros 2 novos vetores, 
# separando os números pares dos números ímpares.
def exercicio_4():
    import random

    lista = lista_pares = lista_impares = []

    for i in range(20):
        lista.append(random.randint(0,20))
    for item in lista:
        if item%2==0: lista_pares.append(item) 
        else: lista_impares.append(item)

    print(lista, '\n' /
        lista_impares, '\n' /
        lista_pares)

# Crie um programa que leia uma série de 50 notas e calcule quantas 
# são 10% acima da média e quantas são 10% abaixo da média.
def exercicio_5():
    import random
    lista = []
    acima_da_media, abaixo_media = 0
    for i in range(50):
        lista.append(random.randint(0,20))
        soma = lista[i]
    media = float(soma/50)
    for item in lista:
        acima_da_media +=1 if item>media*1.1 else 0
        abaixo_media +=1 if item<media*1.1 else 0
    print(f'São acima da média: {acima_da_media} \nSão abaixo da média: {abaixo_media}')
