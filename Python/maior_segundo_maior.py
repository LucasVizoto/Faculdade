from random import randint
def maior(lista):
    maior = lista[0]
    for item in lista:
        maior = item if item > maior else maior
    return maior

def segundo_maior(lista):
    maior_valor = maior(lista)
    seg_maior = lista[0]
    for item in lista:
        seg_maior = item if item > seg_maior and item != maior_valor else seg_maior
    return seg_maior    

lista = [randint(0,100) for i  in range (72)]   

print(maior(lista))
print(segundo_maior(lista))