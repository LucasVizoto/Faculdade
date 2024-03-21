import rh.*; //isso importa a pasta inteira e permite utiliza-la nesta main, mas poderia
//ser importada cada classe separada

public class Main {
    public static void exibeDados(Funcionario camaleao){
        System.out.println(camaleao.toString());
        System.out.println("Salário final " + camaleao.calcularSalario());

    }
    public static void main(String[] args) {
        Assistente as = new Assistente("João", "Franca", "123", 3000,10);
        exibeDados(as);

        Gerente ge = new Gerente("Lucas", "Franca", "456", 5000,342);
        exibeDados(ge);

        Diretor di = new Diretor("Beatriz", "Franca", "789", 10000, 123);
        exibeDados(di);
    }
}