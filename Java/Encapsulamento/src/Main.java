public class Main {
    public static void main(String[] args) {
        Produto obj = new Produto();

        //setter feito na Produtos (método feito para permitir que se altere)
        obj.setCodigo(10);
        obj.setQtdd(30);
        obj.setNota(7);
        obj.setCodigo(-10);
        obj.setQtdd(-30);
        obj.setNota(-7);

        Produto ojt2 = new Produto(10, 200, 9);
        Produto obj3 = new Produto(12, 18,10);
        System.out.println("Código: "+obj3.getCodigo()+"\nNota: "+ obj3.getNota());
    }
}