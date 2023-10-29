import React, { useReducer } from 'react'
import { Contexto } from './Contex'

const init =()=>{
    const valor = localStorage.getItem('estado');

    return {
        estado:!!valor
    }
}

const Provider = ({children}) => {
//en ves de utilizar un use state para verificar si esta leggueado o no, y guardarlo en tru o false. vamos a utilizar useReducer.

    const miReducer =(state={},action)=>{
        switch (action.types){
            case types.login:
                return 'login'
                    
                
            case types.logout:
                return 'logout'

            
                default:
                    return state;
        }

    }

 const [logeado,dispath]= useReducer(miReducer,{},init)

  return (
        <Contexto.Provider value={{logeado}}>
            {children}

        </Contexto.Provider>
  )
}

export default Provider