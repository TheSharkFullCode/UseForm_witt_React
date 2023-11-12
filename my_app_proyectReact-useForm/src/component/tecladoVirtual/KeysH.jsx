import React from 'react'

const KeysH = ({onChange}) => {
  return (
    <div>
      <button className="bg-[#3ee15a] px-2 " type='button' onClick={()=>onChange('H')}>H</button>
    </div>
  )
}

export default KeysH