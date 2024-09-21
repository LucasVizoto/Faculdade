import { useEffect, useState } from "react";

export function UserList(){
    const [user, setUser]= useState<string[]>([]);
    //essa variavel é um vetor de strings
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then(data => {
        const usernames = data.map((user:any) => user.name + ' - '  + user.email);
        
        setUser(usernames);
        setLoading(false);
       });
    },[]);

    if(loading){
        return <p>Carregando usuários...</p>
    }

    return(
        <div>
            <h2>Lista de Usuários</h2>
            <ul>
                {user.map(user => (
                    <li key={user}>{user}</li>
                ))}
            </ul>
        </div>
    )

}