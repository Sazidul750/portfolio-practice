import React, { useState } from 'react'

import './Filter.scss'

function Filter({filterProjects}) {
    const filtersData = [
        {
            name: "All",
            id: "all",
        },
        {
            name: "Products",
            id: "product",
        },
        {
            name: "Web Pages",
            id: "web-page",
        },
        {
            name: "Web Apps",
            id: "web-app",
        },
        {
            name: "Mobile Apps",
            id: "mobile-app",
        },
    ];
    const [active,setActive]=useState('')
    const handleClick=(id)=>{
        setActive(id)
        filterProjects(id)
    }
  return (
    <div>
        <ul className="filter-menu-items">
           {
            filtersData.map((item)=>{
                return  <li key={item.id} className={`filter-menu-item ${active===item.id?"active":""}` } onClick={()=>handleClick(item.id)} >
                {item.name}
                </li>
            })
           }
        </ul>
       
    </div>
  )
}

export default Filter