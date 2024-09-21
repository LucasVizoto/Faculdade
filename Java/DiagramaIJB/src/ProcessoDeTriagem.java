import java.time.Year;
import java.util.ArrayList;
import java.util.Scanner;

public class ProcessoDeTriagem {
    Engenheiro engenheiro;
    Psicologa psicologa;
    AssistenteSocial assSocial;
    Beneficiario beneficiario;
    ArrayList<String> listaRelatorios = new ArrayList<>();
    private int anoCadastro;
    private String relatorio;
    Scanner scanner = new Scanner(System.in);
    //construtor com os envolvidos na triagem
    public ProcessoDeTriagem(Engenheiro engenheiro, Psicologa psicologa, AssistenteSocial assSocial, Beneficiario beneficiario) {
        setEngenheiro(engenheiro);
        setPsicologa(psicologa);
        setAssSocial(assSocial);
        setBeneficiario(beneficiario);
    }

    //metodo proprio da classe
    public void escreverRelatorio(){
        System.out.println("Digite aqui o relatório geral recolhido na visitação: ");
        String relatorioIndiv = scanner.nextLine();
        listaRelatorios.add(relatorioIndiv);
        this.anoCadastro = Year.now().getValue();
    }
    //getters e setters da classe
    public Engenheiro getEngenheiro() {
        return engenheiro;
    }

    public void setEngenheiro(Engenheiro engenheiro) {
        this.engenheiro = engenheiro;
    }

    public Psicologa getPsicologa() {
        return psicologa;
    }

    public void setPsicologa(Psicologa psicologa) {
        this.psicologa = psicologa;
    }

    public AssistenteSocial getAssSocial() {
        return assSocial;
    }

    public void setAssSocial(AssistenteSocial assSocial) {
        this.assSocial = assSocial;
    }

    public Beneficiario getBeneficiario() {
        return beneficiario;
    }

    public void setBeneficiario(Beneficiario beneficiario) {
        this.beneficiario = beneficiario;
    }

    public int getAnoCadastro() {
        return anoCadastro;
    }
}
