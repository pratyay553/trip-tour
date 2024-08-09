import React from 'react'
import Navbar from '../components/Navbar'
import Hero from "../components/Hero";
import abouimg from "../screens/service.jpeg";
import Footer from '../components/Footer';
import Aboutus from '../components/Aboutus';
export default function About() {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" heroimg={abouimg} title="About" />
     <Aboutus/> 
     <Footer/>
      
    </div>
  );
}
