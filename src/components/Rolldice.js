import React, { useState } from 'react'

const Rolldice = ({currentDice,displayDice}) => {
   
     
   

  return (
    <div   >
        <div 
        onClick={displayDice}
        className='flex flex-col justify-center items-center gap-y-3 ' >
        <img src={`/images/dice-img/dice_${currentDice}.png`} alt="dice"/>
        <p className='text-[20px] font-semibold'>Click here to roll the dice</p>
        </div>
       
    </div>
  )
}

export default Rolldice
