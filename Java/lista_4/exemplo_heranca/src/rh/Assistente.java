package rh;

public class Assistente extends Funcionario{
    private float horaExtra;
    public Assistente(){
        super(); //chama o construtor da classe pai
    }

    public Assistente(String nome, String endereco, String cpf, float salario, float horaExtra) {
        super(nome, endereco, cpf, salario); //mostra o valor da classe pai para poder validar no construtor do filho
        //super reutiliza o construtor da classe Pai
        setHoraExtra(horaExtra);
    }

    public float getHoraExtra() {
        return horaExtra;
    }

    public void setHoraExtra(float horaExtra) {
        this.horaExtra = horaExtra;
    }

    @Override
    public float calcularSalario() {
        return super.calcularSalario() + this.horaExtra * 50; //50 reias por hora extra
    }

    @Override //rescrevendo o toString
    public String toString() {
        return "Assistente{" +
                super.toString()+"horaExtra"+horaExtra+ //super referenciando o conteúdo do toString da classe Pai
                "}";
    }
}
