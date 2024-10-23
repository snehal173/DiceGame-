import React from 'react'

const TotalScore = ({score}) => {
  return (
    <div className='flex flex-col justify-center items-center  ' >
        <h1 className='font-semibold text-[80px] '>{score}</h1>
        <div className='font-normal text-[24px]'>Total Score</div>
    </div>
  )
}

export default TotalScore