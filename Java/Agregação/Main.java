//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        //crie três produtos,prod1,prod2,prod3, com valores
        //quaisquer para suas variáveis
        //crie dois carrinho de compra
        //o primeiro carrinho deve conter os itens de carrinho
        //relacionados aos produtos prod2 e prod3
        //os valores dos itens de carrinho e dos carrinhos podem
        //ter valores quaisquer
        Product prod1 = new Product(18,05,"Chaveiro");
        Product prod2 = new Product(15,42,"Cafeteira");
        Product prod3 = new Product(20, 22, "Porta");


        shoppinCart carrinho1 = new shoppinCart();
        shoppinCart carrinho2 = new shoppinCart(1000,0);
        carrinho1.addCarItem(15,1,prod2);
        carrinho1.addCarItem(20,2,prod3);
        System.out.println(carrinho1.toString());
    }

}