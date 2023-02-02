import React, { useState } from 'react'

function ToggleAbs({ absUpdate }) {


  const [absPart, setAbsPart] = useState([
    {
      name: 'Umbilicus',
      id: 'umbi',
      active: false,
    },
    {
      name: 'LLQ',
      id: 'llq',
      active: false,
    },
    {
      name: 'LUQ',
      id: 'luq',
      active: false,
    },
    {
      name: 'RLQ',
      id: 'rlq',
      active: false,
    },
    {
      name: 'RUQ',
      id: 'ruq',
      active: false,
    },
    {
      name: 'Suprapubic',
      id: 'supra',
      active: false,
    },
    {
      name: 'Epigastrium',
      id: 'epi',
      active: false,
    },
    {
      name: 'Other',
      id: 'all',
      active: false,
    },
  ]);

  function handleClick(e) {
    const button_id = e.currentTarget.id;
    let temp = [...absPart];
    temp.forEach(function (item) {
      if (item.id === button_id) {
        item.active = true;
        absUpdate(item.name);
      } else {
        item.active = false;
      }
    })
    setAbsPart(temp);
  }

  return (
    <div className="container w-3/5 m-auto mb-4 pb-1 overflow-auto max-w-sm shadow-xl rounded-3xl bg-white">
      <p className="m-4 mt-6 text-center text-lg text-slate-500">
        คุณปวดท้องที่บริเวณใดมากที่สุด?
      </p>
      <div className='relative'>
        <img src={require('./img/default-abs.png')} alt="abs" />
        <div>
          <button id='umbi' className="absolute z-10 p-p1 top-ct1 left-cl1 bg-red-400 rounded-3xl opacity-0 hover:opacity-0" onClick={handleClick} />
          <button id='epi' className="absolute z-10 p-p2 top-ct2 left-cl2 bg-blue-400 rounded-3xl opacity-0 hover:opacity-0" onClick={handleClick} />
          <button id='supra' className="absolute z-10 p-p2 top-ct3 left-cl2 bg-green-400 rounded-3xl opacity-0 hover:opacity-0" onClick={handleClick} />
          <button id='luq' className="absolute z-10 p-p2 top-ct4 left-cl3 bg-yellow-400 rounded-3xl opacity-0 hover:opacity-0" onClick={handleClick} />
          <button id='llq' className="absolute z-10 p-p2 top-ct5 left-cl3 bg-slate-400 rounded-3xl opacity-0 hover:opacity-0" onClick={handleClick} />
          <button id='ruq' className="absolute z-10 p-p2 top-ct4 left-cl4 bg-orange-400 rounded-3xl opacity-0 hover:opacity-0" onClick={handleClick} />
          <button id='rlq' className="absolute z-10 p-p2 top-ct5 left-cl4 bg-emerald-400 rounded-3xl opacity-0 hover:opacity-0" onClick={handleClick} />
          <button id='all' className="absolute z-10 p-p3 w-w1 top-bt left-bl bg-blue-700 rounded-3xl opacity-0 hover:opacity-0" onClick={handleClick} />
        </div>
        <div className={`${(absPart[0].active) ? 'visible' : 'hidden'}`}>
          <img className='absolute top-0 left-0' src={require('./img/umbilicus-highlight.png')} alt='umbilicus' />
          <img className='absolute top-0 left-0' src={require('./img/umbilicus-active.png')} alt='umbilicus-active' />
        </div>
        <div className={`${(absPart[1].active) ? 'visible' : 'hidden'}`}>
          <img className='absolute top-0 left-0' src={require('./img/llq-highlight.png')} alt='llq' />
          <img className='absolute top-0 left-0' src={require('./img/llq-active.png')} alt='llq-active' />
        </div>
        <div className={`${(absPart[2].active) ? 'visible' : 'hidden'}`}>
          <img className='absolute top-0 left-0' src={require('./img/luq-highlight.png')} alt='luq' />
          <img className='absolute top-0 left-0' src={require('./img/luq-active.png')} alt='luq-active' />
        </div>
        <div className={`${(absPart[3].active) ? 'visible' : 'hidden'}`}>
          <img className='absolute top-0 left-0' src={require('./img/rlq-highlight.png')} alt='rlq' />
          <img className='absolute top-0 left-0' src={require('./img/rlq-active.png')} alt='rlq-active' />
        </div>
        <div className={`${(absPart[4].active) ? 'visible' : 'hidden'}`}>
          <img className='absolute top-0 left-0' src={require('./img/ruq-highlight.png')} alt='ruq' />
          <img className='absolute top-0 left-0' src={require('./img/ruq-active.png')} alt='ruq-active' />
        </div>
        <div className={`${(absPart[5].active) ? 'visible' : 'hidden'}`}>
          <img className='absolute top-0 left-0' src={require('./img/suprapubic-highlight.png')} alt='suprapubic' />
          <img className='absolute top-0 left-0' src={require('./img/suprapubic-active.png')} alt='suprapubic-active' />
        </div>
        <div className={`${(absPart[6].active) ? 'visible' : 'hidden'}`}>
          <img className='absolute top-0 left-0' src={require('./img/epigastrium-highlight.png')} alt='epigastrium' />
          <img className='absolute top-0 left-0' src={require('./img/epigastrium-active.png')} alt='epigastrium-active' />
        </div>
        <div className={`${(absPart[7].active) ? 'visible' : 'hidden'}`}>
          <img className='absolute top-0 left-0' src={require('./img/all-over-highlight.png')} alt='all-over' />
          <img className='absolute top-0 left-0' src={require('./img/umbilicus-highlight.png')} alt='umbilicus' />
          <img className='absolute top-0 left-0' src={require('./img/llq-highlight.png')} alt='llq' />
          <img className='absolute top-0 left-0' src={require('./img/luq-highlight.png')} alt='luq' />
          <img className='absolute top-0 left-0' src={require('./img/rlq-highlight.png')} alt='rlq' />
          <img className='absolute top-0 left-0' src={require('./img/ruq-highlight.png')} alt='ruq' />
          <img className='absolute top-0 left-0' src={require('./img/suprapubic-highlight.png')} alt='suprapubic' />
          <img className='absolute top-0 left-0' src={require('./img/epigastrium-highlight.png')} alt='epigastrium' />
        </div>
      </div>
    </div>
  )
}

export default ToggleAbs