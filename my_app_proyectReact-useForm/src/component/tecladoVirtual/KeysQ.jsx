import React from 'react'

const KeysQ = ({onChange}) => {
  return (
    <div>
         <button className="bg-[#3ee15a] px-2 " type='button' onClick={()=>onChange('Q')}>Q</button>
    </div>
  )
}

export default KeysQ