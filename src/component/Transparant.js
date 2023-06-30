import React from 'react'

const Transparant = ({header ,text1 , text2}) => {
  return (
    <div className='transparant'>
        <h4>{header}</h4>
        <div className='trs'>
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
    </div>
  )
}

export default Transparant
