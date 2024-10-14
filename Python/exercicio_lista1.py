'''
Construa um programa que calcule a média aritmética de um conjunto 
de números pares fornecidos pelo usuário. O usuário irá 
fornecer um total de 10 números. Observe que nada impede que o 
usuário forneça quantos números ímpares quiser, 
com a ressalva de que eles não poderão ser acumulados.
'''
def exercicio_1():
    numero_usuario = []
    cont_pares = 0
    soma_pares = 0
    while cont_pares < 10:
        numero = (int(input(f'Insira o {cont_pares+1}º número par inteiro: ')))    
        if numero%2==0:
            numero_usuario.append(numero)
            soma_pares+= numero_usuario[cont_pares]
            cont_pares+=1
        else:
            print('Número digitado não é um número par')  

    media_aritmetica = float(soma_pares/cont_pares)
    print(f'A média aritmética dos números é {media_aritmetica}')

'''
Construa um programa que calcule a média aritmética de um conjunto
de números pares que forem fornecidos pelo usuário. 
O valor de finalização será a entrada do número 0 (zero).
Observe que nada impede que o usuário forneça quantos números
ímpares quiser, com a ressalva de que eles não poderão ser
acumulados.
'''
def exercicio_2():
    import os

    lista_pares = []
    soma_pares = 0
    cont_pares = 0
    print('Digite 0 caso deseja encerrar o programa')
    while True:
        numero_usuario = int(input(f'\nInsira o {cont_pares+1}º número inteiro par: '))
        if numero_usuario == 0:
            break
        if numero_usuario%2==0:
            soma_pares += numero_usuario
            cont_pares+=1
        else: print('O número digitado não é um número par...')    
    media_aritmetica = soma_pares/cont_pares
    os.system('cls')
    print(f'A média aritméca destes números é {media_aritmetica}')

'''
Imagine uma brincadeira entre dois colegas, na qual um pensa um
número e o outro deve fazer chutes até acertar o número imaginado.
Como dica, a cada tentativa é dito se o chute foi alto ou foi
baixo. Elabore um programa dentro deste contexto, que leia o número
imaginado e os chutes, ao final mostre quantas tentativas foram 
necessárias para descobrir o número.
'''
def exercicio_3():
    import random
    import os

    numero = random.randint(0,100)
    tentativas = 0
    while True:
        chute = int(input('\nDigite aqui seu chute: '))
        if chute<numero:
            print('O número pensado é MAIOR do que este chute')
        elif chute>numero:
            print('O número pensado é MENOR do que este chute')    
        tentativas+=1

        if chute == numero:
            break
    os.system('cls') 
    print(f'Parabéns!!! o numero pensado é realmente {numero} \
        \nVocê conseguiu em {tentativas} tentativas')

'''
Faça um programa que permita fazer um levantamento do estoque de
vinhos de uma adega, tendo como dados de entrada tipos de vinho, 
sendo: 'T' para tinto, 'B' para branco e 'R' para rosê. 
Especifique a porcentagem de cada tipo sobre o total geral de 
vinhos; a quantidade de vinhos é desconhecida, utilize para
finalizador do algoritmo a opção 'F' de fim.
'''
def exercicio_4():
    import os
    import time
    tinto = 0.0
    branco = 0.0
    rose = 0.0
    total_vinhos = 0.0
    while True:
        print(f'{total_vinhos} Vinhos registrados')
        tipo_vinho = input('Insira o Tipo de vinho que deseja colocar em sua adega, sendo \
                            \nT para Tinto \
                            \nB para Branco\
                            \nR pare Rosê\
                            \nSe deseja encerrar o programa basta digitar F:  ')
        if tipo_vinho.lower().startswith('t'):
            tinto +=1.0
        elif tipo_vinho.lower().startswith('b'):
            branco +=1.0
        elif tipo_vinho.lower().startswith('r'):
            rose += 1.0 
        os.system('cls')         
        if tipo_vinho.lower().startswith('f'):
            break

        else:
            print('Caractere digitado invalido...')
            time.sleep(2)

        total_vinhos += 1.0
    print(f'A porcentagem de cada vinho é de: \
        \n{((tinto*100)/total_vinhos):.2f}% (equvalente à {tinto} vinhos) da adega é composta de Vinho Tinto\
        \n{((branco*100)/total_vinhos):.2f}% (equvalente à {branco} vinhos) da adega é composta de Vinho Branco\
        \n{((rose*100)/total_vinhos):.2f}% (equvalente à {rose} vinhos) da adega é compsta de Vinho Rosê') 
'''
Faça um programa que utilize as três estruturas de 
repetição para imprimir a tabuada do número 5.
Modifique o programa para que ele imprima a tabuada de quaisquer
números, sendo que esses são fornecidos pelo usuário, 
até encontrar como finalizador o número -1.
'''
while True:
    if numero_usuario == -1 :
        break

    numero_usuario = int(input('Digite o número que deseja saber a Tabuada (O programa irá encerrar se digitado -1): '))
    for i in range(11): 
        print(f'{numero_usuario} X {i} = {numero_usuario*i}')
    
    print('\n')