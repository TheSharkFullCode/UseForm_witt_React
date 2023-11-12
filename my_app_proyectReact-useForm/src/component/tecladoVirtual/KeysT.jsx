import React from 'react'

const KeysT = ({onChange}) => {
  return (
    <div>
       <button className="bg-[#3ee15a] px-2 " type='button' onClick={()=>onChange('T')}>T</button>

    </div>
  )
}

export default KeysT