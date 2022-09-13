import React from 'react'
import './inputSection.scss'
import NameInput from '../../atoms/Inputs/NameInput';
import MailInput from '../../atoms/Inputs/MailInput';
import SendButton from '../../atoms/sendButton/SendButton';

function inputSection() {
  return (
    <div className='responsive-input'>
        <div>
        <NameInput/>
        <MailInput/>
        </div>
        <div className='responsive-send-button send'>
        <SendButton/>
        </div>
    </div>
  )
}

export default inputSection