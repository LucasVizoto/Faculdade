// import { useEffect, useState } from 'react';

export function ColorBox({ color }: { color: string }) {

    // const [bgColor, setBgColor] = useState<string>('white');

    // useEffect(() => {
    //     setBgColor(color);
    // }, [color]);
    //executando o ueEffect quando o componete acaba de ser montado ou quando a variável for alterada

    return (

        <div style={{ backgroundColor: color, width: '200px', height: '200px', border: '1px solid black' }}>
            <p style={{ textAlign: 'center', lineHeight: '200px', color: 'black' }}>Cor Atual: {color}</p>

        </div>

    );
}