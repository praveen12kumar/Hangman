import React, {useEffect, useContext} from 'react';
import Button from '../components/Button/Button'
import Heading from '../components/Heading/Heading'
import { Link } from 'react-router-dom';
import WordContext from '../store/WordContext';
const Home = () => {
  
  const {setLoading, setWordList} = useContext(WordContext);
  
  async function fetchWords() {
      const response = await fetch("https://hangman-server-x0ni.onrender.com/");
      setLoading(true);
      const data = await response.json(); 
      console.log("data", data);
      
      setWordList(data?.words);
      setLoading(false);
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
            <Link to="/play">
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