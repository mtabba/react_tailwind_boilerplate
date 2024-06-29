import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text=3xl from-neutral-200 font-thin">
      Boiler Plate React + Vite + Tailwind 
    </h1>
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
          Increment 
      </button>
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count - 1)}>
          Decrement
      </button>
    </div>
    </>
  )
}

export default App
