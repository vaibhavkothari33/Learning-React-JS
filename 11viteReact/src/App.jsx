import { useState } from 'react'
import './App.css'

function App() {
  const [dark, setDark] = useState(false)

  const toggleDarkMode = () => {
    setDark(!dark);
  };


  return (
    <>
      <div className={`${dark && "dark"}`}>
        <div className='dark:bg-blue-900'>

        <h1 className='text-blue-800 text-bold text-5xl dark:text-yellow-400 rounded-xl'> Power of Tailwind Css</h1>

        <div className='mt-20 text-black bg-blue-700 rounded-xl'>
          <h2 className='p-5'>This is second tittle</h2>
          <p className='text-left mx-5 pb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, molestiae? Repellendus illo sequi optio eos. Ipsa tempore veniam inventore fuga. Non, dicta facere! Eius eligendi provident sequi iure atque blanditiis beatae. Hic corporis perferendis similique totam iusto optio corrupti ratione. Optio nobis a minima eum!</p>
        </div>
        <div className='mt-20 text-black bg-blue-700 rounded-xl'>
          <h2 className='p-5'>This is Third tittle</h2>
          <p className='text-left mx-5 pb-7 mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, molestiae? Repellendus illo sequi optio eos. Ipsa tempore veniam inventore fuga. Non, dicta facere! Eius eligendi provident sequi iure atque blanditiis beatae. Hic corporis perferendis similique totam iusto optio corrupti ratione. Optio nobis a minima eum!</p>
        </div>

        <button className='rounded-full bg-slate-900 w-10 h-10 mb-4  text-white absolute bottom-30 right-16' onClick={toggleDarkMode} >{dark ? "LGT" : "DRK"}
        </button>

        </div>
      </div>
    </>
  )
}

export default App
