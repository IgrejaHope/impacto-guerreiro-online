
import React from 'react';
import { Shield } from 'lucide-react';

const CTASection = () => {
  const scrollToEnrollment = () => {
    const element = document.getElementById('enrollment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-impacto-red py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-stencil text-white mb-6">
            🔥 Última Chamada: ALISTE-SE AGORA E INICIE SUA TRANSFORMAÇÃO!
          </h2>
          
          <p className="text-xl text-white mb-8">
            🚨 Vagas Limitadas. Bônus Exclusivo para os 50 primeiros inscritos!
          </p>
          
          <button 
            onClick={scrollToEnrollment}
            className="bg-white hover:bg-gray-100 text-impacto-red text-xl font-military font-bold py-4 px-8 rounded-md shadow-md hover:shadow-lg transition-all duration-300 uppercase tracking-wider flex items-center justify-center gap-2 mx-auto"
          >
            <Shield className="w-6 h-6" /> QUERO ME TORNAR UM GUERREIRO DE CRISTO!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
