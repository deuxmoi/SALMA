import React from 'react';
import Section from './Section';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Chef de Projet',
      company: 'Filat Distribution',
      location: 'Grand Casablanca, Maroc',
      period: 'Avr 2026 - Présent',
      description: [
        'Cadrage, planification et suivi des projets digitaux de l\'entreprise.',
        'Coordination des équipes de développement et de design pour assurer la livraison dans les délais.',
        'Suivi du budget, des risques et de l\'avancement des tâches (KPI).',
        'Rédaction des cahiers des charges et des spécifications fonctionnelles.',
        'Interface privilégiée entre les directions métiers et les équipes techniques.',
        'Animation des rituels de suivi de projets et des ateliers de travail.'
      ]
    },
    {
      role: 'Responsable Administrative et Commerciale',
      company: 'AD Masters',
      location: 'Grand Casablanca, Maroc',
      period: 'Avr 2025 - Mar 2026 · 1 an',
      description: [
        'Gestion administrative et commerciale de l\'entreprise.',
        'Coordination des opérations internes et suivi des dossiers clients.',
        'Support à la direction et gestion des relations fournisseurs et partenaires.'
      ]
    },
    {
      role: 'Assistante de Direction',
      company: 'MAYA PRINT',
      location: 'Grand Casablanca, Maroc',
      period: 'Jan 2022 - Mar 2025 · 3 ans 3 mois',
      description: [
        'Assistance de la direction générale dans la gestion quotidienne de l\'entreprise.',
        'Organisation des réunions, gestion de l\'agenda et des correspondances.',
        'Coordination administrative et suivi des projets internes.'
      ]
    },
    {
      role: 'Agente Back Office et Facturation',
      company: 'DMA-Michelin',
      location: 'Grand Casablanca, Maroc',
      period: 'Fév 2021 - Juil 2021 · 6 mois',
      description: [
        'Traitement et gestion des opérations de facturation.',
        'Support aux équipes commerciales et administratives.',
        'Suivi et contrôle des dossiers back office.'
      ]
    },
    {
      role: 'Département Terminal Voiturier (Stage)',
      company: 'Marsa Maroc',
      location: 'Casablanca-Settat, Maroc',
      period: 'Mar 2020 - Avr 2020 · 2 mois',
      description: [
        'Découverte des opérations portuaires liées au terminal voiturier.',
        'Participation au suivi administratif des flux de véhicules.'
      ]
    },
    {
      role: 'Agente de Facturation (Stage)',
      company: 'Promedstore Imaging',
      location: 'Casablanca, Maroc',
      period: 'Fév 2017 - Mar 2017 · 2 mois',
      description: [
        'Traitement des factures et suivi des règlements clients.',
        'Appui à l\'équipe comptable et administrative.'
      ]
    }
  ];

  return (
    <Section id="experience" title="Expérience Professionnelle">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-accent before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white  bg-primary dark:bg-accent text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 absolute left-0 md:left-1/2 -ml-5 md:ml-0">
                <Briefcase size={16} />
              </div>
              
              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-14 md:ml-0 glass-card p-6">
                <div className="flex items-center space-x-2 text-sm text-accent font-medium mb-2">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
                <h4 className="font-bold text-lg text-slate-900 text-slate-900">{exp.role}</h4>
                <div className="text-primary font-medium mb-4">{exp.company} <span className="text-slate-500 text-sm">| {exp.location}</span></div>
                <ul className="list-disc list-inside text-slate-700 space-y-2 text-sm">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;

