import './App.css';
import React, { useState } from 'react';
import ToggleAbs from './components/ToggleAbs';
import ToggleFinger from './components/ToggleFinger';
import Ending from './components/Ending';

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
      {(msgToggle) && (
        <p className="text-center mt-4 text-sm text-red-500">
          จำเป็นต้องเลือกอย่างน้อยหนึ่งตัวเลือก
        </p>
      )}
      {(currentStage === 1) && (
        <ToggleAbs absUpdate={absUpdate} progressClick={progressClick} />
      )}
      {(currentStage === 2) && (
        <ToggleFinger fingerUpdate={fingerUpdate} progressClick={progressClick} />
      )}
      {(currentStage === 3) && (
        <Ending progressClick={progressClick} />
      )}
    </div>
  );
}

export default App;
