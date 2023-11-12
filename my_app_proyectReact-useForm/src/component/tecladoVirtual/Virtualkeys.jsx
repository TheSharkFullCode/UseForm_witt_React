import React, { useState, } from 'react'
import KeysA from './lettersA/KeysA'
import KeysB from './KeysB'
import KeysC from './KeysC'
import KeysD from './KeysD'
import KeysE from './KeysE'
import KeysF from './KeysF'
import KeysG from './KeysG'
import { Link } from 'react-router-dom'
import domsvirtual from "../../assets/IMG_oskitar.jpg";
import domReact from "../../assets/react.svg";
import KeysH from './KeysH'
import KeysJ from './KeysJ'
import KeysI from './KeysI'
import KeysK from './KeysK'
import KeysL from './KeysL'
import KeysM from './KeysM'
import KeysN from './KeysN'
import KeysP from './KeysP'
import KeysO from './KeysO'
import KeysQ from './KeysQ'
import KeysR from './KeysR'
import KeysS from './KeysS'
import KeysV from './KeysV'
import KeysU from './KeysU'
import KeysW from './KeysW'
import KeysY from './KeysY'
import KeysZ from './KeysZ'
import KeysÑ from './KeysÑ'
import KeysT from './KeysT'
import KeysX from './KeysX'
import Espacio from './Espacio'

const Virtualkeys = () => {

    const [letter,setLetter]=useState('');
    const [changeImg,setChangeimg]=useState(domReact)
    const [inputClear,setInputClear]=useState('');
    const [InputValue2,setInputValue2]=useState('')



    const handleChange=(newLetter)=>{            
            setLetter(letter + newLetter)

    }
    const ChangeNewImg=()=>{
        const newImg= domsvirtual;
        setChangeimg(changeImg == newImg ? domReact : newImg)
        

    }
    const  handleChange2=(event)=>{
        setInputValue2(event.target.value)
    }
    

        const Clear=()=>{
            setInputClear('')
        }

        const DeleteLetter = () => {
            const newValue = letter.substring(0, letter.length - 1);
            setLetter(newValue);//esto es para eliminar un caracter de typo estring! 

          };

          const addSpace=()=>{
                setLetter(letter +" ")
          }

  return (

    <div >
      <span className='text-[22px] text-[#4b36a1] '> 
        Desarrolla un teclado virtual: Virtualkeys, que  permita la introduccion de texto atravéz de una pantalla que refleja lo que escribrimos por medio del teclado.
      </span> <br /> <br />
      <span>Introduce tu nombre de useario:</span>

      <form action="">  
            <label htmlFor="">Name:</label>

            <input type="text" className='border-[gray] border-[2px] rounded-[4px]'  value={letter} onChange={handleChange} readOnly  />
            <span>passWorlds</span>
            <input type="pass" className='border-[gray] border-[2px] rounded-[4px]' value={letter} onChange={handleChange2} readOnly/>

            <Link to={'/contenido1'} className='text-2xl underline text-red-400 px-1 py-1 ml-10'> Contenido1  </Link>

        <div className='flex w-[500px] justify-around border-[black] border-[2px] gap-1   px-1 py-1' >   

        <img src={changeImg} alt="oskitar/react"  className='border-[2px] border-[#762e2e] rounded w-[150px] ' onClick={ChangeNewImg} />

            <button onClick={ Clear} className='border-[1px] bg-[#3943cd] h-[50px] rounded px-3 text-[white]'>Borrar</button>
            <button onClick={DeleteLetter} type='button' className='border-[1px] h-[50px]  rounded-[0.5rem] p-1 px-1 py-1 hover:bg-slate-500 bg-slate-400 text-[white]' >Delete</button>

                <div className='flex w-[200px] border-[2px] gap-[10px]  flex-wrap rounded px-2 '>

                <KeysA  onChange={handleChange}/>
                <KeysB onChange={handleChange}/>
                <KeysC onChange={handleChange}/>
                <KeysD onChange={handleChange}/>
                <KeysE onChange={handleChange}/>
                <KeysF onChange={handleChange}/>
                <KeysG onChange={handleChange}/>
                <KeysH onChange={handleChange}/>
                <KeysI onChange={handleChange}/>
                <KeysJ onChange={handleChange}/>
                <KeysK onChange={handleChange}/>
                <KeysL onChange={handleChange}/>
                <KeysM onChange={handleChange}/>
                <KeysN onChange={handleChange}/>
                <KeysÑ onChange={handleChange}/>
                <KeysO onChange={handleChange}/>
                <KeysP onChange={handleChange}/>
                <KeysQ onChange={handleChange}/>
                <KeysR onChange={handleChange}/>
                <KeysS onChange={handleChange}/>
                <KeysT onChange={handleChange}/>
                <KeysU onChange={handleChange}/>
                <KeysV onChange={handleChange}/>
                <KeysW onChange={handleChange}/>
                <KeysX onChange={handleChange}/>
                <KeysY onChange={handleChange}/>
                <KeysZ onChange={handleChange}/>
                <Espacio onClick={addSpace}/>

                

                </div>

                
         
        </div>

      </form>
    </div>

  )
}

export default Virtualkeys