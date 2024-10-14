#----------------------------------------------------------------
def imparPar(n): #def é a mesma coisa que fnction, logo dá pra modularizar
    if n%2 == 0:
        print('É par')
    else:
        print('É impar')    
#Pular linha quebra a função
numero = int(input('Entre com um número'))        
imparPar(numero)
#----------------------------------------------------------------
def crescente(n1, n2):
    if n1>n2:
        print(f'{n2} é menor que {n1}')
    elif n1<n2:
        print(f'{n1} é menor que {n2}')    

numero = int(input('Entre com um número '))
numero2 = int(input('Entre com outro número '))
while numero==numero2:
    numero= int(input('INVÁLIDO DIGITE N1 NOVAMENTE: '))
    numero2 = int(input('DIGITE N2: '))
crescente(numero, numero2)    
#----------------------------------------------------------------
'''
Fazer um algoritmo que leia 3 valores inteiros e verifique se eles podem formar  um triângulo. Se for possível formar um triângulo,
 escreva uma mensagem informando se é um triângulo equilátero, isósceles ou escaleno.

Observações:

- O comprimento de um lado do triângulo é sempre menor do que a soma dos outros dois.
- Equilátero:  todos lados iguais
- Isósceles: dois lados iguais
- Escaleno: todos os lados diferentes
'''
a = int(input('Digite o primeiro comprimento do triangulo: '))
b = int(input('Digite o segundo lado do triangulo: '))
c = int(input('Digite o terceiro lado do triangulo: '))
if a > b+c:
    print('Triangulo não existe')
elif a==b==c:
    print('Triangulo Equilátero')
elif a==b or b==c or c==a: 
    print('Triangulo Isóceles')
elif a!=b and c!=b and c!=a:
    print('Triangulo Escaleno')    
#----------------------------------------------------------------
'''
Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que calcule o seu peso ideal, utilizando as seguintes fórmulas:
- para homens:   (72.7 * h) - 58
- para mulheres: (62.1 * h) - 44.7
'''
altura = float(input('Digite altura em metros (EX.: 1.80): '))
sexo = input('Digite o Sexo: ')
if sexo.lower().startswith('m'):
    peso_ideal = (72.7*altura) - 58
elif sexo.lower().startswith('f'):
    peso_ideal = (62.1 * altura) - 44.7
print(f'Seu peso ideal é {peso_ideal}')
#----------------------------------------------------------------
'''
Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem decrescente. Utilize para tal uma seleção encadeada.
'''
n1 = int(input('Digite primeiro número inteiro: '))
n2 = int(input('Digite segundo número inteiro: '))
n3 = int(input('Digite terceiro número inteiro: '))

if n1>n2 and n1>n3:
    if n2>n3:
        print(f'{n1} {n2} {n3}')
    else:
        print(f'{n1} {n3} {n2}')
if n1>n2 and n2>n3:
    print(f'{n3} {n1} {n2}')
if n2>n1 and n2>n3:
    if n1>n3:
        print(f'{n2} {n1} {n3}')
    else:
        print(f'{n2} {n3} {n1}')  
if n2>n1 and n3>n2:
    print(f'{n3} {n2} {n1}')                   
#----------------------------------------------------------------
'''
 Um posto está vendendo combustíveis com a seguinte tabela de descontos:

Álcool
- até 20 litros, desconto de 3% por litro
- acima de 20 litros, desconto de 5% por litro
Gasolina
- até 20 litros, desconto de 4% por litro
- acima de 20 litros, desconto de 6% por litro

Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina),
 calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 3,30 e o preço do litro do á0lcool é R$ 2,10.
 '''
litros = int(input('Digite a quantidade de litros que deseja abastercer: '))
tipo = input('Digite o tipo do combustível a ser usado')
g = 3.30
a = 2.10
if litros <= 20 and tipo == 'A' or tipo=='a':
    desconto = (litros*a) - (a*0.03)
elif litros > 20 and tipo == 'A' or tipo == 'a':
    desconto = (litros*a) - (a*0.05)
elif litros <= 20 and tipo == 'g' or tipo == 'G':  
    desconto = (litros*g) - (g*0.04)      
elif litros > 20 and tipo == 'g' or tipo == 'G':
    desconto = (litros*g) - (g*0.06)
print(f'O valor a ser pago é de R${desconto}')        
import graphlib