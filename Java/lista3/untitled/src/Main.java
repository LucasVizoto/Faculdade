//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
    Person pessoa1 = new Person("nome","user", 18);
    Person pessoa2 = new Person("nome2", "usuario2", 05);

    Forum congresso = new Forum(12,"nome_forum","https://github.com");
    congresso.addMessage("bom_dia","alguem", 45, pessoa1);
    }
}