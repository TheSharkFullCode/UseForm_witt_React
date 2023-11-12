import React from 'react'

const KeysG = ({onChange}) => {

  return (

  <div>
    <button className="bg-[#3ee15a] px-2" type='button' onClick={()=>onChange('G')} >G</button>
  </div>
  )
}

export default KeysG