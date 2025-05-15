
import React from 'react';

const ProblemSection = () => {
  return (
    <div className="bg-impacto-darkgray py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 text-center">
            <span className="inline-block text-3xl mb-2">📢</span>
            <h3 className="text-2xl md:text-3xl font-military text-white">
              Você se sente desorientado no campo de batalha da vida?
            </h3>
          </div>
          
          <div className="space-y-5 text-xl text-gray-300 mb-10">
            <p className="font-military">A fé parece uma armadura pesada demais?</p>
            <p className="font-military">Está operando sem um plano de ataque claro?</p>
            <p className="font-military">Seu potencial está adormecido, esperando o chamado?</p>
          </div>
          
          <div className="mt-12 border-t border-b border-impacto-red py-6">
            <p className="text-2xl md:text-3xl font-stencil text-impacto-gold">
              ⚔️ Chega de viver como recruta. Deus te chamou para ser GENERAL do seu destino.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
