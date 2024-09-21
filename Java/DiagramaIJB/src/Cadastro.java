import java.time.LocalDate;
import java.util.ArrayList;

public class Cadastro {
    ProcessoDeTriagem processoDeTriagem;
    ArrayList<String> listaCadastro = new ArrayList<>();
    ArrayList<Integer> listaCpfs = new ArrayList<>();

    //pegando do computador a data atual(mes/dia/ano)
    LocalDate dataAtual = LocalDate.now();

    //método para enviar uma notificação para atualização para a pessoa caso passados dois ou mais anos
    public void notificacao(ProcessoDeTriagem pdt, Beneficiario bn) {
        int anoAtual = dataAtual.getYear(); //getYear para pegar apenas o ano da variável
        int anoDeCadastro = pdt.getAnoCadastro(); // pegando o ano de cadastro da classe passada como parâmetro
        if ((anoAtual - 2) >= anoDeCadastro) { //se passados dois ou mais anos do cadastrado
            System.out.println("Email para atualização de dados cadastrais para: "+ bn.getEmail());
        } else {
            System.out.println("Prazo estabelecido para atualização de cadastro ainda não foi esgotado.");
        }
    }

    //metodo para adicionar os relatorios obtidos no processo em uma espécie de "banco de dados"
    public void addCadastro(ProcessoDeTriagem pdt, Beneficiario bn){
        listaCadastro.add(String.valueOf(pdt.listaRelatorios));
        listaCpfs.add(Integer.valueOf(bn.getCpf()));
    }

    public ArrayList<String> getListaCadastro() {
        return listaCadastro;
    }

    public ArrayList<Integer> getListaCpfs() {
        return listaCpfs;
    }
}
