import { useState, useCallback } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumallowed] = useState(false)
  const [charAllowed, setCharallowed] = useState(false)
  const [password, setPassword] = useState("")


  // how to make the password generator
  // useCallback is a react hook that lets us cache function definition between re-renders
  // callback function useCallback(fn,[dependices])
  // const passwordGenerator=useCallback(fn,[lenght,numAllowed,charAllowed,setPassword])
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-={}[]";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1) //this is how random number is generated
      pass = str.charAt(char)
    }
    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])


passwordGenerator()
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div classsName="flex text-sm gap-x-2">
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Lenght: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => { setNumallowed((prev)=>!prev) ;

              }}
            />
            <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
           type="checkbox" 
           defaultChecked={charAllowed}
           id="characterInput"
           onChange={()=>{
            setCharallowed((prev)=>!prev);
           }}

          />
          <label htmlFor="characterInput">characters</label>
        </div>
      </div>
    </div></>
  )
}

export default App
