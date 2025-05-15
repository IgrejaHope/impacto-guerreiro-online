import React from 'react';
const TrainingSection = () => {
  return <div className="bg-gradient-to-b from-impacto-black to-impacto-darkgray">
      <div className="section-container">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-3xl mb-3">📚</span>
              <h2 className="section-title">Como funciona o IMPACTO?</h2>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="bg-impacto-darkgray p-6 rounded-md border border-impacto-gray">
                  <h3 className="text-xl font-military text-impacto-gold mb-4">
                    Um programa transformador dividido em módulos práticos:
                  </h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-impacto-red font-bold">✓</span>
                      <span>Ensinos bíblicos estratégicos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-impacto-red font-bold">✓</span>
                      <span>Disciplina pessoal com aplicação diária</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-impacto-red font-bold">✓</span>
                      <span>Exercícios espirituais e mentoria tática</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-impacto-red font-bold">✓</span>
                      <span>Acesso a uma comunidade de guerreiros cristãos</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-impacto-gray">
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                      <div>
                        <span className="text-gray-400">📅 Duração:</span>
                        <p className="font-military text-white">8 Semanas de Treinamento Intensivo</p>
                      </div>
                      <div>
                        <span className="text-gray-400">🌐 Formato:</span>
                        <p className="font-military text-white">100% Online com Suporte</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <img alt="Treinamento Tático" className="rounded-md shadow-lg border-2 border-impacto-gray" src="https://igrejahope.com.br/wp-content/uploads/2025/05/Design-sem-nome.jpg" />
                
                <div className="mt-6 bg-impacto-red p-4 rounded-md">
                  <p className="text-white font-military text-center text-lg">
                    "A batalha é real. Sua preparação deve ser ainda mais."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default TrainingSection;