import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx';
import Home from './pages/Home.jsx';
import Testimonials from './components/testimonials.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
        <Navbar />
        <Hero />
        <Home/>
        <Testimonials/>
        <Footer/>
    </>
  )
}

export default App;
