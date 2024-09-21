package ex5;
//mesmo estando no package do ex5, este é o ex6
public class ContaEspecial {
        private String nm_cliente;
        private float salario, saldo, limite;
        private int nr_conta;

        public ContaEspecial(){
        }
        public ContaEspecial(String nm_cliente, float salario, float saldo, float limite, int nr_conta) {
            setNm_cliente(nm_cliente);
            setSalario(salario);
            setSaldo(saldo);
            setLimite(limite);
            setNr_conta(nr_conta);
        }

        public String getNm_cliente() {
            return nm_cliente;
        }

        public void setNm_cliente(String nm_cliente) {
            this.nm_cliente = nm_cliente;
        }

        public float getSalario() {
            return salario;
        }

        public void setSalario(float salario) {
            this.salario = salario;
        }

        public float saldo() {
            return saldo;
        }

        public void setSaldo(float saldo) {
            this.saldo = saldo;
        }

        public float getLimite() {
            return limite;
        }

        public void setLimite(float limite) {
            if(limite<getSalario()*3) {
                this.limite = limite;
            }else{
                System.out.println("Limite não pode ser menor que o salario");
            }
        }

        public int getNr_conta() {
            return nr_conta;
        }

        public void setNr_conta(int nr_conta) {
            this.nr_conta = nr_conta;
        }
        public void deposito(float valor_deposito){
            saldo+=valor_deposito;
        }
        public boolean retira(float valor_retirar) {
            if (saldo() < valor_retirar) {
                System.out.println("Valor do saldo menor do digitado para retirar");
                return false;
            } else {
                saldo -= valor_retirar;
                System.out.println("Valor retirado com sucesso!!");
                return true;
            }
        }
    }
