def exercicio_1():

# Faça um programa que use a função valorPagamento para determinar o valor a ser pago por uma
# prestação de uma conta. O programa deverá solicitar ao usuário o valor da prestação e o número
# de dias em atraso e passar estes valores para a função valorPagamento, que calculará o valor a
# ser pago e devolverá este valor ao programa que a chamou. O programa deverá então exibir o
# valor a ser pago na tela. Após a execução o programa deverá voltar a pedir outro valor de
# prestação e assim continuar até que seja informado um valor igual a zero para a prestação. Neste
# momento o programa deverá ser encerrado, exibindo o relatório do dia, que conterá a
# quantidade e o valor total de prestações pagas no dia. O cálculo do valor a ser pago é feito da
# seguinte forma: para pagamentos sem atraso, cobrar o valor da prestação, e quando houver
# atraso, cobrar 3% de multa, mais 0,1% de juros por dia de atraso.
    from os import system #system para dar o clear no console depois
    def valorPagamento(valor, dias):
        if dias <= 0:
            return valor  #retorna apenas o valor pois pagou no dia
        multa = 1.03+(0.001*dias)  
        return valor*multa #retorna valor com a aplicação da multa
    
    qtdd_prestacoes = soma_pagamentos = 0
    while True: #while True para ir fazendo até digitar 0

        valor_prestacoes = int(input('Valor da Prestação: '))
        if valor_prestacoes == 0:
            break #condição para encerrar o loop
        qtdd_prestacoes+=1
        dias_de_atraso = int(input('Quantidade de dias em atraso: '))
        valor_ser_pago = valorPagamento(valor_prestacoes, dias_de_atraso)
        soma_pagamentos += valor_ser_pago #acumulador
        print(f'O valor a ser pago nesta prestação é: R${valor_ser_pago:.2f}')
    
    system('cls') #limpa o console

#print para exibição
    print(f'Relatório do dia: \
          \nO valor total de prestações pagas: R${soma_pagamentos:.2f}\
          \nTotal de prestações: {qtdd_prestacoes}')



def exercicio_2():
# A MODA de um vetor de números é o número no vetor que é repetido com maior frequência.
# Se mais de um número for repetido com frequência máxima igual, não existirá uma moda.
# Escreva uma função que aceite um vetor de números e retorne a moda ou uma indicação de que
# a moda não existe.
    from random import randint
    # from statistics import mode
    # mode(lista) :)

    def funcao_moda(lista):
        dicionario_de_contagem = {}  # dicionário para armazenar a contagem de cada valor
# por adicionar chave valor, fica mais facil de manipular, pois o número da lista ficaria como chave, e sua ocorrencia como um valor desta
        for valor in lista: #para cada valor da lista
            if valor in dicionario_de_contagem: #valor na contagem (olha se já foi contado)
                dicionario_de_contagem[valor] += 1 
            else:          #Faz a inclusão no dicionário se nn tiver
                dicionario_de_contagem[valor] = 1


        # ver valor com a contagem mais alta e def da quatidade
        maior_contagem = qtdd_maior = 0
        tem_moda = True
        
        for valor, contagem in dicionario_de_contagem.items(): #itens puxando o valor e o número de vezes que ele aparece
            if contagem > maior_contagem:
                moda = valor
                maior_contagem = contagem
            print (f' Numero {valor} aparece: {contagem} vezes')
        # for para definir o maior valor

        for valor, contagem in dicionario_de_contagem.items():
            if contagem == maior_contagem:
                qtdd_maior += 1
        #for para ver quantas ocorencias de maior_contagem em contagem

        tem_moda = False if qtdd_maior > 1 else True #ternario para economizar linha 

        return moda if tem_moda else 'Não há moda'
       #se tem_moda for True, ele retorna moda, senão retorna essa String

    # Exemplo de uso
    lista = [randint(0,10) for i in range(30)] #list comprehension
    moda = funcao_moda(lista) 
    print("\nA moda da lista é:", moda)

def exercicio_3():
# Fazer um programa que desenvolva um jogo para adivinhar uma palavra oculta. Será um jogo
# semelhante ao da forca, mas com algumas diferenças. Neste jogo, o jogador tenta adivinhar uma
# palavra oculta, mediante uma quantidade de tentativas limitada. Para isso, o programa escolhe,
# aleatoriamente, uma palavra de uma lista de palavras contidas em um arquivo e o jogador deve
# adivinhar a palavra. Essa lista deve conter, no mínimo, 10 palavras. A quantidade de tentativas
# também deve ser aleatória, em um intervalo de 6 a 11. Quando o jogador adivinha alguma letra,
# as letras correspondentes na palavra são reveladas.
# 
#  Além disso, deve ser informado também a
# quantidade de tentativas que ainda resta quando a letra for incorreta, mensagem caso já tenha
# tentado a letra, e outras situações para tornar o jogo mais interessante. O jogo finaliza quando o
# jogador adivinhar a palavra ou acabar as suas tentativas.
    from random import randint
    from os import system
    
    lista_palavra_oculta = []
    letra_tentadas = []
    i=0 #Numero para controlar as tentativas da pessoa e nn criar um loop infinito
    
    with open('lista_palavras.txt', 'r', encoding = 'utf8') as arquivo:
        for linha in arquivo:
            linha = linha.strip()
            lista_palavra_oculta.append(linha)

    palavra_programa = lista_palavra_oculta[randint(1,len(lista_palavra_oculta))-1] #Programa escolhe a palavraque vai usar
    situacao_usuario = '*'*(len(palavra_programa)) #O que vai ser mostrado quando o usuário digitar uma letra certa
    tentativas_restantes = randint(6,11)
    #randomiza as tentativas e randomiza a escolha de palavras


    while i < tentativas_restantes:
        print('\n',situacao_usuario)
        letra_escolhida = input('Digite a letra da tentativa: ').lower()
        
        if letra_escolhida in letra_tentadas:
            print(f'Você já escolheu essa letra...')
        if len(letra_escolhida)>1:
            print('Digite apenas uma letra... (Contabilizado como erro)')

        if letra_escolhida in palavra_programa: #caso a pessoa acerte a palavra, mudar na situação do usuário
            for contagem_posicao in range(len(palavra_programa)):
                if letra_escolhida == palavra_programa[contagem_posicao]: # se a letra for identica a letra referente ao indice da senha secreta .
                    situacao_usuario = situacao_usuario[:contagem_posicao] + letra_escolhida + situacao_usuario[contagem_posicao + 1:] 
                # situacao_usuario que antes só tinha * , agora recebe a nova letra no lugar certo. FATIAMENTO. 
                # recebe a situação até o contador, insere a letra, depois insere o resto (resto pq é do contador +1 : até o final )
                # x = x[0:contador] (de 0 até o contador) + letra + x[contador+1 : 0]
            
            i-=1 #No caso da pessoa acertar não contabilizar a "tentativa"
            letra_tentadas.append(letra_escolhida) #guardar numa lista as letras que a pessoa já usou para informar depois

        i+=1
        if letra_escolhida not in palavra_programa:
            print(f'Essa letra infelizmente não está na palavra. Restam {(tentativas_restantes-i)} tentativas')
        #print tentativas caso erre

        if situacao_usuario == palavra_programa: #msg de acerto
            system('cls')
            print(f'PARABÉNS 🎉!!! \
                  \nA palavra era realmente {situacao_usuario.upper()}')
            break

    if situacao_usuario != palavra_programa:
        print(f'\n\nSinto muito... Você não acertou... \nA palavra era: {palavra_programa.upper()}')