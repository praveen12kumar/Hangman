
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import PlayGame from './pages/PlayGame'
import StartGame from './pages/StartGame'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/play" element={<PlayGame/>} />
        <Route path='/start' element={<StartGame/>} />
      </Routes>
    
    </>
  )
}

export default App;
