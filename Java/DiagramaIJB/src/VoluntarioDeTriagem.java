import java.util.Random;
public abstract class VoluntarioDeTriagem extends DadosPessoas implements Operacoes {
    protected int codVoluntario;
    protected String areaAtuante, relatorio;
    Random random = new Random();

    //construtor com nenhum param
    public VoluntarioDeTriagem() {
    }

    // construtor apenas com os valores de voluntários
    public VoluntarioDeTriagem(int codVoluntario, String areaAtuante) {
        this.codVoluntario = geraCod();
        setAreaAtuante(areaAtuante);
    }

    // construtor com os dados completos
    public VoluntarioDeTriagem(String rg, String email, String estado_civil, String cargo_atual, String areaAtuante) {
        super(rg, email, estado_civil, cargo_atual);
        this.codVoluntario = geraCod();
        setAreaAtuante(areaAtuante);
    }
    //métodos da classe


    public int geraCod() { //setter de codVoluntário
        int codVoluntario = random.nextInt(1000000);
        return codVoluntario;
    }

    public abstract void triagem();

    // classe abstrata para ser herdada e alterada pelas subclasses


    // getters e setters

    public int getCodVoluntario() {
        return codVoluntario;
    }

    public String getAreaAtuante() {
        return areaAtuante;
    }

    public void setAreaAtuante(String areaAtuante) {
        this.areaAtuante = areaAtuante;
    }

    //tostring

    @Override
    public String toString() {
        return "VoluntarioDeTriagem{" +
                "codVoluntario=" + codVoluntario +
                ", areaAtuante='" + areaAtuante + '\'' +
                ", relatorio='" + relatorio + '\'' +
                '}';
    }
}