import React from 'react'
import { Route, Routes } from "react-router-dom";
import { LoginUser } from "../Login/LoginUser";
import { RecuperacionRouta } from "../Recuperacion/RecuperacionRouta";
import Router2 from './Router2';
import Main from '../mainprincipal/Main';
import Virtualkeys from '../tecladoVirtual/Virtualkeys';


const Router1 = () => {

  return (

   <Routes>
        <Route path='login' element={<LoginUser/>}></Route>
        <Route path='Recuperacion' element={<RecuperacionRouta/>}></Route>
        <Route path='/*' element={<Router2/>}></Route>
        <Route path='/mainprincipal' element={<Main/>}></Route>
        <Route path='/tecladoVirtual' element={<Virtualkeys/>}> </Route>
    
   </Routes> 
   )
}

export default Router1