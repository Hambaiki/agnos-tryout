import React from 'react'

function Message({ closeMsg }) {
  return (
    <div className='absolute inset-x-0 container flex flex-row justify-evenly text-sm z-30 mx-auto mt-8 p-2 w-3/5 max-w-sm rounded-2xl bg-red-600 opacity-75'>
      <p className='text-white m-auto'>
        จำเป็นต้องเลือกอย่างน้อยหนึ่งตัวเลือก
      </p>
      <button className='bg-white rounded-xl p-1 hover:bg-slate-500 hover:text-white' onClick={closeMsg}>
        ปิด
      </button>
    </div>
  )
}

export default Message