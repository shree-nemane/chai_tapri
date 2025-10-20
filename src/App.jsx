import React from 'react'
import './App.css'
import './index.css'
import Home from './page/Home'
import About from './page/About'
import WhyUs from './page/WhyUs'
import MakeMyTea from './page/MakeMyTea'
import Gallery from './page/Gallery'
import Testimonial from './page/Testimonial'
import Contact from './page/Contact'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Home />
      <About />
      <WhyUs />
      <MakeMyTea />
      <Gallery />
      <Testimonial />
      <Contact />
    </div>
  )
}

export default App