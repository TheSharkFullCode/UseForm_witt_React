import React from 'react'

const KeysX = ({onChange}) => {
  return (
    <div>
        <button className="bg-[#3ee15a] px-2 " type='button' onClick={()=>onChange('X')}>X</button>


    </div>
  )
}

export default KeysX