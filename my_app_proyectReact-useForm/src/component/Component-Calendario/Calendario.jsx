import React, { useReducer } from 'react';

const types = {
    masM:'masM',
    menosM:'menosM',
    masA:'masA',
    menosA:'menosA'


}

const getNewYears = new Date();
const month = getNewYears.getMonth();
console.log(month);

const years = getNewYears.getFullYear();
console.log(years);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const vInit = { m: month, a: years };

const reducer = (state, action) => {

    let newMont = state.m;
    let newYears = state.a;

    switch (action.type) {
      case types.masM:
        newMont = newMont ===11 ? 0 :  newMont +1;
        break;
      case types.menosM:
        newMont = newMont === 0 ? 11 : newMont - 1;
        break; 
        case types.masA:
            newYears = newYears +1;
            break;
            case types.menosA:
                newYears = newYears - 1;
                break;

      
    }
    return {m:newMont,a:newYears}
  };
  

export const Calendario = () => {
  const [fecha,dispatch] = useReducer(reducer, vInit);

  return (
    <div className='fl'>
        <span className='text-2xl font-semibold'>

      {meses[fecha.m]} ({fecha.a})
        </span>
      <div>

        Meses : <button className='px-2 py-1 border-[1px] border-[gray] rounded bg-[#48e736]' onClick={()=>dispatch({type:types.masM})}>+</button>
                <button className='px-2 py-1 border-[1px] border-[gray] rounded bg-[#e9cd31]'onClick={()=>dispatch({type:types.menosM})}>-</button>
        Año
                <button className='px-2 py-1 border-[1px] border-[gray] rounded bg-[#324ac2]'onClick={()=>dispatch({type:types.masA})}>+</button>
                <button className='px-2 py-1 border-[1px] border-[gray] rounded bg-[#872ea8]'onClick={()=>dispatch({type:types.menosA})}>-</button>

      </div>

    </div>
  );
};
