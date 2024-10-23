import React from 'react'

const Home = ({toggle}) => {
  return (
    <div className='flex justify-center items-center'>
        <div>
         <img className='w-[695px] h-[522px] mt-5' src='/images/dices.png' />
         </div>
        <div className='relative  w-[528px] '>
            <h1 className='font-bold text-[96px] w-[528px] h-[144px] leading-[144px] '>DICE GAME</h1>
            <button className='text-white bg-black w-[220px] h-[44px] rounded-md px-[18px] py-[10px] text-[16px] font-semibold  absolute right-0'
            onClick={toggle}>Play Now</button>
        </div>
    </div>
  )
}

export default Home