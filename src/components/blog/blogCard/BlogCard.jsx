import React from 'react'
import './BlogCard.scss'
import ArrowIcon from '../../shared/Arrow-icon/ArrowIcon'
function BlogCard({user,date,image,title,description}) {
  return (
    <div className='blog-card'>
        <div className="image-section">
            <img src={image} alt={title} />
        </div>
        <div className="content-section">
            <div className="info-bar">
                <div className="info-main">
                <div className="user-name">By {user}</div>
                <div className="posted-date">{date}</div>
                </div>
                
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="readmore-cta">
                    <span className='text'>Read More</span>
                    <ArrowIcon />
                </div>
            </div>
        </div>
    </div>
  )
} 

export default BlogCard