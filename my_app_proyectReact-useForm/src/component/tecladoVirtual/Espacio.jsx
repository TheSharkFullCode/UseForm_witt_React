import React from 'react'

const Espacio = ({onClick}) => {
  return (
    <div>
        
       <button className="bg-[#5832d3] rounded px-2 " type='button' onClick={()=>onClick(" ")}> '-'</button>
    </div>
  )
}

export default Espacio