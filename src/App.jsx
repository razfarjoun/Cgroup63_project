import { useState } from 'react'
import './App.css'
import Login from './FuncComps/FCLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div> 
        <h1 className="text-3xl font-bold underline">
      Hello world!!!!
    </h1>
    <Login> Login</Login>
  </div>

  )
}

export default App
