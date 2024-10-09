import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import Hangman from "../components/Hangman/Hangman";
import Modal from "../components/modal/Modal";
import WordContext from "../store/WordContext";
import Loader from "../components/Loader/Loader";
import Button from "../components/Button/Button";


function PlayGame() {
  const navigate = useNavigate();
  const {word, setWord, hint, setHint,  wordList, loading} = useContext(WordContext);
  const [gameWin, setGameWin] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step, setStep] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function handleLetterClick(letter) {
    
    if (word?.includes(letter)) {
      console.log("Correct");
    } 
    else {
      setStep(step + 1);
      console.log("step", step);
      
      if(step === 6){
        console.log("Game Over")
        setShowModal(true);
        setGameOver(true);
      }
    }
    setGuessedLetters([...guessedLetters, letter]);
  }

  const handleWordHint=()=>{
   setHint("");
   setWord("");
   setStep(0);
   setGuessedLetters([]);
}

  useEffect(()=>{
    const randomIndex = Math.floor(Math.random() * wordList.length);
    if(word === ""){
      setWord(wordList[randomIndex]?.wordValue);
    }
    if(hint === ""){
      setHint(wordList[randomIndex]?.wordHint);
    }
  },[word, hint]);

  useEffect(()=>{
    if(word && guessedLetters.length > 0){
      const wordLetters = new Set(word.toUpperCase().split(""));
      console.log("word in useEffect", wordLetters);
      
      const guessedCorrectly = [...wordLetters]?.every((letter)=> guessedLetters?.includes(letter));
      console.log("guessedCorrectly", guessedCorrectly);
      if(guessedCorrectly){
        setGameWin(true);
        setShowModal(true);
      }
    }
  }, [word, guessedLetters]);

  useEffect(()=>{
    if(gameOver){
      setGameOver(false);
    }

    if(gameWin){
      setGameWin(false);
    }
  },[])

  return (
    <>
      {
        loading ? <Loader/> : (
          <div className="w-[100%] md:w-[80%] min-h-screen mx-auto bg-zinc-300 flex flex-col gap-8 items-center relative">
        <h1 className="text-4xl font-semibold pt-10">Play Game</h1>
        <h1 className="text-3xl font-semibold ">Hint: {hint}</h1>
        <div className="bg-slate-600 w-[80vw] md:w-[40vw] lg:w-[30vw] h-[100px] flex items-center justify-center rounded-lg p-5 ">
          <MaskedText
            text={word}
            guessedLetters={guessedLetters}
          />
        </div>

        <div className="w-full flex flex-col md:flex-row justify-evenly items-center ">
          <div className="w-full md:w-1/2 flex flex-wrap p-4 md:p-8 md:pl-20">
            <LetterButtons
              text={word}
              guessedLetters={guessedLetters}
              onLetterClick={handleLetterClick}
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <Hangman step={step} />
          </div>
        </div>

        <div className="absolute top-4 left-4">
        <Button 
          text={"Reset"}
          styleType="danger"
          onClickHandler={handleWordHint}
          className=""
          />
        </div>

        <div className="absolute top-4 right-4">
        <Button 
          text={"Home"}
          styleType="warning"
          onClickHandler={()=>navigate("/")}
          className="" />
        </div>
      </div>
        )
      }

      {
        showModal && gameOver && <Modal text={"You have lost the game, The correct word is"} gameOver={gameOver}/>
      }
      
      {
        showModal && gameWin && <Modal text={"Congratulation you have won the game"} /> 
      }
    </>
  );
}

export default PlayGame;
