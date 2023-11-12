import React from 'react'

const KeysS = ({onChange}) => {

  return (
    <div>
      <button className="bg-[#3ee15a] px-2 " type='button' onClick={()=>onChange('S')}>S</button>
    </div>
  )
}

export default KeysS