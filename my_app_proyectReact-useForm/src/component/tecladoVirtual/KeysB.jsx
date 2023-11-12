import React from 'react'

const KeysB = ({onChange}) => {


 
  return (
      <div>
        <button className="bg-[#3ee15a] px-2" onClick={()=>onChange('B')} type='button'>B</button>
    </div>
  )
}

export default KeysB