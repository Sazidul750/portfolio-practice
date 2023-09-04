import React from 'react'

import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import './ContactInfo.scss'


function ContactInfo() {
  return (
    <div className='contact-info-box' >
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex</h4>
        <div className="contact-option">
           <BsFillTelephoneFill />
            <span className='text'>01793750223</span>
        </div>
        <div className="contact-option">
            <MdEmail />
            <span className='text'>sazidulislam750223@gmail.com</span>
        </div>
    </div>
  )
}

export default ContactInfo