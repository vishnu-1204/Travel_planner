import React from "react";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import Trips from "./components/Trips.jsx";
import Footer from "./components/Footer.jsx";
import Testimonials from "./components/Testimonials.jsx";

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Trips/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

