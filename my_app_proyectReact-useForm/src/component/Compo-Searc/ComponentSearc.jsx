import React from 'react'
import shark from "../../assets/sharkFavorite.jpg";
// import  oskitar   from "../../assets/IMG_oskitar.jpg";
import { Calendario } from '../Component-Calendario/Calendario';

export const ComponentSearc = () => {

  return (

    <div className='flex  justify-evenly gap-[10em]'>

        <img src={shark} alt="" className='w-[250px] flex  rounded-[9px]  '/>
        <Calendario/>
        <input type="text"  className='w-[150px] border-[2px] rounded h-[50px] ' placeholder='Enter your text here' /> 
    </div>
  )
}
