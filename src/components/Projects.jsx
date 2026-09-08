import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';

// SALMA FILAT photos served from /public/salma-filat/
const salmaFilatImages = [
  { src: '/portfolio/salma-filat/SALMA FILAT .jpg', label: 'SALMA FILAT' },
  { src: '/portfolio/salma-filat/SALMA FILAT 1.jpg', label: 'SALMA FILAT 1' },
  { src: '/portfolio/salma-filat/SALMA FILAT 2.jpg', label: 'SALMA FILAT 2' },
  { src: '/portfolio/salma-filat/SALMA FILAT 3.jpg', label: 'SALMA FILAT 3' },
  { src: '/portfolio/salma-filat/SALMA FILAT 4.jpg', label: 'SALMA FILAT 4' },
  { src: '/portfolio/salma-filat/SALMA FILAT 5.jpg', label: 'SALMA FILAT 5' },
  { src: '/portfolio/salma-filat/SALMA FILAT 6.jpg', label: 'SALMA FILAT 6' },
  { src: '/portfolio/salma-filat/SALMA FILAT 7.jpg', label: 'SALMA FILAT 7' },
];

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <div className="relative w-full bg-black flex items-center justify-center overflow-hidden" style={{ minHeight: '340px', maxHeight: '480px' }}>

      {/* Animated image */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.img
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          src={images[current].src}
          alt={images[current].label}
          className="w-full h-auto object-contain"
          style={{ maxHeight: '480px' }}
        />
      </AnimatePresence>

      {/* Previous button */}
      <button
        onClick={goPrev}
        aria-label="Photo précédente"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/40 transition-all duration-200 shadow-lg"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next button */}
      <button
        onClick={goNext}
        aria-label="Photo suivante"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/40 transition-all duration-200 shadow-lg"
      >
        <ChevronRight size={22} />
      </button>

      {/* Counter badge */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-semibold tracking-wide">
        {current + 1} / {images.length}
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-3 right-4 z-10 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            aria-label={`Aller à la photo ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${i === current ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const [expanded, setExpanded] = useState(false);

  const projects = [
    {
      title: 'Moussem Moulay Abdellah Amghar',
      description: 'Chef de Projet – Participation à l\'organisation et à la coordination du Moussem Moulay Abdellah Amghar, en assurant le suivi de plusieurs aspects du projet en collaboration avec l\'équipe organisatrice. Gestion et coordination des relations avec les sponsors et partenaires, suivi de leurs besoins et accompagnement dans la mise en place de leurs actions de sponsoring et de visibilité durant l\'événement.',
      images: salmaFilatImages,
      technologies: ['Gestion de Projet', 'Sponsoring & Partenariats', 'Événementiel', 'Coordination d\'Équipe'],
      liveLink: '#',
    }
  ];

  return (
    <Section id="projects" title="Projets Réalisés" className="bg-slate-50 ">
      <div className="max-w-3xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="glass-card overflow-hidden group"
          >
            {/* Image slider */}
            <ImageSlider images={project.images} />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 text-slate-900 mb-3">
                {project.title}
              </h3>

              {/* Expandable description */}
              <AnimatePresence initial={false}>
                <motion.p
                  className="text-slate-700 mb-2 leading-relaxed overflow-hidden"
                  animate={{ height: expanded ? 'auto' : '4.5rem' }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  {project.description}
                </motion.p>
              </AnimatePresence>

              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1 text-sm font-semibold text-primary dark:text-accent hover:underline mb-5 transition-colors"
              >
                {expanded ? (
                  <><ChevronUp size={16} /> Voir moins</>
                ) : (
                  <><ChevronDown size={16} /> Voir plus</>
                )}
              </button>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-100  text-primary dark:text-accent text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
