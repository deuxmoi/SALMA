import React from 'react';
import { Heart } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-6 md:mb-0">
          <Link to="hero" smooth={true} duration={500} className="text-xl md:text-2xl font-bold text-white cursor-pointer">
            SALMA JOUA
          </Link>
          <p className="mt-2 text-sm text-slate-400 max-w-xs">
            Cadrage, planification et suivi de projets digitaux de bout en bout.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <div className="flex space-x-4 mb-4">
            <a href="https://www.linkedin.com/in/salma-joua-150183232/" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors text-white">
              <FaLinkedin size={20} />
            </a>
          </div>
          <p className="text-sm text-slate-400 flex items-center">
            © {currentYear} Salma Joua. Fait avec <Heart size={14} className="text-red-500 mx-1" />
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;

