import React from 'react'

import {AiOutlineCloudDownload} from 'react-icons/ai'
import skill from '../../images/tech-icons.png'
import './Skill.scss'
import Section from '../shared/section/Section'
import CalltoAction from '../shared/callToAction/CalltoAction'
const Skill = () => {
  return (
    <Section background="dark" id="skill">
        <div className="skill-content-wraper">
            <div className="left-col">
                <img src={skill} alt="html,css,js" />
            </div>
            <div className="right-col">
                <h2>Skill</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quas reiciendis aperiam, temporibus necessitatibus quam ea, laboriosam accusantium iste consectetur et ipsa officia dolorum sequi voluptatum saepe, aspernatur provident dolores. </p>
                <CalltoAction text={'Download'} icon={< AiOutlineCloudDownload />} > </CalltoAction>
            </div>
        </div>
       
    </Section>
  )
}

export default Skill