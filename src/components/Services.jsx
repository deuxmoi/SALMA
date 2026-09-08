import React from 'react';
import Section from './Section';
import { FolderKanban, Users, MessageSquare, ClipboardCheck, BarChart3, ShieldCheck } from 'lucide-react';

const Services = () => {
  const services = [
    { title: 'Gestion de Projet Publicitaire', icon: <FolderKanban size={32} />, description: 'Pilotage complet de vos projets de communication, du brief client initial jusqu\'au livrable final, en passant par l\'estimation et le planning.' },
    { title: "Organisation d'Événements & Gestion Artistique", icon: <Users size={32} />, description: "Sélection, négociation et accompagnement des artistes, animateurs, traiteurs et intervenants pour vos événements clé en main." },
    { title: "Coordination Équipes & Prestataires", icon: <MessageSquare size={32} />, description: "Interface centrale entre le client, l'équipe créative (graphistes/designers), les imprimeurs et les équipes de déploiement." },
    { title: 'Campagnes Marketing & Publicité', icon: <ClipboardCheck size={32} />, description: "Élaboration et exécution de campagnes publicitaires percutantes pour valoriser l'image et l'impact de votre marque." },
    { title: 'Contrôle Qualité & Suivi Terrain', icon: <BarChart3 size={32} />, description: 'Supervision rigoureuse des rendus visuels, respect de la charte graphique et validation technique sur le terrain.' },
    { title: 'Relation Client & Conseil Stratégique', icon: <ShieldCheck size={32} />, description: 'Compréhension approfondie des besoins clients, conseil sur-mesure en supports de communication et suivi personnalisé de chaque opération.' },
  ];

return (
  <Section id="services" title="Services Proposés" className="bg-white/50 ">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <div key={index} className="glass p-8 rounded-2xl group hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 dark:hover:bg-primary-dark">
          <div className="text-primary dark:text-accent group-hover:text-white mb-6 transition-colors duration-300">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-slate-900 text-slate-900 group-hover:text-white mb-3 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-slate-700 group-hover:text-slate-200 transition-colors duration-300">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </Section>
);
};

export default Services;

