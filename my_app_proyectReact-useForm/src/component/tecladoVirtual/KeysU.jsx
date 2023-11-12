import React from 'react'

const KeysU = ({onChange}) => {
  return (
    <div>
      <button className="bg-[#3ee15a] px-2 " type='button' onClick={()=>onChange('U')}>U</button>
    </div>
  )
}

export default KeysU