import React from 'react';
import './inputs.scss';

function NameInput() {
  return (
    <div>
      <input
       id='name'
       type='name'
       placeholder='Name'
       className='input'
      />
    </div>
  )
};

export default NameInput;