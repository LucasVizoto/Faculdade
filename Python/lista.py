lista = [1,2,3,4,5,6,7,8,9,10,11]
lista2 = lista.pop(4)
lista.append(12)
print(lista2)
print(lista)
#----------------------------------------------------------------
def soma ():
    soma_impares = 0
    for i in range(0,500):
        if i%2==1 and i%3==0 and i<500:
            soma_impares += i
    print(soma_impares)    
import time
def horario():
    print('10:00')
    for i in range(9,-1,-1):
        for j in range(59,-1,-1):
            
            if j<10:
                print(f'0{i}:0{j}')
                time.sleep(1)
            else:
                print(f'0{i}:{j}')   
                time.sleep(1) 

def pares():
    media_pares=0
    cont = 0
    for i in range(10):
        numero = float(input('Digite um número: '))
        if numero%2==0:
            media_pares += numero
            cont+=1
    print(f'A média é {(media_pares/cont).__round__(2)}')        
   #print(f'A média é {(media_pares/cont):.2f}')


#--------------------------------------------------------------------------
# Fazer um programa que calcule a soma dos
# elementos de um vetor.
def soma_vetor():
    lista = [item for item in range(10)]
    somatoria = 0
    for i in range(len(lista)):
        somatoria += lista[i] 
    print(somatoria)
# Fazer um programa que calcule a média
# dos números pares de um vetor.

lista = [(item+item) for item in range(10)]
media = 0
cont_pares = 0
for i in range(len(lista)):
    if lista[i]%2 == 0:
        media += lista[i]
        cont_pares+=1
print(media/cont_pares)

# Considere um programa que calcule a
# média aritmética geral de uma classe de
# alunos e imprima a quantidade de notas
# que estão acima da média calculada. O
# usuário deve entrar com a quantidade de
# alunos.
def exercicio_3():
    lista=[]
    somatora = 0
    qtdd_alunos = int(input('Insira o numero de alunos: '))
    for i in range(qtdd_alunos):
        lista.append(int(input(' ')))
        somatora+=lista[i]
    media_geral = float(somatora/qtdd_alunos)
    cont_notas = 0
    for i in range(len(lista)):
        if lista[i]>=media_geral:
            cont_notas+=1
    print(cont_notas)        

# Faça um programa que leia um vetor de
# inteiros de 10 posições e em seguida
# imprima este vetor como se cada
# número fosse multiplicado por 3.
def exercicio_4():
    lista_nova = []
    for i in range(0, 10):
        lista_nova.append(int(input())*3)
    print(lista_nova)    

# Faça um programa que leia, some e
# imprima o resultado da soma entre dois
# vetores inteiros de 50 posições.
def exercicio_5():
    lista_1 = []
    lista_2 = []
    soma = []
    for i in range(0,50):
        lista_1.append(int(input()))
        lista_2.append(int(input()))
        
    for item, valor in enumerate(lista_1):
        soma.append(valor+lista_2[item])
    print(soma) 

# Faça um programa que preencha um
# vetor de 100 elementos inteiros,
# colocando 1 na posição correspondente
# a um índice par e colocando 0 na
# posição correspondente a índice ímpar.
def exercicio_6(): 
    lista = []
    for i in range(0,100):
        if i%2 == 0: lista.append(1)
        else : lista.append(0) 
    print(lista)
    
# Faça um programa que preencha um
# vetor de N elementos inteiros com a
# sequência de Fibonacci (primeiro
# elemento é 1, segundo é 1 e em seguida,
# cada termo subsequente é a soma dos
# dois anteriores).    

def exercicio_7():
    n = int(input())
    fibonacci =[1,1]
    for i in range (1,n):
        fibonacci.append(fibonacci[i]+fibonacci[i-1])
    print(fibonacci)    
#----------------------------------------------------------------