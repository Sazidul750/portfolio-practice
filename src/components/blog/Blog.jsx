import React from 'react'

import './Blog.scss'
import Section from '../shared/section/Section'
import BlogCard from './blogCard/BlogCard'
import blog1 from '../../images/blogs/blog-thumb-1.jpg'
import blog2 from '../../images/blogs/blog-thumb-2.jpg'
import blog3 from '../../images/blogs/blog-thumb-3.jpg'

function Blog() {
  return (
    <Section id="blog" title="Blogs & Articles" background="dark">
      
        <div className="blogs-content-wrapper">
            <BlogCard 
            user="john Doe"
            date="March 12 2023"
            image={blog1}
            title=" Lorem ipsum dolor sit amet consectetur"
            description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis autem sequi odio?"
            
            />
            <BlogCard 
            user="john Doe"
            date="March 12 2023"
            image={blog2}
            title=" Lorem ipsum dolor sit amet consectetur"
            description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis autem sequi odio?"
            
            />
            <BlogCard 
            user="john Doe"
            date="March 12 2023"
            image={blog3}
            title=" Lorem ipsum dolor sit amet consectetur"
            description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis autem sequi odio?"
            
            />
        </div>
    </Section>
  )
}

export default Blog