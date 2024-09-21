public class Cliente {
    private String nroConta, nroAgencia, nome;
    private float saldo;

    public Cliente(){} //construtor vazio para caso não passe nada

    public Cliente(String nroConta, String nroAgencia, String nome, float saldo) {
        this.nroConta = setNroConta(nroConta);
        this.nroAgencia = setNroAgencia(nroAgencia);
        this.nome = setNome(nome);
        this.saldo = setSaldo(saldo);
    }

    public void realizarDeposito(float valor_depositado){
        this.setSaldo(this.saldo+valor_depositado);
    }
    public void realizarSaque(float valor_sacado){
        this.setSaldo(this.saldo-valor_sacado);
    }


    public String imprimir() {
        return "\nSaldo: " + this.saldo + "\nNumero da Conta: " + nroConta +
                "\nNumero da Agencia: " + this.nroAgencia + "\nNome: " + this.nome;
    }

    //getters e setters
    public String getNroConta() {
        return nroConta;
    }

    public String setNroConta(String nroConta) {
        if (this.nroConta.length() <= 6 && this.nroConta.charAt(4) == '-') {
           return this.nroConta = nroConta;

        }
        return "Número inválido";
    }
    public String getNroAgencia() {
            return nroAgencia;
    }

    public String setNroAgencia(String nroAgencia) {
        if(nroAgencia.length()<=8 && nroAgencia.charAt(6) == '-') {
            return  this.nroAgencia = nroAgencia;
        }
        System.out.println("Número inválido");
    }

    public String getNome() {
        return nome;
    }

    public String setNome(String nome) {
        if (nome.length() <= 30) {
            return this.nome = nome;
        }
        else {
            System.out.println("Quantidade de caracteres excede");
        }
    }

    public float getSaldo() {
        return saldo;
    }

    public float setSaldo(float saldo) {
        if(saldo>=0) {
           return this.saldo = saldo;
        }
        System.out.println("Saldo não pode ser negativo");
    }
}