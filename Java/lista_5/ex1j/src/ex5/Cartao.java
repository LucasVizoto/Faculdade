package ex5;

//mesmo estando no packadge  do ex5, esse é o ex7
public class Cartao extends Conta {
    private Conta conta;
    private int senha;

    public Cartao(Conta conta, int senha) {
        setConta(conta);
        setSenha(senha);
    }

    public Conta getConta() {
        return conta;
    }

    public void setConta(Conta conta) {
        this.conta = conta;
    }

    public int getSenha() {
        return senha;
    }

    public void setSenha(int senha) {
        this.senha = senha;
    }

    public boolean retira(float valor_retirar, int senha_informada) {
        if(senha_informada==getSenha()) {
            return super.retira(valor_retirar);
        }else {
            System.out.println("Senha incorreta");
            return false;
        }
    }
    public void alteraSenha(int senha_antiga, int senha_nova){
        if (senha_antiga==getSenha()){
            setSenha(senha_nova);
            System.out.println("Senha alterada com sucesso!!");
        }else{
            System.out.println("Senha antiga não está correta");
        }
    }

}
