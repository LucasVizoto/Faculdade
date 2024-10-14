a,b,c,d,e,f,g,h,i = map(int,input().split()) # map vai dar o mesmo valor pra cada item, mas tem que entrar com um espaço em cada coisa
soma_bolas = (a+b+c+d+e+f+g+h+i)%9

lista = ['Dasher', 'Dancer', 'Prancer', 'Vixen', 'Comet', 'Cupid', 'Donner', 'Blitzen' , 'Rudolph']
rena_escolhida = lista[soma_bolas-1]
print(rena_escolhida)    
