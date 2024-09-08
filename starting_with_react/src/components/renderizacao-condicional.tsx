import { useState } from "react";

// Definindo a interface para os itens da lista
interface Item{
    id: number;
    name: string;
    price: number;
    quantity: number;
}

// Componente de Lista que renderiza itens com base em uma condição
export function AppRenderizeConditional(){
const [showItens, setShowItens] = useState<boolean>(true);
const[items, setItems] = useState<Item[]>([
    {id:1, name: 'Apple', price: 1, quantity:33},
    {id:2, name:'Banana', price: 121, quantity: 1},
    {id:3, name:'Cherry', price: 12, quantity:18},
]);

    return(
        <div>
            <h1>Lista de Itens</h1>
            {/* executoando uma condicional no clique do botao
              pois caso nshow itens seja false, não seja mostrado */}
            <button onClick={()=> setShowItens(!showItens)}>
                {showItens ? 'Esconder Itens' : 'Mostrar Itens'}
                {/* if ternario mudando o valor mostrado no botão baseado no que é amostrado */}
            </button>

            {/* Renderrização Condicional */}
            {showItens?(
                <ul>
                    {/* Renderizando a lista de itens */}
                    {items.map((item)=>(
                        <li key={item.id}>{item.name},   Preço: R${item.price},   Quatidade: {item.quantity}</li>
                    ))}
                </ul>
                ):(
                    <p>A lista está oculta</p>
                )
            }
        </div>
    );
};