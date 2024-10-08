import React from 'react'
import { getMaskedString } from './MaskedUtility'

const MaskedText = ({text, guessedLetters}) => {
    const maskedString = getMaskedString(text, guessedLetters);
    
   


  return (
    <>
        {
            maskedString?.split('').map((char, index) => {
            return(
            <span className={`w-16 p-2 text-center text-zinc-100 text-2xl ${index % 2 == 0 ? 'border border-zinc-300 rounded-md' : ""}`} key={index}>{char}</span>)
            
        })
    }
    </>
  )
}

export default MaskedText