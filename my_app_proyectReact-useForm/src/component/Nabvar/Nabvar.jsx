import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const Nabvar = () => {

    const navegacion =useNavigate();
    
    const login=()=>{
        navegacion('/login',{replace:true})
        // alert('has clikeado')
    }

  return (
   <nav className='flex justify-center gap-2'>
    <NavLink to='contenido1' className={'bg-black text-[white] font-semibold rounded px-2'}> Contenido 1 </NavLink>
    <NavLink to='contenido2' className={'bg-black text-[white] font-semibold rounded px-2'}> Contenido 2 </NavLink>
    <NavLink to='contenido3'  className={'bg-black text-[white] font-semibold rounded px-2'}> Contenido 3 </NavLink>
    <NavLink to='tecladoVirtual' className={'bg-[#e03bcd46] font-semibold rounded-[4px] px-1 py-1'} > Teclado virtual</NavLink>
    <button className='bg-[#b2f9d8] px-2 py-1 rounded text-[#7e4de8] ' onClick={login}>Logout</button>
   </nav>
  )
}

export default Nabvar