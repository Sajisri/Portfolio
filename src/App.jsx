import React from 'react'
import Navbar from './components/navbar'
import Home from './components/Home'
import About from './components/About'
import Achievement from './components/achievement '
import Skills from './components/Skills'
import { Project } from './components/Project'
import { Contact } from './components/Contact'

const App = () => {
  return (
    <div>
   <Navbar/>
   <Home/>
   <About/>
   <Skills/>
   <Achievement/>
   <Project/>
   <Contact/>
    </div>
  )
}

export default App