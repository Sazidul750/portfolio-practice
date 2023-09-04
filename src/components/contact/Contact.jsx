import React from 'react'
import Section from '../shared/section/Section'
import './Contact.scss'
import ContactInfo from './contactInfo/ContactInfo'
import Forms from './form/Forms'




function Contact() {
  return (
    <Section id="contact" title="Any Question? Fell Free to contact" background="light">
        <div className="contact-content-wrapper">
            <ContactInfo />
           <Forms />
        </div>
    </Section>
  )
}

export default Contact