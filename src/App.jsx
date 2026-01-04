import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx';
import Home from './pages/Home.jsx';
import Testimonials from './components/testimonials.jsx';
import Footer from './components/Footer.jsx';
import Login from './pages/Login.jsx';

function App() {

  return (
    <>
       <Navbar/>
       <Hero/>
       <Home/>
       <Testimonials/>
       <Footer/>
      
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
      </Routes>

    </>
  )
}

export default App;
