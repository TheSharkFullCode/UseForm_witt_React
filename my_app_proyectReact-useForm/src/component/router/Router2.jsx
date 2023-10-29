import React from 'react'
import {Routes,Route, Navigate  } from "react-router-dom";
import { Contenido1 } from "../Contenido1/Contenido1";
import { Contenido2 } from "../Contenido2/Contenido2";
import { Contenido3 } from "../Contenido3/Contenido3";
import Nabvar from '../Nabvar/Nabvar';


export const Router2 = () => {
  return (
    <>
        <Nabvar/>
        <Routes>
                <Route path='Contenido1' element={<Contenido1/>}>  </Route>
                <Route path='Contenido2' element={<Contenido2/>}>  </Route>
                <Route path='Contenido3' element={<Contenido3/>}>  </Route>
                <Route path='/' element={<Navigate to='Contenido1'/>}>  </Route>
             
        </Routes>
    </>
  )
}

export default Router2
