import React, { useState } from 'react'
import oculto  from "../../assets/imagenes/oculto.jpg";
import visible  from "../../assets/imagenes/visible.jpg";



export const Contenido1 = () => {

  const [value,setValue]=useState(oculto);
  const [userValue,setUserValue]=useState(null)
  const [password,setPassword]=useState(null)
  const [ShowPass,setShowPass]=useState(false);



  const sayHello=()=>{

      if(userValue === 'oscar' && password === '1234'){
        alert('Felicidades!! el usuario y la contraseña son correcta')
       }
       else{
        alert('OPs! usuario o pass incorrecto')
        setPassword('')
         }

  }

  const ChangeImg =()=>{

    setValue(value === oculto ? visible : oculto);  
    setShowPass(value === visible ? false : true)
  }

  return (
    <div className='flex flex-col items-center bg-[#ca7be2]' >

      <h1 className='text-h1'>Introduce your're login and pass</h1>

        
        <form action=""> 

      <div className='border-[1px] bg-[#2fb0b0]  h-[150px] flex flex-col w-[260px]'>
          <label htmlFor="">User</label>

          <input type="text" placeholder="put your're name" name='user' value={userValue} onChange={(e)=>{setUserValue(e.target.value)}} /> 

          <label htmlFor="">pass</label>
          <input type={ShowPass ? 'text' : 'password'}  placeholder="put you're pass " name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />

      </div>
        </form>
      <section className='w-[80px] h-[80px]'>
        <img src={value} alt="imagen ocultar pass" onClick={ChangeImg} />
      </section>


      <button className="bg-[#3feb53] text-[white] font-semibold text-[22px] px-button rounded" onClick={sayHello}> entrar </button>

    </div>

  )
}
