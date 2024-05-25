import { useState } from 'react'
import './App.css'

function App() {
  let [value, setValue] = useState(0);

  const addValue = () => {
    value += 1;
    if (value < 21) {
      setValue(value);
      // console.log("value added: ", value);
    }
    else {
      // value=21;
      console.log("value can not be incresase");
    }

  }
  const remValue = () => {
    value -= 1;
    if (value>-1){

      setValue(value);
      // console.log("value removed: ", value);
    }
    else{
      console.log("Value cannot be decresed");
    }
  }

  return (
    <>
      <h1>Simple Counter</h1>
      <h2>Counter value: {value}</h2>
      <button onClick={addValue}>Increment: {value}</button>
      <br /><br />
      <button onClick={remValue}>Decrement: {value}</button>
      <br /><br />
      {/* <button onClick={addValue}>Increment x 2: {value*2}</button>
    <br /><br />
    <button onClick={remValue}>Decrement x 2: {value*2}</button> */}
    </>
  )
}

export default App
