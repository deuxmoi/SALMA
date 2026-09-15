import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail, Star } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import photo from '../assets/profile-photo.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-accent font-semibold mb-2 tracking-wide uppercase">Bonjour, je suis</p>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 text-slate-900 mb-4 leading-tight">
              Salma <br />
              <span className="text-primary dark:text-primary-light">Joua</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-700 font-medium mb-6">
              Chef de Projet
            </h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Spécialisée dans le pilotage de campagnes publicitaires, la gestion de projets d'habillage & signalétique, et la coordination créative de A à Z. J'assure le lien entre la vision du client et la réalisation du projet.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
          >
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary flex items-center w-full sm:w-auto justify-center">
                Discutons <ArrowRight size={18} className="ml-2" />
              </motion.button>
            </Link>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="./CV_2026-09-15_SALMA_JOUA (1).pdf" download="CV_2026-09-15_SALMA_JOUA (1).pdf" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center w-full sm:w-auto justify-center">
              Télécharger le CV <Download size={18} className="ml-2" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center justify-center md:justify-start space-x-5"
          >
            <motion.a whileHover={{ y: -5 }} href="https://www.linkedin.com/in/salma-joua-150183232/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary text-slate-500 dark:hover:text-accent transition-colors">
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href="mailto:salmaa.joua@gmail.com" className="text-slate-500 hover:text-primary text-slate-500 dark:hover:text-accent transition-colors">
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute inset-2 border-4 border-white/50 dark:border-white/10 rounded-full z-20"></div>
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white  shadow-2xl relative z-10 bg-slate-200  flex items-center justify-center">
              <img src={photo} alt="Salma Joua" className="w-full h-full object-cover object-center absolute inset-0" />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 text-white px-4 py-2 rounded-xl font-bold shadow-xl z-30 text-sm md:text-base"
            >
              Gestion de Projet
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 -right-8 bg-slate-900/90 backdrop-blur-md border border-slate-800 text-white px-4 py-2 rounded-xl font-bold shadow-xl z-30 flex items-center text-sm md:text-base"
            >
              <Star className="text-yellow-400 fill-yellow-400 mr-2 flex-shrink-0" size={18} />
              <span>Chef de Projet</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

