import React from 'react'

const KeysA = ({onChange}) => {


  return (

    <div>

        <button className="bg-[#3ee15a] px-2"  type='button' onClick={()=>onChange('A')} > A </button>
    </div>
  )
}

export default KeysA