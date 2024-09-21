public class Psicologa extends VoluntarioDeTriagem{
    private int nrDePermissão;
    //construtor apenas com o dado de Psicologa
    public Psicologa(int nrDePermissão) {
        setNrDePermissão(nrDePermissão);
    }

    //construtor com os dados de Psicologa e VoluntariosDeTriagem
    public Psicologa(int codVoluntario, String areaAtuante, int nrDePermissão) {
        super(codVoluntario, areaAtuante);
        setNrDePermissão(nrDePermissão);
    }

    //construtor comm todos os dados
    public Psicologa(String rg, String email, String estado_civil, String cargo_atual, String areaAtuante, int nrDePermissão) {
        super(rg, email, estado_civil, cargo_atual, areaAtuante);
        setNrDePermissão(nrDePermissão);
    }
    //getters e setters
    public int getNrDePermissão() {
        return nrDePermissão;
    }

    public void setNrDePermissão(int nrDePermissão) {
        setNrDePermissão(nrDePermissão);
    }

    //métodos herdados da Abstração e da interface
    @Override
    public void adicionar() {

    }

    @Override
    public void analisar() {

    }

    @Override
    public void triagem() {
        System.out.println("Realizou uma observação quanto a situação emocional da família.");
    }
}
