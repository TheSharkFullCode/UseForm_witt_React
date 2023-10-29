import { ComponentSearc } from './component/Compo-Searc/ComponentSearc'
import Router1 from './component/router/Router1'
import Provider from './component/contex/Provider'


function App() {

  return (
    
    <div >

    <div className='flex justify-around border-[1px] rounded'>

     <span className='text-2xl font-semibold text-fuchsia-700'>My firts proyect with useForm </span>
     <span>pro</span>
     <span>Teams</span>
     <span>Documentation</span>

    </div>
    <ComponentSearc/>

    <Provider>

      <Router1/>
    </Provider>
   

    </div>
  )
}

export default App
