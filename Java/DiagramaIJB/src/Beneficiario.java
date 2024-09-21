import java.util.Random;
public class Beneficiario extends DadosPessoas{
    private String endereco;
    private int cod_beneficiario;
    Random random = new Random();
    //construtor vazio para criação sem param
    Beneficiario(){}

    //gera números aleatórios de 0 a 999999
    public int geraCod(){
        int codigo = random.nextInt(1000000);
        return codigo;
    }
    int cod_benef = geraCod();

    public Beneficiario(String cpf, String rg, String email, String estado_civil, String cargo_atual, String endereco) {
        super(rg, email, estado_civil, cargo_atual);
        setCpf();
       setEndereco(endereco);
       setCod_beneficiario(cod_benef);
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public int getCod_beneficiario() {
        return cod_beneficiario;
    }

    public void setCod_beneficiario(int cod_benef) {
        this.cod_beneficiario = cod_benef;
    }

    @Override
    public String toString() {
        return "Beneficiario{" +
                "endereco='" + endereco + '\'' +
                ", cod_beneficiario=" + cod_beneficiario +
                '}';
    }
}
