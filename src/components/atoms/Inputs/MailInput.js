import React from 'react';
import './inputs.scss';

function MailInput() {
  return (
    <div>
      <input
       id='email'
       type='email'
       placeholder='Email'
       className='input'
      />
    </div>
  )
}

export default MailInput