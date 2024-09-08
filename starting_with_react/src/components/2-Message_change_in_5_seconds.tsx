import { useEffect, useState } from "react";

export function Message(){
    const [message, setMessage] = useState('Boa Tarde!!');

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setMessage('Boa Noite!!');
        }, 10_000);

        return()=> clearTimeout(timer);
    }, []);

    return(
        <div>
            <h3>{message}</h3>
        </div>
    )
}