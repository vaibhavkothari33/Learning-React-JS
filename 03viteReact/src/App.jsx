import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Chai is ready
      </h1>
      <Card username="vktoons33" btn="click me"/>
      <Card username="Madhu" />
      {/*in this the value of btn is not passed */ }
      
       </>
  )
}

export default App
