/**
 * 
 * @param { word given as input and is expected to be guessed} originalWord 
 * @param {Letters which are guessed by the user already} guessedLetters 
 * Ex: orginalWord: HUMBLE
 * guessedLetters: [H, U, M,];
 * 
 * return => "H _ M _ E"
 */

export function getMaskedString(originalWord, guessedLetters){
    console.log("guessed ", guessedLetters);
    console.log("original ", originalWord);
    guessedLetters = guessedLetters?.map(char => char?.toUpperCase());
    const guessedLetterSet = new Set(guessedLetters);

    const result = originalWord?.toUpperCase()?.split('')?.map(char =>{
        if(guessedLetterSet?.has(char)){
            return char;
        }
        else{
            return"_";
        }
    })

    return result?.join(' ');
};