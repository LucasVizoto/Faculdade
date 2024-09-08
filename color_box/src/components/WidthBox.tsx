import { useEffect, useState } from 'react';

export function WidthBox({ width }: { width: number }) {

    const [widthAux, setWidthAux] = useState<number>(180);

    // useEffect(() => {
    //     setBgColor(color);
    // }, [color]);
    //executando o ueEffect quando o componete acaba de ser montado ou quando a variável for alterada

    return (

        <button style={{width: `${widthAux}px`}}>

        </button>
    );
}