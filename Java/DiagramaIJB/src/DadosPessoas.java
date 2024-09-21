import java.util.Scanner;
public class DadosPessoas {
    private String cpf, rg, email, estado_civil, cargo_atual;

    Scanner scanner = new Scanner(System.in);//criando um scanner para a execução do prompt
    //construtor vazio para criação sem param
    DadosPessoas(){}

    public DadosPessoas(String rg, String email, String estado_civil, String cargo_atual) {
        setCpf();
        setRg(rg);
        setEmail(email);
        setEstado_civil(estado_civil);
        setCargo_atual(cargo_atual);
    }

    public boolean validarCpf(){
        String cpf_interno = getCpf();

        // remove caracteres não numéricos do cpf
        cpf = cpf.replaceAll("[^0-9]", "");

        // verifica se o cpf tem 11 dígitos
        if (cpf.length() != 11) {
            return false;
        }

        // analisa irregularidades (todos os digitos iguais)
        boolean todosDigitosIguais = true;
        for (int i = 1; i < cpf.length(); i++) {
            if (cpf.charAt(i) != cpf.charAt(0)) {
                todosDigitosIguais = false;
                break;
            }
        }
        if (todosDigitosIguais) {
            return false;
        }

        // analisar os digitos finais
        int soma = 0;
        for (int i = 0; i < 9; i++) {
            soma += (cpf.charAt(i) - '0') * (10 - i);
        }
        int primeiroDigitoVerificador = 11 - (soma % 11);
        if (primeiroDigitoVerificador > 9) {
            primeiroDigitoVerificador = 0;
        }

        soma = 0;
        for (int i = 0; i < 10; i++) {
            soma += (cpf.charAt(i) - '0') * (11 - i);
        }
        int segundoDigitoVerificador = 11 - (soma % 11);
        if (segundoDigitoVerificador > 9) {
            segundoDigitoVerificador = 0;
        }

        //criando uma variavel verificar para retornar os valores de true ou false, para execução do if e retur de forma mais facil
        boolean verificar = cpf.charAt(9) - '0' == primeiroDigitoVerificador && cpf.charAt(10) - '0' == segundoDigitoVerificador;
        // verificar se os dígitos verificadores estão corretos
        if (verificar){
            System.out.println("Número de Cpf VALIDO");
        }else{
            System.out.println("Número de cpf INVALIDO");
        }
        return verificar;
    }
    public String getCpf() {
        return cpf;
    }

    public void setCpf() {
        //prompt de comando em java para que o usuário digite o valor desejado no console
        System.out.println("Digite aqui seu CPF: ");
        this.cpf = scanner.nextLine();
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEstado_civil() {
        return estado_civil;
    }

    public void setEstado_civil(String estado_civil) {
        this.estado_civil = estado_civil;
    }

    public String getCargo_atual() {
        return cargo_atual;
    }

    public void setCargo_atual(String cargo_atual) {
        this.cargo_atual = cargo_atual;
    }

    @Override
    public String toString() {
        return "DadosPessoas{" +
                "cpf='" + cpf + '\'' +
                ", rg='" + rg + '\'' +
                ", email='" + email + '\'' +
                ", estado_civil='" + estado_civil + '\'' +
                ", cargo_atual='" + cargo_atual + '\'' +
                '}';
    }
}
