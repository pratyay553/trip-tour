import Home from './route/Home';
import './App.css';
import {Route, Routes } from "react-router-dom";


import About from './route/About';
import Service from './route/Service';
import Contact from './route/Contact';
import Signup from './route/Signup';
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

