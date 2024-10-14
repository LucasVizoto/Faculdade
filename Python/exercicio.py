import random
def soma(vet):
    for i in range(len(vet)):
        somatoria = 0
        somatoria+=vet[i] 
    return somatoria

vet = [random.randint(0,100) for i in range(5)]
media = float(soma(vet)/len(vet))
print(media)