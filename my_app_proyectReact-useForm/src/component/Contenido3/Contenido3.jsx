import React, { useRef, useState } from 'react'

export const Contenido3 = () => {
  const formRef= useRef(null);
    const [name,setName]=useState('')
    const [email,SetEmail]=useState('')
    const [edad,setEdad]=useState('')

     const handleName =(event)=>{
        setName(event.target.value);

     }
     const handleEmail=(event)=>{
       SetEmail(event.target.value);
     }
     const handleEdad=(event)=>{
       setEdad(event.target.value)
     }

     const handleSubmit=(event)=>{
        event.preventDefault();
            const user ={
              name: name,
              email:email,
              edad:edad,
            }
            console.log(`form submitted: user${user}`, JSON.stringify(user) );
            formRef.current.submit();//envia el formulario
            window.location.reload();//refresca la pagina.
     }

  return (
    <div className='bg-[#f1bd6a]'>

      <form action="" onSubmit={handleSubmit} ref={formRef} >
        <div className='flex flex-col w-[500px]  gap-[15px] ml-[10px] '>

          <label htmlFor="">Nombre</label>
                <input type="text" className='border-[#363693] rounded-[2px] border-[2px] 'placeholder='Nombre' value={name} name='name' onChange={handleName} />
          <label htmlFor="">Email</label>
                <input type="email" className='border-[#363693] rounded-[2px] border-[2px]' name='Email' placeholder='Email' value={email} onChange={handleEmail}/>
          <label htmlFor="">Edad</label>
                <input type="text" className='border-[#363693] rounded-[2px] border-[2px]' placeholder='Edad' value={edad} onChange={handleEdad} />

          <button type='submit' className=' w-[150px] rounded-[5px] bg-[#08cd0e] text-[white] border-none px-5 py-5 hover:bg-[#45a049] active:bg-[#809181] text-center font-semibold'>Enviar</button>
        </div>
      </form>
    </div>
  )
}
