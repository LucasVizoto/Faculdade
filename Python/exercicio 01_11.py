# Fazer um programa que possui um menu com as seguintes opções para executar diferentes funções, até que o usuário digite -1 e termine o programa:
# ◦ Escrever a tabuada de um número ou uma mensagem de erro caso o número não esteja entre 1 e 9. O número deve ser passado como parâmetro e a validação feita na função.
# ◦ Calcular o Índice de Massa Corporal (IMC): a fórmula é IMC = peso / altura2. Passar o peso e altura como parâmetros e retornar o IMC.
# ◦ Calcular o fatorial de um número. O número deve ser passado como parâmetro e retornar o resultado.
from time import sleep
from os import system
def exercicio1():
    def tabuada(number):
        if number>9 or number<0: return print('Número passado é diferente do necessário')
        for i in range(11):
            print(f'{i} X {number} = {number*i}')
        sleep(3)    
        
    def imc(peso, altura):
        return peso / (altura**2)

    def fatorial(number):
        soma = 1
        for i in range(number):
            soma *= number-i
        return soma
    while True:
        escolha = int(input('Escolha uma das opções  seguir: \
                            \n 1. Tabuada\
                            \n 2. IMC\
                            \n 3. Fatorial\
                            \n -1. Sair    \n'))
        system('cls')
        if escolha == -1:
            break
        
        elif escolha == 1:
            tabuada_numero = int(input('Digite um número de 0 a 9 que deseja saber a tabuada: '))
            tabuada(tabuada_numero)
        
        elif escolha == 2:
            peso = float(input('Digite Peso: '))
            altura = float(input('Digite Altura: '))
            print(f'Seu IMC é {imc(peso, altura):.2f}')
            
        elif escolha == 3:
            numero_fatorial = int(input('Digite o númeor do fatorial: '))
            fat = fatorial(numero_fatorial)
            print(fat)
        
# Fazer uma função que receba o valor de
# N como parâmetro, calcular e retorne o
# valor do somatório S:
def exercicio2():
    def soma(n):
        soma = 0.5
        for i in range(1,n):
            soma += (i/(i**2))
        print(f'Sua soma é {soma}')    
    n = int(input(' '))
    somatoria = soma(n)

def validacao_cpf(cpf):

    cont_regressivo = 10
    soma = 0
    for i in range(10):
      ...  # soma += cpf[i]*cont_regressivo  
cpf = print('Digite seu CPF: ')
validacao_cpf(cpf)

# Fazer uma função que verifica se uma
# palavra, frase ou número é um
# palíndromo.
# Um palíndromo é qualquer sequência de
# caracteres que seja a mesma se lida da
# esquerda para a direita ou da direita
# para a esquerda. Por exemplo, a palavra
# “osso” é um palíndromo, pois é idêntica
# não importa o sentido da leitura.