import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      {/* nav bar goes here */}
      <nav className='w-auto h-14 bg-indigo-200 flex justify-between px-4 md:px-4 items-center'>

        <div className="text-2xl text-indigo-700 font-bold">PW Skills</div>
        <ul className='md:flex  hidden font-semibold'>
          <li className='mx-[10px] cursor-pointer'>Home</li>
          <li className='mx-[10px] cursor-pointer'>About us</li>
          <li className='mx-[10px] cursor-pointer'>Contact</li>
        </ul>
        <div className='hidden md:block px-2 py-2 text-white rounded-xl font-bold cursor-pointer bg-indigo-700'>Login/Sign-Up</div>
        <div className="md:hidden">
          <a className='text-4xl' href="#">&#8801;</a>
        </div>
      </nav>
      {/* nav bar end here */}

      <header className='w-full h-auto'>
        <img className='w-full hidden md:block object-center' src="https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg?auto=compress&cs=tinysrgb&w=600" alt="thgis is an image" />
        <img className='w-full block md:hidden' src="https://images.pexels.com/photos/2910457/pexels-photo-2910457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="this is an image" />

      </header>
      {/* students section  */}
      <div className='h-auto w-100 flex flex-wrap flex-col items-center text-center p-10'>
        <div className='w-full h-auto flex flex-wrap flex-col items-center'>
          <p className='text-indigo-800 font-bold text-2xl md:text-4xl text-center'>"Pure Hardwork, No Shortcuts!"</p>
          <div className='w-36 h-1 border-b-4 border-yellow-400  mt-2 rounded-2xl'></div>
        </div>
      </div>
    </>
  )
}

export default App
