import React, { useState } from 'react'

const ChocolateCard = ({
    name,price,image,setTotal,total,totalPrice,setTotalPrice
}) => {
    const [count,setCount] = useState(0);
    const increaseCount=()=>{
        if(total===8)alert("You can add only 8 items in a custom pack");
        else{
        setCount(count+1);
        setTotal(total+1);
        setTotalPrice(totalPrice+price);}
    }
    const decreaseCount=()=>{
        count===0?setCount(0):setCount(count-1);
        count===0?setCount(0):setTotal(total-1);
        count===0?setCount(0):setTotalPrice(totalPrice-price);
    }
  return (
    <div className='w-72 h-80 m-5 bg-gradient-to-br from-pink to-fuchsia-300 p-7
    shadow-gray-600 shadow-md rounded-md'>
        <img src={image} alt='image1' />
        <h1 className='font-mono font-semibold'>{name}</h1>
        <div className='flex justify-between items-center'>
            <h2 className='font-mono text-slate-800'>₹ {price}</h2>
            <div className='flex justify-between'>
                <h3 className='border-2 w-4 rounded-l-lg cursor-pointer text-slate-800' onClick={decreaseCount}>-</h3>
                <h3 className='mx-1'>{count}</h3>
                <h3 className='border-2 w-4 rounded-r-lg cursor-pointer text-slate-800' onClick={increaseCount}>+</h3>
            </div>
        </div>    
    </div>
  )
}
export default ChocolateCard