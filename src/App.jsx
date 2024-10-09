import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import PlayGame from './pages/PlayGame'
import StartGame from './pages/StartGame'
import WordContext from './store/WordContext'
function App() {
  const [word, setWord] = useState("");
  const [hint, setHint] = useState("");
  const [wordList, setWordList] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <WordContext.Provider value={{word, setWord, hint, setHint, wordList, setWordList, setLoading, loading}}>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/play" element={<PlayGame/>} />
        <Route path='/start' element={<StartGame/>} />
      </Routes>
      </WordContext.Provider>
    </>
  )
}

export default App;
