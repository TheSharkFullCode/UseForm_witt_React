import React from 'react'

const KeysP = ({onChange}) => {
  return (
    <div>
          <button className="bg-[#3ee15a] px-2 " type='button' onClick={()=>onChange('P')}>P</button>
    </div>
  )
}

export default KeysP