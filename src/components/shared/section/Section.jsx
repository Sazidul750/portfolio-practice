import React from 'react'

import './Section.scss'

const Section = ({id,className,content,children,background,title}) => {
  return (
    <div id={id||''} className={`section ${className ? className:""}, ${background==="dark"?"dark":"light"}`}>
        <div className="content">
          {
            title&&(
                <div className="section-title">
                    <h2>{title}</h2>
                </div>
            )
          }
          {children}
        </div>
    </div>
  )
}

export default Section