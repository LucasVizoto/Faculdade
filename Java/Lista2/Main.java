public class Main {
    public static void main(String[] args) {
        Cliente fulano = new Cliente("24691", "1234", "lucas", 1300);
        fulano.realizarDeposito(1805);
        fulano.realizarSaque(540);
    }
}