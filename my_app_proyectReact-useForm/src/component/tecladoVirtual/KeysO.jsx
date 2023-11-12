import React from 'react'

const KeysO = ({onChange}) => {
  return (
    <div>
             <button className="bg-[#3ee15a] px-2 " type='button' onClick={()=>onChange('O')}>O</button>
    </div>
  )
}

export default KeysO