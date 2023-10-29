import React from 'react'
import { useState } from "react";
import Calendar from "react-calendar";


export const Calendary = () => {
    const [value, onChange] = useState(new Date());

    const opciones = { weekday: 'short' }
    const diaSemana = value.toLocaleDateString('eu-ES',opciones)
    const numDay= value.getDay()
    
    const objLocal = {
      day: numDay,
      tresLetras: diaSemana
    }
    
      if (value.getDate()%2===0) {
        localStorage.setItem('Calendar',JSON.stringify(objLocal))
      }
      else if (value.getDate()%3===0) {
        const confirm = window.confirm('¿desea saber el mes?')
        if (confirm) {
          alert(value.getMonth())
        }
        else if(!confirm){
          alert(value.getFullYear())
        }
      }
  return (

    <div className="">
      <div className="w-[15em] text-[2em]">
        <Calendar onChange={onChange} onActiveStartDateChange={(e)=>console.log(e.action)} value={value} />
        <p>Formato dia/mes/año: {value.toLocaleDateString()}</p>
        <p>EL dia del mes: {value.getDate()},y es {value.getDate()%2===0?'Par':'Impar'}</p>
        <p>EL dia de la semana: {value.getDay()}</p>
        
      </div>
    </div>
 
  )
}


