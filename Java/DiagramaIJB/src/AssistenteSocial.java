public class AssistenteSocial extends VoluntarioDeTriagem{
    private int codAssistente;

    //construtor com os dados de AssistenteSocial
    public AssistenteSocial(int codAssistente) {
        setCodAssistente(codAssistente);
    }

    //construtor com os dados de AssistenteSocial e VoluntariosDeTriagem
    public AssistenteSocial(int codVoluntario, String areaAtuante, int codAssistente) {
        super(codVoluntario, areaAtuante);
        setCodAssistente(codAssistente);
    }

    //construtor com todos os dados
    public AssistenteSocial(String rg, String email, String estado_civil, String cargo_atual, String areaAtuante, int codAssistente) {
        super(rg, email, estado_civil, cargo_atual, areaAtuante);
        setCodAssistente(codAssistente);
    }

    //getters e setters
    public int getCodAssistente() {
        return codAssistente;
    }

    public void setCodAssistente(int codAssistente) {
        this.codAssistente = codAssistente;
    }

    //métodos herdados da Abstração e interface
    @Override
    public void adicionar() {

    }

    @Override
    public void analisar() {

    }

    @Override
    public void triagem() {
        System.out.println("Realizou uma análise quanto as consições e programas da família");
    }
}
