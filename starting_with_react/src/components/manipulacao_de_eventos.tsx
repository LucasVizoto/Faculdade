import React,{useState} from "react";


//set das variáveis
const EventHandleingExemple: React.FC = ()=>{
    const [inputValue, setInputValue] = useState<string>('');
    const [nameValue, setNameValue] = useState<string>('');
    const [clickCount, setClickCount] = useState<number>(0);


//Funças para manipular mudanças no campo de entrada

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setInputValue(event.target.value);
};
const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setNameValue(event.target.value);
};

//Função para manipular o clique no botão
const handleButtonClick =() =>{
    setClickCount(clickCount + 1);
};
const handleButtonReduceClick =() =>{
    setClickCount(clickCount - 1);
};

//renderizando a tela com as variáveis
return(
    <div>
        <h1>Exemplo de Manipulação de Eventos</h1>
        <div>
            <label htmlFor="inputField">Digite algo: </label>
            <input 
            type="text"
            id='inputField'
            value={inputValue}
            onChange={handleInputChange} 
            />

            <p>Você digitou: {inputValue}</p>
        </div>
        <div>
            <button onClick={handleButtonClick}>Clique aqui</button>
            <p>O botão foi clicado {clickCount} vezes</p>
        </div>
        <div>
            <label htmlFor="inputField">Digite Novamente: </label>
            <input
             type="text"
             id="inputField"
             value={nameValue}
             onChange={handleNameChange} 
            />

            <p>Você digitou: {nameValue}</p>
            <button onClick={handleButtonReduceClick}>Clique para reduzir</button>

        </div>
    </div>

    );
};

//exportando a função 
export default EventHandleingExemple;