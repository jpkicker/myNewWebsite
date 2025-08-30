import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Samples from './components/Samples';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === 'about' && <About setCurrentPage={setCurrentPage} />}
        {currentPage === 'samples' && <Samples />}
        {currentPage === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App; 