import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import conimg from "../screens/contact.jpeg"
import Footer from '../components/Footer';
import Contactform from '../components/Contactform';
export default function Contact() {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" 
      heroimg={conimg} 
      title="contact" 
      />
      <Contactform/>
      <Footer/>
    </div>
  );
}
