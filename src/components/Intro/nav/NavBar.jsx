import React from 'react'

import './NavBar.scss'
import logo from '../../../images/logo.png'
import CalltoAction from '../../shared/callToAction/CalltoAction'
import { scroollToSection } from '../../utils/helper'

function NavBar() {
  return (
   <div className="top-navBar">
    <div className="nav-logo">
        <img src={logo} alt="logo" />
    </div>
    <div className="navigation">
        <span className='nav-item' onClick={()=>scroollToSection('skill')} >Skill</span>
        <span className='nav-item' onClick={()=>scroollToSection('portfolio')}>Protfolio</span>
        <span className='nav-item' onClick={() => scroollToSection("blog")} >Blog & Article</span>
        <CalltoAction text={"Contact-Me"} action={() => scroollToSection("contact")} />
    </div>
   </div>
  )
}

export default NavBar