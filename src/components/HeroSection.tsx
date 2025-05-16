
import React from 'react';
import { Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-impacto-black/90 via-impacto-black/80 to-impacto-black"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10 text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="https://igrejahope.com.br/wp-content/uploads/2025/05/logoempatcat.png" 
            alt="Logo Impacto" 
            className="h-28 mx-auto"
          />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-stencil text-white mb-6 leading-tight tracking-wider">
            IMPACTO: Prepare-se para o Exército de Cristo!
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8 font-military">
            <span className="inline-block">🛡️</span> Desenvolva a mente, o espírito e a disciplina necessários para revolucionar sua geração.
          </h2>
          
          <a 
            href="https://pay.kiwify.com.br/JR6ebBr"
            target="_blank" 
            rel="noopener noreferrer"
            className="impacto-button-glow text-sm md:text-lg mt-8 mx-auto inline-flex items-center justify-center"
          >
            <Shield className="w-5 h-5" /> ALISTE-SE AGORA NO TREINAMENTO IMPACTO!
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
