codigo, qtdd =  map(int,input().split())
if codigo == 1:
    total = qtdd*4.0
elif codigo == 2:
    total = qtdd*4.50
elif codigo == 3:
    total = qtdd*5.00
elif codigo == 4:
    total = qtdd*2.00
elif codigo == 5:
    total = qtdd*1.50


print(f'Total: R$ {total:.2f}')