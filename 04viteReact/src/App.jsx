import { useState } from 'react'
import './App.css'


function App() {
  const [color, setColor] = useState("olive")

  return (
     <>
      <div className='w-full h-screen duration-200    '
      style={{backgroundColor:color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-1 gap-4'>
          <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-l'
          style={{backgroundColor:"red"}}
          >Red</button>

          <button onClick={()=>setColor("purple")} className='outline-none px-4 rounded-full text-white shadow-1'
          style={{backgroundColor:"purple"}}>Purple</button>

          <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-l'
          style={{backgroundColor:"blue"}}
          >Blue</button>
          <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-l'
          style={{backgroundColor:"green"}}
          >Green</button>
         <button onClick={()=>setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-l'
          style={{backgroundColor:"Black"}}
          >Black</button> 
        </div>
      </div>
     </>
  )
}

export default App
