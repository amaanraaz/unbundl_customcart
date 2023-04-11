import React from 'react'

const Head = () => {
  return (
    <>
    <div className='bg-pink h-40 flex flex-col justify-between items-center pr-8 sm:flex-row sm:h-12'>
        <div>
          <a href='/'>
            <img src='https://www.freepnglogos.com/uploads/chocolate-png/download-chocolate-bar-transparent-image-png-image-4.png' alt="logo" className='h-14 w-20'/>
            </a>
        </div>
        <div>
        <h1 className='text-center font-semibold text-neutral-800 font-serif text-xl '>Create your custom pack of chocolates </h1>
        </div>
        <div>
            <h2 className='text-lg'>Cart</h2>
        </div>
    </div>
    </>
  )
}
export default Head