package ex1;

public class Main {
        public static void main(String[] args) {
 /*           //cria os objetos
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
            obj2.mostra(); */


            //colocar o f no final dos floats
            Aluno aluno1 = new Aluno("Lucas", 24691, 19, 8.2f, 7.5f);
            aluno1.notaFinal();
            System.out.println(aluno1.dadosAluno());

            aluno1.passou();

            //colocar o f no final dos floats
            Cliente fulano = new Cliente("Fulano", 001, 1805, 1805.22f);
            fulano.deposito(1000);
            fulano.saque(18.05f);

            //colocar o f no final dos floats
            Cliente beltrano = new Cliente("Beltrano", 001, 1805, 1805.22f);
            beltrano.deposito(1000);
            beltrano.saque(18.05f);


            //colocar o f no final dos floats
            Produto produto1 = new Produto("Descreção foda", 1805, 12,18.05f);
            produto1.comprar(8);
            produto1.vender(2);
            produto1.subir(10);
            produto1.descer(10);
            produto1.imprimir();

            //colocar o f no final dos floats
            Rio molhado = new Rio("Molhado", 18052022.9f, false);
            molhado.chover(12.0f);
            molhado.ensolarar(10.0f);
            molhado.limpar();
            molhado.sujar();
            molhado.imprimir();
        }


}
