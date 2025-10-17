import React from 'react'
import './App.css'
import './index.css'
import Home from './page/Home'
import About from './page/About'
import WhyUs from './page/WhyUs'
import MakeMyTeaSection from './page/MakeMyTeaSection'
import Gallery from './page/Gallery'
import TestimonialSection from './page/TestimonialSection'
import Contact from './page/Contact'

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <WhyUs />
      <MakeMyTeaSection />
      <Gallery />
      <TestimonialSection />
      <Contact />
    </div>
  )
}

export default App