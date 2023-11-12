import React from 'react'

const KeysF = ({onChange}) => {
  return (
    <div>
        <button className="bg-[#3ee15a] px-2" type='button' onClick={()=>onChange('F')}> F</button>
    </div>
  )
}

export default KeysF