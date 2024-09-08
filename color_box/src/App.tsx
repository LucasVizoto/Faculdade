import './App.css';
import { useState } from 'react';
import { ColorInput } from './components/ColorImput.tsx';
import { ColorBox } from './components/ColorBox.tsx';
import { WidthInput } from './components/WidthImput.tsx';
import { WidthBox } from './components/WidthBox.tsx';


function App() {

  const [color, setColor] = useState<string>('white');
  const [width, setWidth] = useState<number>(180);

  return (

    <div className='App'>
      <h1>Mudar Cor de Fundo com useEffect</h1>
      <ColorInput color={color} setColor={setColor} />
      <ColorBox color={color} />Exemplo de Projeto React com TypeScript
      <WidthInput width={width} setWidth={setWidth} />
      <WidthBox width={width} />Exemplo de Projeto React com TypeScript
    </div>

  );
}

export default App;