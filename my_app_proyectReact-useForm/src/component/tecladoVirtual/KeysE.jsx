import React from 'react'

const KeysE = ({onChange}) => {
  return (
    <div>
    <button className="bg-[#3ee15a] px-2 " type='button' onClick={()=>onChange('E')}>E</button>
</div>
  )
}

export default KeysE