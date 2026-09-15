import React, { useState, useRef } from 'react';
import Section from './Section';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch('https://formsubmit.co/ajax/salmaajoua@gmail.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        formRef.current.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section id="contact" title="Contactez-moi">
      <div className="grid md:grid-cols-5 gap-10">

        <div className="md:col-span-2 space-y-6">
          <h3 className="text-2xl font-bold text-slate-900 text-slate-900 mb-4">Discutons de votre prochain projet.</h3>
          <p className="text-slate-700 mb-8">
            N'hésitez pas à me contacter pour des collaborations, des opportunités professionnelles ou simplement pour échanger. Je suis ouverte à toute discussion sur de nouveaux projets et idées créatives.
          </p>

          <div className="space-y-4">
            <a href="mailto:salmaa.joua@gmail.com" className="flex items-center p-4 glass-card group hover:border-primary dark:hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-primary/10 dark:bg-accent/10 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <Mail className="text-primary dark:text-accent" size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-600">Envoyer un e-mail</p>
                <p className="font-semibold text-slate-900 text-slate-900">salmaa.joua@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center p-4 glass-card">
              <div className="w-12 h-12 bg-primary/10 dark:bg-accent/10 rounded-full flex items-center justify-center mr-4">
                <MapPin className="text-primary dark:text-accent" size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-600">Localisation</p>
                <p className="font-semibold text-slate-900 text-slate-900">Casablanca, Maroc</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          {status === 'success' ? (
            <div className="glass-card p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
              <CheckCircle className="text-green-500" size={64} />
              <h3 className="text-2xl font-bold text-slate-900 text-slate-900 mt-6 mb-3">Message envoyé !</h3>
              <p className="text-slate-700 mb-6">
                Merci de m'avoir contactée. Je vous répondrai dans les plus brefs délais.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="btn-primary"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8">
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="Nouveau message depuis mon portfolio" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_replyto" id="_replyto" />

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 text-slate-600 mb-2">Votre Nom</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20   dark:focus:border-accent dark:focus:ring-accent/20 outline-none transition-all text-slate-900"
                    placeholder="Ex: SALMA JOUA"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 text-slate-600 mb-2">Votre Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    onChange={(e) => { document.getElementById('_replyto').value = e.target.value; }}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20   dark:focus:border-accent dark:focus:ring-accent/20 outline-none transition-all text-slate-900"
                    placeholder="Ex: salma.joua@gmail.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 text-slate-600 mb-2">Objet</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20   dark:focus:border-accent dark:focus:ring-accent/20 outline-none transition-all text-slate-900"
                  placeholder="Ex: Proposition de projet"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 text-slate-600 mb-2">Votre Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20   dark:focus:border-accent dark:focus:ring-accent/20 outline-none transition-all text-slate-900 resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm">
                  <AlertCircle size={18} />
                  <span>Une erreur est survenue. Veuillez réessayer.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>Envoi en cours...</>
                ) : (
                  <>Envoyer le message <Send size={18} className="ml-2" /></>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </Section>
  );
};

export default Contact;

