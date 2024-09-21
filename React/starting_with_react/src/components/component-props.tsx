import React from "react";

interface WelcomProps{
    name: string;
    age: number;
    address: string;
    city: string;
}

const Welcome: React.FC<WelcomProps> = ({name,age, address, city})=> {
    return(
        <div>
            <h1>Hello, {name}!</h1>
            <p>You are {age} years old.</p>
            <p>You address {address}</p>
            <p>In {city}</p>
        </div>
    );
};

export function AppProps(){
    return(
        <div className="App">
            <Welcome name="Jovem" age={25} address="adadasda" city="franca"/>
            <Welcome name="Bob" age={30} address="sdfsdfads" city="franca"/>
            <Welcome name="Lucas" age={19} address="sdfsafsdfsdf" city="franca"/>
            <Welcome name="Beatriz" age={18} address="sdfadfasdfa" city="franca"/>
        </div>
    );
}