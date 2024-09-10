import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';  // Ensure you have this component
import Contact from './components/Contact';  // Ensure you have this component
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { Footer } from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Toaster
        position="top-center"
        // containerStyle={{
        //   top: "100px",
        //   right: 0,
        // }}
        // toastOptions={{ duration: 5000 }}
        reverseOrder={false}
      />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
