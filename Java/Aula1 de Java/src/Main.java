public class Main {
    public static void main(String[] args) {
    //cria os objetos
        Carro obj1 = new Carro("Fiat", "palio", "branco", 2018,
                false,0);

        Carro obj2 = new Carro("GM", "Onix", "cinza", 2020,
                false,0);

        obj1.mostra();
        obj2.mostra();

        obj1.ligar();
        obj2.ligar();

        obj1.acelerar(100);
        obj2.acelerar(80);
        obj1.frear(40);

        obj1.mostra();
        obj2.mostra();
    }
}