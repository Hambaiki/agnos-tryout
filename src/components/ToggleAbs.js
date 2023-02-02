import React, { useState } from 'react'

function ToggleAbs({ absUpdate }) {

  // const key_id = ['umbi', 'llq', 'luq', 'rlq', 'ruq', 'supra', 'epi', 'all'];

  function handleClick(e) {
    const button_id = e.currentTarget.id;

    setUmbiShown(false);
    setLlqShown(false);
    setLuqShown(false);
    setRlqShown(false);
    setRuqShown(false);
    setSupraShown(false);
    setEpiShown(false);
    setAllShown(false);

    switch (button_id) {
      case 'umbi':
        setUmbiShown(true);
        break;
      case 'llq':
        setLlqShown(true);
        break;
      case 'luq':
        setLuqShown(true);
        break;
      case 'rlq':
        setRlqShown(true);
        break;
      case 'ruq':
        setRuqShown(true);
        break;
      case 'supra':
        setSupraShown(true);
        break;
      case 'epi':
        setEpiShown(true);
        break;
      case 'all':
        setAllShown(true);
        break;
      default:
        break;
    }

    absUpdate(button_id);
    console.log(button_id);
  }

  const [umbiShown, setUmbiShown] = useState(false);
  const [llqShown, setLlqShown] = useState(false);
  const [luqShown, setLuqShown] = useState(false);
  const [rlqShown, setRlqShown] = useState(false);
  const [ruqShown, setRuqShown] = useState(false);
  const [supraShown, setSupraShown] = useState(false);
  const [epiShown, setEpiShown] = useState(false);
  const [allShown, setAllShown] = useState(false);

  return (
    <div className="container w-3/5 m-auto mb-4 max-w-sm shadow-xl rounded-3xl">
      <p className="m-4 mt-8 text-center text-lg text-slate-500">
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

        {allShown && (
          <div>
            <img className='absolute top-0 left-0' src={require('./img/all-over-highlight.png')} alt='all-over' />
            <img className='absolute top-0 left-0' src={require('./img/umbilicus-highlight.png')} alt='umbilicus' />
            <img className='absolute top-0 left-0' src={require('./img/llq-highlight.png')} alt='llq' />
            <img className='absolute top-0 left-0' src={require('./img/luq-highlight.png')} alt='luq' />
            <img className='absolute top-0 left-0' src={require('./img/rlq-highlight.png')} alt='rlq' />
            <img className='absolute top-0 left-0' src={require('./img/ruq-highlight.png')} alt='ruq' />
            <img className='absolute top-0 left-0' src={require('./img/suprapubic-highlight.png')} alt='suprapubic' />
            <img className='absolute top-0 left-0' src={require('./img/epigastrium-highlight.png')} alt='epigastrium' />
          </div>
        )}
        {umbiShown && (
          <div>
            <img className='absolute top-0 left-0' src={require('./img/umbilicus-highlight.png')} alt='umbilicus' />
            <img className='absolute top-0 left-0' src={require('./img/umbilicus-active.png')} alt='umbilicus-active' />
          </div>
        )}
        {llqShown && (
          <div>
            <img className='absolute top-0 left-0' src={require('./img/llq-highlight.png')} alt='llq' />
            <img className='absolute top-0 left-0' src={require('./img/llq-active.png')} alt='llq-active' />
          </div>
        )}
        {luqShown && (
          <div>
            <img className='absolute top-0 left-0' src={require('./img/luq-highlight.png')} alt='luq' />
            <img className='absolute top-0 left-0' src={require('./img/luq-active.png')} alt='luq-active' />
          </div>
        )}
        {rlqShown && (
          <div>
            <img className='absolute top-0 left-0' src={require('./img/rlq-highlight.png')} alt='rlq' />
            <img className='absolute top-0 left-0' src={require('./img/rlq-active.png')} alt='rlq-active' />
          </div>
        )}
        {ruqShown && (
          <div>
            <img className='absolute top-0 left-0' src={require('./img/ruq-highlight.png')} alt='ruq' />
            <img className='absolute top-0 left-0' src={require('./img/ruq-active.png')} alt='ruq-active' />
          </div>
        )}
        {supraShown && (
          <div>
            <img className='absolute top-0 left-0' src={require('./img/suprapubic-highlight.png')} alt='suprapubic' />
            <img className='absolute top-0 left-0' src={require('./img/suprapubic-active.png')} alt='suprapubic-active' />
          </div>
        )}
        {epiShown && (
          <div>
            <img className='absolute top-0 left-0' src={require('./img/epigastrium-highlight.png')} alt='epigastrium' />
            <img className='absolute top-0 left-0' src={require('./img/epigastrium-active.png')} alt='epigastrium-active' />
          </div>
        )}
      </div>
    </div>
  )
}

export default ToggleAbs