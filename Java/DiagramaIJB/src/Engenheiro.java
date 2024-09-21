import java.util.Scanner;

public class Engenheiro extends VoluntarioDeTriagem{
    private int nrCrea;
    Scanner scanner = new Scanner(System.in);
    //Criando um scanner para leitura do prompt

    //Construtor apenas com as coisas de Engenheiro
    public Engenheiro(int nrCrea) {
        setNrCrea(nrCrea);
    }

    // construtor apenas com os dados de VoluntarioDeTriagem
    public Engenheiro(int codVoluntario, String areaAtuante, int nrCrea) {
        super(codVoluntario, areaAtuante);
        setNrCrea(nrCrea);
    }

    //construtor com TODOS os dados
    public Engenheiro(String rg, String email, String estado_civil, String cargo_atual, String areaAtuante, int nrCrea) {
        super(rg, email, estado_civil, cargo_atual, areaAtuante);
        setNrCrea(nrCrea);
    }

    //getters e setters
    public int getNrCrea() {
        return nrCrea;
    }

    public void setNrCrea(int nrCrea) {
        this.nrCrea = nrCrea;
    }

    //métodos herdados da abstração e da interface
    @Override
    public void adicionar() {

    }

    @Override
    public void analisar() {

    }

    @Override
    public void triagem() {
        System.out.println("Realizou a analise sobre a estrutura da residência. ");
    }
}
