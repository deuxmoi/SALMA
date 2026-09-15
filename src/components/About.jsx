import React from 'react';
import Section from './Section';
import { User, MapPin, Mail, Calendar } from 'lucide-react';
import chefDeProjetImg from '../assets/Chef-de-projet.png';

const About = () => {
  const details = [
    { icon: <User className="text-primary dark:text-accent" size={20} />, label: 'Nom', value: 'Salma Joua' },
    { icon: <MapPin className="text-primary dark:text-accent" size={20} />, label: 'Localisation', value: 'Casablanca, Maroc' },
    { icon: <Mail className="text-primary dark:text-accent" size={20} />, label: 'Email', value: 'salmaa.joua@gmail.com' },
  ];

  return (
    <Section id="about" title="À propos de moi" className="bg-white/50 ">
      <div className="grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5 relative">
          <div className="absolute inset-0 bg-primary/10 dark:bg-accent/10 transform -skew-x-6 rounded-3xl"></div>
          <img
            src={chefDeProjetImg}
            alt="Chef de Projet"
            className="rounded-2xl shadow-xl relative z-10 w-full h-auto object-cover border-4 border-white "
          />
          <div className="glass-card absolute -bottom-6 -right-6 p-4 z-20 hidden md:block">
            <p className="text-3xl font-bold text-primary dark:text-accent text-center">100%</p>
            <p className="text-sm text-slate-700 font-medium">Engagement</p>
          </div>
        </div>

        <div className="md:col-span-7">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Chef de Projet Passionnée
          </h3>
          <p className="text-slate-700 mb-8 leading-relaxed">
            Passionnée par le marketing opérationnel et la création d'expériences uniques, je pilote des projets événementiels et publicitaires d'envergure. De la conception créative jusqu'au déploiement sur le terrain (scénographie, régie technique, booking d'artistes, habillage et signalétique), je transforme chaque concept en une expérience mémorable.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {details.map((detail, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 glass rounded-lg">
                <div className="w-10 h-10 rounded-full bg-slate-100  flex items-center justify-center flex-shrink-0">
                  {detail.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-600">{detail.label}</p>
                  <p className="text-sm font-semibold text-slate-900 text-slate-900 truncate w-40 sm:w-auto" title={detail.value}>{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;

