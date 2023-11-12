import React from 'react'

const KeysL = ({onChange}) => {
  return (
    <div>
            <button className="bg-[#3ee15a] px-2 " type='button' onClick={()=>onChange('L')}>L</button>
    </div>
  )
}

export default KeysL