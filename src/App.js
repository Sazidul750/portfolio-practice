import React from 'react'
import './App.scss'
import Intro from './components/Intro/Intro'
import Skill from './components/Skill/Skill'
import Portfolio from './components/portfolio/Portfolio'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



function App() {
  return (
    <div>
      <Intro />
      <Skill />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App