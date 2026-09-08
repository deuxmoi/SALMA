import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', to: 'hero' },
    { name: 'À propos', to: 'about' },
    { name: 'Expérience', to: 'experience' },
    { name: 'Projets', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-md' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold text-primary dark:text-accent cursor-pointer tracking-wider uppercase">
          <Link to="hero" smooth={true} duration={500}>SALMA JOUA</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer hover:text-primary dark:hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} className="text-accent" /> : <Moon size={20} className="text-primary" />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun size={20} className="text-accent" /> : <Moon size={20} className="text-primary" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 text-slate-900">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full flex flex-col items-center py-6 shadow-xl border-t border-slate-200 ">
          <ul className="flex flex-col space-y-4 text-center w-full">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full">
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-2 cursor-pointer font-medium hover:text-primary dark:hover:text-accent"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

