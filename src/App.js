import './App.css';
import React, { useState } from 'react';
import ToggleAbs from './components/ToggleAbs';
import ToggleFinger from './components/ToggleFinger';
import Ending from './components/Ending';
import NextButton from './components/NextButton';
import EndButton from './components/EndButton';

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
          console.log('reached the end');
          const res = [
            { 'selected-abs': selectedAbs },
            { 'selected-finger': selectedFinger },
          ];
          localStorage.setItem('submission', JSON.stringify(res));
          break;
        }
      case 3:
        setCurrentStage(1);
        setSelectedAbs(null);
        setSelectedFinger(null);
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
    <div className='flex flex-col h-screen font-face-kn bg-slate-50'>
      <p className={`text-center mt-4 text-sm text-red-500 ${(msgToggle) ? 'opacity-100' : 'opacity-0 hidden'}`}>
        จำเป็นต้องเลือกอย่างน้อยหนึ่งตัวเลือก
      </p>
      <div className={`my-auto ${(currentStage === 1) ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <ToggleAbs absUpdate={absUpdate} />
        <NextButton progressClick={progressClick} />
      </div>
      <div className={`my-auto ${(currentStage === 2) ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <ToggleFinger fingerUpdate={fingerUpdate} />
        <NextButton progressClick={progressClick} />
      </div>
      <div className={`my-auto ${(currentStage === 3) ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <Ending />
        <EndButton progressClick={progressClick} />
      </div>
    </div>
  );
}

export default App;
