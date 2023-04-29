import React, { useState } from 'react'

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className='z-40'>
        <h1 className='text-4xl text-center md:text-6xl mb-5 text-white'>URL <span className='text-[#f99f38]'>Shortener</span></h1>
        <div className='flex mb-8'>
            <input 
            type='text' 
            placeholder='Paste a link to shorten it'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className='w-full py-2 md:pb-1 px-1 md:px-2  outline-none text-sm md:text-base text-orange-500 bg-slate-300'
            />
            <button className='bg-[#f99f38] px-4 text-xs md:text-sm uppercase font-bold
            text-white cursor-pointer'
            onClick={handleClick}>
              Shorten
            </button>
        </div>
    </div>
  )
}

export default InputShortener