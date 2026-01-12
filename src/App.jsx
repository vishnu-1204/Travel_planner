import React from "react";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import Trips from "./components/Trips.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Trips/>
      <Footer/>
    </>
  );
}

