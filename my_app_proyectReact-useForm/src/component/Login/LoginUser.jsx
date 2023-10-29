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
    <div className='text-2xl font-semibold  flex justify-around '>

      <Main/>

      <button onClick={login} className='bg-[#3de4d4] rounded'>login </button>
    </div>
  )
}
