import React from 'react'

const KeysD = ({onChange}) => {
  return (
    <div>
    <button className="bg-[#3ee15a] px-2" type='button' onClick={()=>onChange('D')}>D</button>
</div>
  )
}

export default KeysD