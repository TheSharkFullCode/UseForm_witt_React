import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Main from '../mainprincipal/Main';

export const LoginUser = () => {

  const [Isloggin,setIsloggin]=useState(false);

  const navegacion = useNavigate();

  const login=()=>{
    setIsloggin(true)
    navegacion('/',{replace:true})
    //no pordre volver atras con el boton back del navegador.
  }

  return (
    <div className='text-2xl font-semibold  flex justify-around flex-col'>

      <Main/>
      <button onClick={login} className='bg-[#3de4d4] rounded w-[60px] h-[40px] ml-11'>login </button>
      <input type="text" placeholder="introduce you're name" className='border-[#dda6ba] w-[350px] rounded-[8px] border-2 focus:bg-[#aad0ef]' />
      <div className='flex flex-col'>


      <span className='text-[purple]'>Quiero pedir algo al universo.</span>
      <span className='text-[blue]'>Deseo tener una vida plena. lleno de exito, dinero, novia, casa, coche poder.</span>
      <span className='text-[green]'>29/10/2023</span>
      <span className='text-[orange]'>te pido Dios que me concedas esta Bendición</span>
      </div>
    </div>
  )
}
