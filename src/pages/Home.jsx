import React, {useState, useEffect} from 'react';
import Button from '../components/Button/Button'
import Heading from '../components/Heading/Heading'
import { Link } from 'react-router-dom';

const Home = () => {
  const [word, setWord] = useState("");
  const [hint, setHint] = useState("");
  async function fetchWords() {
      const response = await fetch("https://hangman-server-x0ni.onrender.com/");
      const data = await response.json();
      console.log("data", data);
      
      const randomIndex = Math.floor(Math.random() * data?.words?.length);
     
      console.log("data",data?.words[randomIndex]);
      setWord(data?.words?.[randomIndex]?.wordValue);
      setHint(data?.words?.[randomIndex]?.wordHint);
  } 

  useEffect(() => {
      fetchWords()
  },[])


  return (
    <div className='home w-full h-screen bg-slate-800 flex justify-center items-center'>
        <div className="w-1/2 bg-zinc-600 flex flex-col justify-center items-center rounded-lg py-10">
            <Heading textStyle={'text-5xl py-10'} text={"Hangman"}/>
            <Heading textStyle={'text-3xl '} text={"Select Player"}/>
            <div className="w-full flex justify-evenly p-10 font-poppins">
            <Link to="/play" state={{wordSelected: word, wordHint: hint}}>
              <Button styleType="primary" text="Single Player"/>
            </Link>
            <Link to="/start">
              <Button styleType="secondary" text="Multi Player" />
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Home