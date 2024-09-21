import java.util.ArrayList;
import java.util.List;

public class Forum {
    private int id;
    private String name, url;
    private List<Message> message; //um forum possui muitas mensagens

    public Forum(){
        //alocando espaço na memória pro vetor
        this.message=new ArrayList<Message>();
    }
    public Forum(int id, String name, String url){
    setId(id);
    setName(name);
    setUrl(url);
    this.message= new ArrayList<Message>();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public List<Message> getMessage() {
        return message;
    }

    public void setMessage(List<Message> message) {
        this.message = message;
    }
    public void addMessage(String name, String user, int id, Person person){
            //método para adicionar a mensagem na lista
        this.message.add(new Message(id,name,person));
    }

    @Override
    public String toString() {
        return "Forum{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", url='" + url + '\'' +
                ", message=" + message +
                '}';
    }
}
