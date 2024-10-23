import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import Rolldice from './Rolldice'
import {useState} from 'react'
import Show_rules from './Show_rules'
const GamePlay = () => {
    const [score,setScore]=useState(0);
    const [currentDice,setCurrentDice]=useState(1);
    const [selectedNumber,setSelectedNumber]=useState();
    const [error,setError]=useState("");
    const [showrules,setShowRules]=useState(false);
    const generateRandomNumber=(min,max)=>{
        return Math.floor(Math.random()*(max-min)+min);
    }

    const displayDice= () =>{
        if(!selectedNumber)
            {   setError("You have not selected any number")
                return;
            }
        
        setError("");
        const randomnumber=generateRandomNumber(1,7);
        setCurrentDice((prev)=> randomnumber)

        if(selectedNumber===randomnumber){
          setScore((prev)=>prev+randomnumber);
        }
        else{
            setScore((prev)=>prev-2) ;
        }

        
    };
    const resetscore=() =>{
        setScore(0);
    }

  return (
    <div  >
        <div className='flex justify-between  mt-[20px]'>
        <TotalScore score={score}/>
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
        </div>
        <div className='flex flex-col justify-center items-center mt-6 gap-y-8'>
        <Rolldice currentDice={currentDice}  displayDice={displayDice} />

        <div className='flex flex-col  justify-center items-center gap-y-4  w-[220px]'>
        <button  className='border px-[20px] py-[10px] rounded-[5px] bg-white text-black text-[20px] transition duration-150 ease-out hover:ease-in hover:bg-black hover:text-white'
        onClick={resetscore} >Reset Score</button>
        <button  className='border px-[20px] py-[10px] rounded-[5px]  bg-black text-white text-[20px] transition duration-150 ease-out hover:ease-in hover:bg-white hover:text-black'
        onClick={() => setShowRules((prev) => !prev)}
       >{showrules ? "Hide" : "Show"  } Rules</button>

      {showrules &&  <Show_rules/>}
        </div>
        </div>
       
       
    </div>
  )
}

export default GamePlay