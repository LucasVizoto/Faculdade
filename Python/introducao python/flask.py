nome = input('Nome: ')
idade = int(input('Idade: '))
nota = float(input('Nota: '))

# %s para string    %f para float   e %d para inteiro 
# se quer formatar float, usar .qtdd De Casas depois da vírgula
# obrigatório usar os dois pontos
print ('%s possui %d anos e nota %.2f' %(nome, idade,nota))
print ('{0} possui {1} anos e nota {2:.2f}' .format(nome, idade, nota))
print ('{} possui {} anos e nota {:.2f}' .format(nome, idade, nota))
print (f'{nome} possui {idade} anos e nota {nota:.2f}') # MUITO Parecido com JS, mais