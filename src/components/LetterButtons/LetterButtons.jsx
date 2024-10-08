import React from 'react'

const LetterButtons = ({text, guessedLetters, onLetterClick}) => {
    const Alphabets = "QWERTYUIOPASDFGHJKLZXCVBNM"?.split('');
    const originalLetters = new Set(text?.toUpperCase()?.split(''));
    const guessedLettersSet = new Set(guessedLetters);

    const buttonStyle = function(letter){
        if(guessedLettersSet.has(letter)){
            return `${originalLetters.has(letter) ? 'bg-green-700 hover:bg-green-800' : 'bg-red-700 hover:bg-red-800'}`
        }
        else{
            return `bg-blue-900`
        }
    }

    function handleLetterClick(event){
        console.log("event",event.target.value);
        const characterOfTheLetter = event.target.value;
        onLetterClick?.(characterOfTheLetter);
    }


    const buttons = Alphabets.map(letter =>{
        return(
            <button 
                key={letter}
                value={letter}
                onClick={handleLetterClick}
                disabled={guessedLettersSet.has(letter)}
                className={`h-10 w-10 md:w-12 md:h-12 m-[7px] text-white rounded-lg hover:bg-blue-800 transition-colors duration-300 ease-in ${buttonStyle(letter)}`}
            >
                
                {letter}
            </button>
        )
    })
  
    return (
    <>
        <div className="">
            {buttons}
        </div>
    </>
    )
}

export default LetterButtons