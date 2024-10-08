import React from 'react'

const Heading = ({text, textStyle}) => {
  return (
   <h1 className={`${textStyle} font-poppins text-white text-center font-semibold`}>{text}</h1>
  )
}

export default Heading