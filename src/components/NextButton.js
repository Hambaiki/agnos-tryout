import React from 'react'

function NextButton({ progressClick }) {
  return (
    <div className='container w-3/5 m-auto mt-0 max-w-sm'>
      <button className='
      w-full 
      p-4 rounded-3xl 
      bg-gray-300 
      text-gray-500 
      text-lg 
      hover:bg-gradient-to-r 
      hover:from-sky-400 
      hover:to-blue-800
      hover:text-white
      transition ease-in-out duration-50'
        onClick={progressClick}>
        ต่อไป
      </button>
    </div>
  )
}

export default NextButton