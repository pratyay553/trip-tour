import React from 'react'
import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import serimg from '../screens/service.jpeg'
import Footer from '../components/Footer';
import Trip from '../components/Trip';
export default function Service() {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" 
      heroimg={serimg} 
      title="Service" 
      />
      <Trip/>
      <Footer/>
    </div>
  );
}
