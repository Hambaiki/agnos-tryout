import './App.css';
import React, { useState } from 'react';
import ToggleAbs from './components/ToggleAbs';
import ToggleFinger from './components/ToggleFinger';

function App() {
  const [currentStage, setCurrentStage] = useState(1);
  const [selectedAbs, setSelectedAbs] = useState(null);
  const [selectedFinger, setSelectedFinger] = useState(null);

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
          return;
        } else {
          break;
        }
      case 2:
        if (selectedFinger === null) {
          console.log('Value has not yet been set!');
          return;
        } else {
          break;
        }
      default:
        return;
    }
    
    setCurrentStage(currentStage + 1);
  }

  return (
    <div className="flex flex-col h-screen font-face-kn">
      { (currentStage === 2) && (
        <ToggleFinger fingerUpdate={ fingerUpdate }/>
      )}
      { (currentStage === 1) && (
        <ToggleAbs absUpdate={ absUpdate } />
      )}
      { (currentStage === 3) && (
        <div className="container w-3/5 m-auto max-w-sm shadow-xl rounded-3xl">
          <p className="m-4 mt-8 p-8 text-center text-lg text-slate-500">
            ขอบคุณ
          </p>
        </div>
      )}
      { (currentStage !== 3) && (
        <div className='container w-3/5 m-auto mt-0 max-w-sm'>
        <button className='
          w-full 
          p-4 rounded-3xl 
          bg-gray-100 
          text-gray-400 
          text-lg 
          hover:bg-gradient-to-r 
          hover:from-sky-400 
          hover:to-blue-800
          hover:text-white'
          onClick={progressClick}>
          ต่อไป
        </button>
      </div>
      )}
    </div>
  );
}

export default App;
