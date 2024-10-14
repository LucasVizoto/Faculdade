import random
def maior(lista = None):
    if lista is None:
        return
    maior = lista[0]
    for item in lista:
        if item>maior: maior = item
    return maior

def menor(lista = None):
    if lista is None:
        return
    menor = lista[0]
    for item in lista:
        if item<menor: menor = item
    return menor

def media_impares(lista = None):
    media = cont = 0
    if lista is None:
        return
    for item, valor in enumerate(lista):
        if item%2!=0:
            media+=valor
            cont+=1
    media = media/cont
    return media

def media_pares(lista = None):
    media = cont = 0
    if lista is None:
        return
    for item, valor in enumerate(lista):
        if item%2==0:
            media+=valor
            cont+=1
    media = media/cont
    return media

def fatorial(n):
    fat = 1
    for i in range(1,n+1):
        fat *= i
    return fat

lista = [random.randint(0,100) for i in range(10)]
maior_numero_da_lista = maior(lista)
menor_numero_da_lista = menor(lista)
print(media_impares(lista))
print(media_pares(lista))
numero = int(input())
print(fatorial(numero))


#print(max(lista))