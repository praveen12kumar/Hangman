import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button';
import WordContext from '../../store/WordContext';


const Modal = ({text, gameOver}) => {
    const {word} = useContext(WordContext);
    const navigate =   useNavigate();
  return (
    <div className='w-[60vw] h-[20vw] bg-zinc-200 flex flex-col items-center justify-center gap-10 rounded-lg p-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-3xl font-semibold font-poppins'>Game Over</h1>
        <p>{text} {gameOver && word}</p>
        <div className="w-full flex items-center justify-center ">
            <Button text={"Home"}
                onClickHandler={() => navigate("/")}
                type='button'
                styleType='primary'
            />
        </div>
    </div>
  )
}

export default Modal