package ex3;

// Main é o controle
public class Main{
    public static void Main(String args[]){
        Produto obj1 = new Produto(123, 12, "texto");
        Tv lg = new Tv(9.0f,123,12,"texto");
        Radio antigo = new Radio(95.7f, "FM",18, 5, "texto");

        obj1.toString();
        obj1.testaUnidade();

        lg.trocaCanal(5.0f);
        antigo.trocaEstacao(91.1f);
        antigo.trocaBanda("AM");

        lg.toString();
        antigo.toString();
        lg.testaUnidade();
        antigo.testaUnidade(); //polimorfismo
    }
}