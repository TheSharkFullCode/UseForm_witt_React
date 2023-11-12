import React from 'react'

const KeysN = ({onChange}) => {
  return (
    <div>
            <button className="bg-[#3ee15a] px-2 " type='button' onClick={()=>onChange('N')}>N</button>

    </div>
  )
}

export default KeysN