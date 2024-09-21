class Pessoa:
    def __init__(self, name, email):
        self.name = name
        self.email = email
    
    def falar_meu_nome(self):
        print(self.name)

lucas = Pessoa("Lucas", "lucagay@hotmail.com")

lucas.falar_meu_nome()
