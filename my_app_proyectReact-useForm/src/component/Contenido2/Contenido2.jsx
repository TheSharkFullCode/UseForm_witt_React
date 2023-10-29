import React from 'react'
import { useForm } from "react-hook-form";


export const Contenido2 = () => {
  const {register,handleSubmit,formState:{errors},reset} = useForm({ delaySubmit: true });

  const onSubmit=(userInfo)=>{
    console.log(userInfo);
    alert('envio exitoso');
    reset();
    localStorage.setItem('userInfo',JSON.stringify(userInfo))
    
  }

  const messege = {
    required: 'Este campo es obligatorio',
    name: 'este campo es obligatorio',

    email: 'El formato introducido no es correcto',

    phone:'debes introducir un nuero valido',
    edad:'introduce una edad correcta',

  }

  const patterns = {
    name: /^[A-Za-z]+$/i,
    email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 


    phone: /^[0-9]+$/i,
    edad: /^[0-99]+$/i
  };


  return (

    <div className='bg-[#36c4b8]'>

      <form action="" onSubmit={handleSubmit(onSubmit)}>

            <div className='flex flex-col w-[350px] gap-2  ml-[150px]'>

          <span>Registro de usuario</span>
          <label htmlFor="name">Name</label>
          <input type="text"   name="name"  {...register('name',{required:messege.name, pattern:patterns.name})} className='border-[1px]  rounded-[4px]' />

          {errors.name && <span className='text-[red]'>{messege.name}*</span>}

          <label htmlFor="email">Email</label>
          <input type="email" name='email' {...register('email',{required:messege.email,pattern:patterns.email})}   className='border-[1px]  rounded-[4px]' />
          {errors.email && <span className='text-[red]'>{messege.email}*</span>}

          <label htmlFor="edad">Edad</label>
          <input type="number" name='edad' {...register('edad',{required:messege.edad,pattern:patterns.edad})}   className='border-[1px]  rounded-[4px]' />
          {errors.edad&& <span className='text-[red]'>{messege.email}*</span>}

          <label htmlFor="phone" patterns="">Teléfono</label>
          <input type="tel" {...register('phone',{required:messege.phone,pattern:patterns.phone})} name='phone' className='border-[1px]  rounded-[4px]' />
          {errors.phone && <span className='text-[red]'>{messege.email}*</span>} 
          <section className='flex gap-2'>

          <label htmlFor="">Género:</label>
          <label htmlFor="masculino">Masculino</label>
          <input type="radio" {...register('genero',{required:true})} value={'masculino'}/>
          <label htmlFor="femenino">Femenino</label>
          <input type="radio"  {...register('genero',{required:true})} value={'femenino'} />
          </section>
          <label htmlFor="selector">Tipo de cuenta</label>
            <select name='tipoCuenta' {...register('tipoCuenta',{required:true})} className=' rounded-[4px]'> 

              <option value="none" >...</option>
              <option value="basica"  >básica</option>
              <option value="premium" >premium</option>
              <option value="business" >business</option>
          </select>
          <section className='flex gap-5 items-center '>

            <label htmlFor="check">Aceptar recibir información</label>
            <input type="checkbox"  name='check' {...register('check')} />
          </section>
              <button type='submit' className=' py-2 px-2 bg-[#ff9800] rounded-[5px] text-[white] font-semibold' >Enviar</button>
            </div>

            <span>Todos los campos tendrán su label correspondientes y correctamente ligado a sus inputs, para que la información persista, considera guardar la lista de usuarios en localStorage, además de un estado.</span>
      
      </form>

    </div>
  )
}

