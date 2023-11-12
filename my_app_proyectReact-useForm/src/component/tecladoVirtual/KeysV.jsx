import React from 'react'

const KeysV = ({onChange}) => {

  return (
    <div>
      <button className="bg-[#3ee15a] px-2 " type='button' onClick={()=>onChange('V')}>V</button>

    </div>
  )
}

export default KeysV