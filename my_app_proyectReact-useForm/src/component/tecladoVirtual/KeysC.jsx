import React from 'react'

const KeysC = ({onChange}) => {
  return (
    <div>
    <button className="bg-[#3ee15a] px-2" type='button' onClick={()=>onChange('C')} >C</button>
</div>
  )
}

export default KeysC