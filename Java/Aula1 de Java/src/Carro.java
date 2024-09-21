public class Carro {
    //variáveis
    public String marca, modelo, cor;
    public int ano;
    public boolean motor;
    public float velAtual;

    public Carro(String marca, String modelo, String cor,
                 int ano, boolean motor, float velAtual){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
        this.motor = motor;
        this.velAtual = velAtual;
    }

    public void mostra(){
        System.out.println(" Marca " + this.marca +
                " Modelo " + this.modelo + " Cor " + this.cor +
                " Motor " + this.motor + " VelAtual " + this.velAtual);
    }

    //ligar o carro
    public void ligar(){
        if (!this.motor) { //não motor (false) se false
            this.motor = true; //está ligado
        }
    }
    public void desligar() {
        if (this.motor) {
            this.motor = false; //está desligado

        }
    }

    public void acelerar(float valor_a_ser_acelerado){
        if(this.motor) {
            this.velAtual += valor_a_ser_acelerado;
        }
    }
    public void frear(float valor_a_ser_reduzido){
        if(this.motor) { //carro esteja ligado
            if(this.velAtual - valor_a_ser_reduzido >= 0){ //valor ficará positivo
                this.velAtual += valor_a_ser_reduzido;
            }
        }
    }
}
