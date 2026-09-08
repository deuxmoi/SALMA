import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children, className = '', title }) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-slate-900 inline-block relative">
            {title}
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-accent rounded-full"></span>
          </h2>
        </motion.div>
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;

