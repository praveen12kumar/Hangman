import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import Hangman from "../components/Hangman/Hangman";
import Modal from "../components/modal/Modal";

function PlayGame() {

  const { state } = useLocation();
  
  
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step, setStep] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function handleLetterClick(letter) {
    
    if (state?.wordSelected.includes(letter)) {
      
    } else {
      setStep(step + 1);
      console.log("step", step);
      
      if(step === 6){
        console.log("Game Over")
        setShowModal(true);
      }
    }
    setGuessedLetters([...guessedLetters, letter]);
  }

  return (
    <>
      <div className="w-[100%] md:w-[80%] min-h-screen mx-auto bg-zinc-300 flex flex-col gap-8 items-center relative">
        <h1 className="text-4xl font-semibold pt-10">Play Game</h1>
        <h1 className="text-3xl font-semibold ">Hint: {state?.wordHint}</h1>
        <div className="bg-slate-600 w-[80vw] md:w-[40vw] lg:w-[30vw] h-[100px] flex items-center justify-center rounded-lg p-5 ">
          <MaskedText
            text={state?.wordSelected}
            guessedLetters={guessedLetters}
          />
        </div>

        <div className="w-full flex flex-col md:flex-row justify-evenly items-center ">
          <div className="w-full md:w-1/2 flex flex-wrap p-4 md:p-8 md:pl-20">
            <LetterButtons
              text={state?.wordSelected}
              guessedLetters={guessedLetters}
              onLetterClick={handleLetterClick}
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <Hangman step={step} />
          </div>
        </div>

        <Link className="absolute left-4 top-4 text-xl text-white font-poppins font-medium border border-zinc-500 px-4 py-1 rounded-xl bg-slate-800" to="/">Reset</Link>
      </div>

      {
        showModal && <Modal/>
      }
    </>
  );
}

export default PlayGame;
