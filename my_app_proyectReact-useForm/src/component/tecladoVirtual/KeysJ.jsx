import React from 'react'

const KeysJ = ({onChange}) => {
  return (
    <div>
      <button className="bg-[#3ee15a] px-2 " type='button' onClick={()=>onChange('J')}>J</button>
    </div>
  )
}

export default KeysJ