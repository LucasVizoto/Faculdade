import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import EventHandleingExemple from './components/manipulacao_de_eventos.tsx'
import { Timer } from './components/2-Component_timer.tsx'
import { Message } from './components/2-Message_change_in_5_seconds.tsx'
import { UserList } from './components/2-UserList(Consumo de API com useEffect).tsx'
// import { AppProps } from './components/component-props.tsx'
// import { AppRenderizeConditional } from './components/renderizacao-condicional.tsx'




createRoot(document.getElementById('root')!).render(
 // ReactDOM.createRoot() cria uma raiz do React para renderizar o componente App.
  // O StrictMode é uma ferramenta de React que ajuda a detectar e corrigir erros comuns durante o desenvolvimento.
  // Ele impede o uso de features que podem ser incompatíveis com versões anteriores do React.
  // Neste caso, ele força a utilização de mode estrito de React, que não permite o uso de features como "null" e "undefined" sem um valor padrão.
  <StrictMode>
    {/* <App/> */}
    {/* <AppProps/>*/}
    {/* <AppRenderizeConditional/> */}
    {/* <EventHandleingExemple/> */}
    {/* <Message/>
    <Timer/> */}
    <UserList/>
  </StrictMode>,
)
