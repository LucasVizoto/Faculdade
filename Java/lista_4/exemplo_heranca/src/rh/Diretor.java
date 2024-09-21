package rh;
public class Diretor extends Funcionario{
    private float acoesEmpresa;
    public Diretor(){
        super();
    }
    public Diretor(String nome, String endereco, String cpf, float salario, float acoesEmpresa) {
        super(nome, endereco, cpf, salario);
        setAcoesEmpresa(acoesEmpresa);
    }

    public float getAcoesEmpresa() {
        return acoesEmpresa;
    }

    public void setAcoesEmpresa(float acoesEmpresa) {
        this.acoesEmpresa = acoesEmpresa;
    }

    @Override
    public float calcularSalario() {
        return super.calcularSalario() + ((this.acoesEmpresa*2)/12.0f); //12.0f é a mesma coisa que 12 mas em float
    }

    @Override
    public String toString() {
        return "Diretor{"+
                super.toString() + "acoesEmpresa" +acoesEmpresa
                + "}";
    }
}
