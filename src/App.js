import './App.css';
import React, { useState } from 'react';
import ToggleAbs from './components/ToggleAbs';
import ToggleFinger from './components/ToggleFinger';

function App() {

  function absUpdate(part) {
    setSelectedAbs(part);
    console.log('selected abs:', part);
  }

  function fingerUpdate(part) {
    setSelectedFinger(part);
    console.log('selected finger:', part);
  }

  function progressClick() {
    switch (currentStage) {
      case 1:
        if (selectedAbs === null) {
          console.log('Value has not yet been set!');
          setMsgToggle(true);
          return;
        } else {
          break;
        }
      case 2:
        if (selectedFinger === null) {
          console.log('Value has not yet been set!');
          setMsgToggle(true);
          return;
        } else {
          break;
        }
      case 3:
        setCurrentStage(1);
        return;
      default:
        return;
    }

    setMsgToggle(false);
    setCurrentStage(currentStage + 1);
  }

  const [currentStage, setCurrentStage] = useState(1);
  const [selectedAbs, setSelectedAbs] = useState(null);
  const [selectedFinger, setSelectedFinger] = useState(null);
  const [msgToggle, setMsgToggle] = useState(false);

  return (
    <div className="flex flex-col h-screen font-face-kn bg-slate-50">
      {(msgToggle) && (
        <p className="flex items-center justify-center mt-4 text-sm text-red-500">
          จำเป็นต้องเลือกอย่างน้อยหนึ่งตัวเลือก
        </p>
      )}
      {(currentStage === 2) && (
        <ToggleFinger fingerUpdate={fingerUpdate} />
      )}
      {(currentStage === 1) && (
        <ToggleAbs absUpdate={absUpdate} />
      )}
      {(currentStage === 3) && (
        <div className="container w-3/5 m-auto mb-4 max-w-sm shadow-xl rounded-3xl bg-white">
          <p className="p-8 text-center text-5xl text-slate-500">
            ขอบคุณ
          </p>
        </div>
      )}
      {(currentStage === 3) && (
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
      )}
      {(currentStage !== 3) && (
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
      )}
    </div>
  );
}

export default App;
