import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';  // Ensure you have this component
import Contact from './components/Contact';  // Ensure you have this component
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </Router>
  );
}

export default App;
