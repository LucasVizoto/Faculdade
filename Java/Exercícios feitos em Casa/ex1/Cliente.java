package ex1;

public class Cliente {
        public String nomeCliente;
        public int numeroConta, numeroAgencia;
        public float saldo;

        //construtores
        public Cliente(String nome, int numeroConta, int numeroAgencia, float saldo){
            this.nomeCliente = nome;
            this.numeroConta = numeroConta;
            this.numeroAgencia = numeroAgencia;
            this.saldo = saldo;
        }


        //método
        public void deposito(float valor){
            this.saldo += valor;
        }
        public void saque(float valor){
            if(this.saldo<0){
                System.out.println("Saldo insuficiente");
            }
            else {
                this.saldo -= valor;
            }
        }
        public void retorno(){
            System.out.println("\nNúmero da Conta: "+this.numeroConta+
                    "\nNome do Cliente: "+this.nomeCliente+"\nSaldo Atual"+this.saldo);
        }
    }

