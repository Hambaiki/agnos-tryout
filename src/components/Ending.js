import React from 'react'

function Ending({ progressClick }) {
  return (
    <div className="my-auto">
      <div className="container w-3/5 m-auto mb-4 max-w-sm shadow-xl rounded-3xl bg-white">
        <p className="p-8 text-center text-5xl text-slate-500">
          ขอบคุณ
        </p>
      </div>
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
          ทำใหม่อีกครั้ง
        </button>
      </div>
    </div>
  )
}

export default Ending