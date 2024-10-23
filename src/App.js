
import { useState } from 'react';
import './App.css';
import Home from './components/Home'
import GamePlay from './components/GamePlay';

function App() {
   const [isGameStarted,setIsGameStarted] =useState(false);
   
   const toggleGamePlay =()=>{
    setIsGameStarted((prev)=>!prev);
   };


  return (
    <div className='w-screen h-screen'>
     {isGameStarted ? <GamePlay/> : <Home  toggle={toggleGamePlay}/>}
    </div>
  );
}

export default App;
