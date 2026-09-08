import React from 'react';
import Section from './Section';
import { Code2, Database, Layout, Server, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Développement Frontend',
      icon: <Layout className="text-primary dark:text-accent" size={24} />,
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Bootstrap', 'Tailwind CSS']
    },
    {
      title: 'Développement Backend',
      icon: <Server className="text-primary dark:text-accent" size={24} />,
      skills: ['Node.js', 'Express.js', 'PHP', 'Laravel']
    },
    {
      title: 'Bases de Données',
      icon: <Database className="text-primary dark:text-accent" size={24} />,
      skills: ['MongoDB', 'MySQL', 'Conception de BDD']
    },
    {
      title: 'Gestion de Projet & Outils',
      icon: <Wrench className="text-primary dark:text-accent" size={24} />,
      skills: ['Gestion de Projet', 'Méthodologie Agile / Scrum', 'Planification & Budget', 'Coordination d\'équipe', 'Git & GitHub']
    }
  ];

  return (
    <Section id="skills" title="Mes Compétences">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="glass-card p-6 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary/10 dark:bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              {category.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 text-slate-900 mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill, i) => (
                <li key={i} className="flex items-center text-slate-700">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;

