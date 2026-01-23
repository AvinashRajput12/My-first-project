import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import { Routes, Route } from "react-router-dom";

import Services from './components/Services'


function App() {
  
  return (
    <>
      
     <Navbar/>
     <Home/>
      <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
        
    </Routes>
     

    </>
  )
}

export default App
