import React from 'react'
import './CalltoAction.scss'
import ArrowIcon from '../Arrow-icon/ArrowIcon'

function CalltoAction({text,icon,action}) {
  return (
    <div>
        <div className="call-to-action" onClick={action} >
            <span className='text'>{text}</span>
            {icon? <div className="icon">{icon}</div>: <ArrowIcon /> }
        
        </div>
    </div>
  )
}

export default CalltoAction