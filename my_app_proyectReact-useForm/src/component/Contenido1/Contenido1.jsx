import React, { useState } from 'react'
import oculto  from "../../assets/imagenes/oculto.jpg";
import visible  from "../../assets/imagenes/visible.jpg";



export const Contenido1 = () => {

  const [value,setValue]=useState(oculto);
  const [userValue,setUserValue]=useState('')
  const [password,setPassword]=useState('')
  const [ShowPass,setShowPass]=useState(false);



  const sayHello=()=>{  

      if(userValue === 'dani' && password === '1346'){
        alert('Felicidades!! el usuario y la contraseña son correcta')
       }
       else{
        alert('OPs! usuario o pass incorrecto')
        setPassword('')
         }

  }

  const ChangeImg =()=>{

    setValue(value === oculto ? visible : oculto);  
    setShowPass(value === visible ? false : true);
  }

  return (
    <div className='flex flex-col items-center bg-[#a6a4be]' >

      <h1 className='text-h1'>Introduce your're login and pass</h1>

        
        <form action=""> 

      <div className='border-[1px] bg-[#2fb0b0]  h-[150px] flex flex-col w-[360px] rounded px-3 py-2'>
        <form action="">
        </form>

          <label htmlFor="">User</label>

          <input type="text" placeholder="put your're name" name='user' value={userValue} onChange={(e)=>{setUserValue(e.target.value)}} /> 

          <label htmlFor="">pass</label>
          <input type={ShowPass ? 'text' : 'password'}  placeholder="put you're pass " name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />

      </div>
        </form>
      <section className='w-[80px] h-[80px] rounded'>
        <img src={value} alt="imagen ocultar pass" onClick={ChangeImg}  className=' rounded mt-1'/>
      </section>


      <button className="bg-[#3feb53] text-[white] font-semibold text-[22px] px-button rounded mt-6" onClick={sayHello}> entrar </button>

    </div>

  )
}
