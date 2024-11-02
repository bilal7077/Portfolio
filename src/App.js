import React, { useState, useEffect } from 'react';
import Preloader from './Components/Preloader';
import './App.css';
import Header from './Components/Header';
import MoreAboutMe from './Components/MoreAboutMe';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import Project from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import TotalProject from './Components/TotalProject';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content load delay
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <div className="main-content">
          <div className='bg-sky-950'>
      <Navbar />
      <Header />
      <Services/>
      <MoreAboutMe/>
      <Project/>
      <Contact/>
      <TotalProject/>
      <Footer/>
      </div>
        </div>
      )}
    </div>
  );
}

export default App;
