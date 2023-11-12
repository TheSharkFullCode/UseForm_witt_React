import React from 'react'

const KeysY = ({onChange}) => {

  return (
    <div>
        <button className="bg-[#3ee15a] px-2 " type='button' onClick={()=>onChange('Y')}>Y</button>

    </div>
  )
}

export default KeysY