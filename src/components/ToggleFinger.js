import React, { useState } from 'react'

function ToggleFinger({ fingerUpdate }) {

  const [fingerPart, setFingerPart] = useState([
    {
      name: 'DIP',
      id: 'dip',
      active: false,
    },
    {
      name: 'PIP',
      id: 'pip',
      active: false,
    },
    {
      name: 'MIP',
      id: 'mip',
      active: false,
    },
    {
      name: 'Other',
      id: 'all-finger',
      active: false,
    },
  ]);

  function handleFingerClick(e) {
    const button_id = e.currentTarget.id;
    let temp = [...fingerPart];
    temp.forEach(function(item) {
      if (item.id === button_id) {
        item.active = true;
        fingerUpdate(item.name);
      } else {
        item.active = false;
      }
    })
    setFingerPart(temp);
  }

  return (
    <div className="container w-3/5 m-auto mb-4 pb-4 max-w-sm shadow-xl rounded-3xl bg-white">
      <p className="m-4 mt-8 text-center text-lg text-slate-500">
        จุดไหนที่คุณปวดนิ้วมากที่สุด?
      </p>
      <div className='relative'>
        <img src={require('./img/default-finger.png')} alt="abs" />
        <div>
          <div id='dip-group'>
            <button id='dip' className="absolute z-10 p-dp top-dt1 left-dl1 bg-red-400 rounded-3xl opacity-0 hover:opacity-0" onClick={handleFingerClick} />
            <button id='dip' className="absolute z-10 p-dp top-dt2 left-dl2 bg-red-400 rounded-3xl opacity-0 hover:opacity-0" onClick={handleFingerClick} />
            <button id='dip' className="absolute z-10 p-dp top-dt3 left-dl3 bg-red-400 rounded-3xl opacity-0 hover:opacity-0" onClick={handleFingerClick} />
            <button id='dip' className="absolute z-10 p-dp top-dt4 left-dl4 bg-red-400 rounded-3xl opacity-0 hover:opacity-0" onClick={handleFingerClick} />
          </div>
          <div id='mip-group'>
            <button id='mip' className="absolute z-10 p-pp top-pt1 left-pl1 bg-blue-400 rounded-3xl opacity-0 hover:opacity-0" onClick={handleFingerClick} />
            <button id='mip' className="absolute z-10 p-pp top-pt2 left-pl2 bg-blue-400 rounded-3xl opacity-0 hover:opacity-0" onClick={handleFingerClick} />
            <button id='mip' className="absolute z-10 p-pp top-pt3 left-pl3 bg-blue-400 rounded-3xl opacity-0 hover:opacity-0" onClick={handleFingerClick} />
            <button id='mip' className="absolute z-10 p-pp top-pt4 left-pl4 bg-blue-400 rounded-3xl opacity-0 hover:opacity-0" onClick={handleFingerClick} />
            <button id='mip' className="absolute z-10 p-pp top-pt5 left-pl5 bg-blue-400 rounded-3xl opacity-0 hover:opacity-0" onClick={handleFingerClick} />
          </div>
          <div id='pip-group'>
            <button id='pip' className="absolute z-10 p-mp top-mt1 left-ml1 bg-green-400 rounded-3xl opacity-0 hover:opacity-0" onClick={handleFingerClick} />
            <button id='pip' className="absolute z-10 p-mp top-mt2 left-ml2 bg-green-400 rounded-3xl opacity-0 hover:opacity-0" onClick={handleFingerClick} />
            <button id='pip' className="absolute z-10 p-mp top-mt3 left-ml3 bg-green-400 rounded-3xl opacity-0 hover:opacity-0" onClick={handleFingerClick} />
            <button id='pip' className="absolute z-10 p-mp top-mt4 left-ml4 bg-green-400 rounded-3xl opacity-0 hover:opacity-0" onClick={handleFingerClick} />
            <button id='pip' className="absolute z-10 p-mp top-mt5 left-ml5 bg-green-400 rounded-3xl opacity-0 hover:opacity-0" onClick={handleFingerClick} />
          </div>
          <button id='all-finger' className="absolute z-10 p-p3 w-w2 top-bt2 left-bl2 bg-blue-700 rounded-3xl opacity-0 hover:opacity-0" onClick={handleFingerClick} />

          {(fingerPart[0].active || fingerPart[3].active)  && (
            <div>
              <img className='absolute top-0 left-0' src={require('./img/dip-highlight.png')} alt='dip' />
              {!fingerPart[3].active && (
                <img className='absolute top-0 left-0' src={require('./img/dip-active.png')} alt='dip-active' />
              )}
            </div>
          )}
          {(fingerPart[1].active || fingerPart[3].active) && (
            <div>
              <img className='absolute top-0 left-0' src={require('./img/pip-highlight.png')} alt='pip' />
              {!fingerPart[3].active && (
                <img className='absolute top-0 left-0' src={require('./img/pip-active.png')} alt='pip-active' />
              )}
            </div>
          )}
          {(fingerPart[2].active || fingerPart[3].active) && (
            <div>
              <img className='absolute top-0 left-0' src={require('./img/mcp-highlight.png')} alt='mcp' />
              {!fingerPart[3].active && (
                <img className='absolute top-0 left-0' src={require('./img/mcp-active.png')} alt='mcp-active' />
              )}
            </div>
          )}
          {fingerPart[3].active && (
            <div>
              <img className='absolute top-0 left-0' src={require('./img/others-highlight.png')} alt='others' />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ToggleFinger