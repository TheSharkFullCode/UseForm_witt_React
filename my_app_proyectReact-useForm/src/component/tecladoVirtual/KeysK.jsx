import React from 'react'

const KeysK = ({onChange}) => {
  return (
    <div>
          <button className="bg-[#3ee15a] px-2 " type='button' onClick={()=>onChange('K')}>K</button>
    </div>
  )
}

export default KeysK