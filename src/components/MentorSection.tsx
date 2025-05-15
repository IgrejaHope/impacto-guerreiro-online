
import React from 'react';

const MentorSection = () => {
  return (
    <div className="section-container bg-impacto-darkgray">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-3xl mb-3">👤</span>
            <h2 className="section-title">Quem está no comando?</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-2/5">
              <div className="relative">
                <div className="absolute inset-0 -m-3 bg-impacto-red opacity-20 rounded-lg transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80" 
                  alt="Cesar Signoretti Jr." 
                  className="rounded-lg shadow-lg relative z-10 border-2 border-impacto-gray"
                />
              </div>
            </div>
            
            <div className="md:w-3/5">
              <h3 className="text-2xl font-military text-impacto-gold mb-4">
                Cesar Signoretti Jr.
              </h3>
              
              <p className="text-gray-200 mb-6">
                Esposo, pai, faixa preta, mestre em liderança cristã e fundador do IMPACTO. 
                Com mais de 3.000 vidas transformadas, sua missão é forjar guerreiros para a 
                Glória de Deus.
              </p>
              
              <div className="bg-impacto-black p-5 rounded-md border border-impacto-gray">
                <h4 className="text-lg font-military text-impacto-bronze mb-3">
                  Certificações e Credenciais:
                </h4>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-impacto-red rounded-full"></span>
                    <span>RHEMA BRASIL</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-impacto-red rounded-full"></span>
                    <span>Coaching e Inteligência Emocional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-impacto-red rounded-full"></span>
                    <span>Krav Maga / Jiu Jitsu / Taekwondo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-impacto-red rounded-full"></span>
                    <span>The Napoleon Hill Foundation</span>
                  </li>
                  <li className="flex items-center gap-2 sm:col-span-2">
                    <span className="w-2 h-2 bg-impacto-red rounded-full"></span>
                    <span>Fundador da Old Church e do Instituto IMPACTO</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorSection;
