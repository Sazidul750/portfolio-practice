import React from 'react'
import './SocialIcons.scss'
const SocialIcons = ({icon,color,link}) => {
  return (
    <div className='social-icon' style={{background:color}} onClick={()=>{
        window.open(link,"_blank")
    }}  >{icon}</div>
  )
}

export default SocialIcons