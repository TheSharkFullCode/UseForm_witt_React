import React from 'react'

const KeysM = ({onChange}) => {
  return (
    <div>
             <button className="bg-[#3ee15a] px-2 " type='button' onClick={()=>onChange('M')}>M</button>
    </div>
  )
}

export default KeysM