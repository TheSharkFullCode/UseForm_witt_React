import React from 'react'

const KeysR = ({onChange}) => {

  return (
    <div>
      <button className="bg-[#3ee15a] px-2 " type='button' onClick={()=>onChange('R')}>R</button>
    </div>
  )
}

export default KeysR