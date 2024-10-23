import React, { useState } from 'react'

const NumberSelector = ({error,setError,selectedNumber,setSelectedNumber}) => {
    const array=[1,2,3,4,5,6];
  
    console.log(selectedNumber)
    const numberChangeHandler=(value)=>{
        setSelectedNumber(value)
        setError("");
    }
  return (
   
    <div>
        <p>{error}</p>
       <div className='flex gap-x-6 mt-[30px] w-[552px] relative'>
       {
        array.map((value,i)=>(
            <div 
            key={i}
            onClick={()=>numberChangeHandler(value)}
            className={`border border-black px-5 py-4 font-semibold text-[24px]
              ${selectedNumber===value ? "text-white bg-black" : "text-black bg-white"}

              }`}
            >{value}</div>
        ))}
       </div>
     
        <div className=' absolute right-[100px] py-3 font-bold text-[20px] '>Select Number</div>
    </div>
  )
}

export default NumberSelector