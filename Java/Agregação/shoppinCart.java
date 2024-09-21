import java.util.ArrayList;
import java.util.List;

public class shoppinCart {
    private int id;
    private float totalPrice;
    private List<carItem> carItens; //criou uma lista de itens do carrinho
    //o carrinho independe do itens mas os itens dependem do carrinho

    public shoppinCart() {
        //aloca espaço na memória para o vetor
        this.carItens = new ArrayList<carItem>();
    }

    public shoppinCart(int id, float totalPrice) {
        this.setId(id);
        this.setTotalPrice(totalPrice);
        //aloca espaço na memória para o vetor
        //eu sou obrigado a alocar espaço na memória para poder incluir no array/lista
        this.carItens = new ArrayList<carItem>();

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public float getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(float totalPrice) {
        this.totalPrice = totalPrice;
    }

    public List<carItem> getCarItens() {
        return carItens;
    }

    public void setCarItens(List<carItem> carItens) {
        this.carItens = carItens;
    }

    //metodo para adiionar um carItem no vetor
    public void addCarItem(int id, int quantity, Product product) {
        //cria um carItem e adiciona este no vetor pois você não pode esperar que le estej apronto, já que
        //o carItem é dependente do shoppingCart
        //por isso que escrever public void addCarItem(carItem carItem) , estaria errado, já que isso é
        //uma agregação
        this.carItens.add(new carItem(id, quantity, product));
        calculateTotalPrice();
    }

    public void calculateTotalPrice() {
        for(carItem item: carItens){
            this.totalPrice+=item.getQuantity()*item.getProduct().getPrice();
        }
    }

    @Override
    public String toString() {
        return "shoppinCart{" +
                "id=" + id +
                ", totalPrice=" + totalPrice +
                ", carItens=" + carItens + //vai mostrar todos os itens de dentro do vetor e vai chamar o toString de cada carItem
                '}';
    }

}