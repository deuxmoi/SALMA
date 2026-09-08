import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Always start in light mode
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    setDarkMode(false);
  }, []);

  return (
    <div className="font-sans antialiased min-h-screen transition-colors duration-300" style={{backgroundColor: '#F7F2EA', color: '#111111'}}>
      <CustomCursor />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
