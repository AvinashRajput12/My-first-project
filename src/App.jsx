import { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import About from './components/About'

import { Routes, Route } from "react-router-dom";

import Services from './components/Services'


function App() {
  
  return (
    <>
      
     <Navbar/>
     <About/>
      <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/services" element={<Services />} />
    </Routes>
     

    </>
  )
}

export default App
