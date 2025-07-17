import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import FetchingApi from './pages/FetchingApi'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='service' element={<Service />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contact' element={<Contact />} />
          <Route path='fetchingapi' element={<FetchingApi />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
