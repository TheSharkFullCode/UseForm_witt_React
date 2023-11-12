import React from 'react'

const KeysW = ({onChange}) => {
  return (
    <div>
        <button className="bg-[#3ee15a] px-2 " type='button' onClick={()=>onChange('W')}>W</button>

    </div>
  )
}

export default KeysW