import React, { useState } from 'react'
import { chocolates } from '../data'
import ChocolateCard from './ChocolateCard'

const Body = () => {
    // variable for tracking total number of chocolates added
    const[total,setTotal] = useState(0);
    // variable for price of total number of chocolates added
    const[totalPrice,setTotalPrice] = useState(0);

  return (
    <div className='flex flex-col items-center sm:flex-row sm:items-start'>
    <div className='flex flex-wrap justify-center'>
        {/* chocolates imported from data file  */}
        {
            // mapping through each data
            chocolates.map((chocolate)=>{
                return (
                    // creation of card for each chocolate by passing props
                    <ChocolateCard {...chocolate} setTotal={setTotal}  total={total} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
                )
            })
        }
    </div>
    
    {/* creating an area where total price of custom bundle will be displayed */}
    
    <div className='bg-pink m-5 h-32 p-5 w-60 flex flex-col items-center'>
        <h1 className='text-lg font-mono font-semibold flex items-center flex-col'>TotalPrice<br/>
        <span className='font-mono text-slate-800'>₹ {totalPrice}</span></h1>
        <button className='bg-slate-100 px-2 py-1 rounded-md'>Add to cart</button>
    </div>
    </div>
  )
}

export default Body