import React from 'react'

import './Intro.scss'
import cloud from '../../images/cloud.png'
import cloudSoft from '../../images/cloud-soft.png'
import NavBar from './nav/NavBar'
import IntroContent from './intro-content/IntroContent'

function Intro() {
  return (
   <div className="intro-section">
    <div className="victor-bg" id='parallax'></div>
    <img src={cloud} className='cloud' alt="cloud" />
    <img src={cloudSoft} className='cloud-soft' alt="cloudSoft" />
    <div className="contain">
      <NavBar />
      <IntroContent />
    </div>
   
   </div>
  )
}

export default Intro