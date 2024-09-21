import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import { AppProps } from './components/component-props'
import { AppRenderizeConditional } from './components/renderizacao-condicional'

function App() {
  const [count, setCount] = useState(0)
  const [reduce_count, setReduceCount] = useState(0)
  const [sum_counters, setSumCounters] = useState(0)
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="./src/assets/foto.jpg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        <button id="reduce" onClick={() => setReduceCount((reduce_count) => reduce_count - 1)}>
          count is reducing {reduce_count}
        </button>
        </p>
        <p>
        <button id="sum" onClick={() => setSumCounters(() => reduce_count+count)}>
          the sum from the counters is {sum_counters}
        </button>
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    <div>
      {/* <AppProps/> */}
      {/* <AppProps/> */}
      {/* <AppRenderizeConditional/> */}
    </div>
    </>


)
}

export default App