import { useEffect, useState } from "react";

export function Timer(){
    const [seconds, setSeconds] = useState(0);
    

    //executada quando uma variavel é alterada, demontada ou montada
    useEffect(() =>{
        const interval = setInterval(()=>{
            setSeconds(valor_anterior=> valor_anterior+ 1);
        },1000);

        return ()=> clearInterval(interval);
        //tipo um WillAmount(clearInterval é para limpar a variaável seconds)
    });

    return(
        <div>
            <h2>Tempo Decorrido: {seconds} segundos</h2>
        </div>
    )
}