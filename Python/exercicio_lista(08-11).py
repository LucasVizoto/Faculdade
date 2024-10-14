def exercicio_novo():
#Fazer um algoritmo que leia a idade e o nome de 30 pessoas (o algoritmo não deve permitir valores inválidos).
#Os valores lidos devem ser armazenados em um vetor. Após a leitura de todos os valores, encontre: 

# a) a média das idades; 
# b) a quantidade de pessoas que possuem idade acima da média; 
# c) o nome das pessoas que possuem idade abaixo da média; 
# d) o nome da pessoa mais velha e da mais nova; 
# e) para cada número lido, mostre uma tabela contendo o valor lido e o fatorial deste valor.
    def media_idades(lista):
        soma_valores = 0
        for item in lista:
            soma_valores += item
        return soma_valores/len(lista)
    
    def qtdd_pessoas_acima(lista, media):
        cont_acima = 0
        for item in lista:
            if item > media:
                cont_acima+=1
        return cont_acima
    
    def nome_abaixo_da_media(list_nomes, lista_idade, media):
        lista_nomes_abaixo = []
        for indice,valor in enumerate(lista_idade):
            if valor<media:
                lista_nomes_abaixo.append(list_nomes[indice])
        return lista_nomes_abaixo
    
    def pessoa_mais_velha(lista_idade, lista_nomes):
        maior_idade = lista_idade[0]
        nome_mais_velho = lista_nomes[0]
        for index, valor in enumerate(lista_idade):
            
            maior_idade = valor if valor>maior_idade else maior_idade
            nome_mais_velho = lista_nomes[index] if valor>maior_idade else nome_mais_velho
        return nome_mais_velho
    
    def fatorial(lista_idade):
        for item in lista_idade:
            ...
            
    vetor_idades = vetor_nomes = []
    for i in range(30):
        vetor_idades.append(int(input('Digite idade: ')))
        vetor_nomes.append((input('Digite nome: ')))
    
exercicio_novo()    