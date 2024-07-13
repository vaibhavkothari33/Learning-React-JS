import React from 'react'
import UserContextProvider from './context/UserContextProvider'


function App() {


  return (
    <UserContextProvider>
      <h1 className='text-center text-white'>Hello world</h1>
    </UserContextProvider>
  )
}

export default App
