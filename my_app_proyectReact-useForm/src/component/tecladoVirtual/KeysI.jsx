import React from 'react'

const KeysI = ({onChange}) => {
  return (
    <div>
              <button className="bg-[#3ee15a] px-2 " type='button' onClick={()=>onChange('I')}>I</button>
    
    </div>
  )
}

export default KeysI