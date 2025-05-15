import React from 'react';
const SolutionSection = () => {
  return <div className="section-container bg-gradient-to-b from-impacto-darkgray to-impacto-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-3xl mb-3">🎯</span>
            <h2 className="section-title">
              Alistamento Aberto: Sua Ascensão ao Patamar de Guerreiro de Cristo Começa AGORA!
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img alt="Transformação Impacto" className="rounded-md shadow-lg border-2 border-impacto-gray" src="https://igrejahope.com.br/wp-content/uploads/2025/05/469449130_18266193502268388_5369691821439303134_n.jpg" />
            </div>
            
            <div className="md:w-1/2">
              <p className="text-lg text-gray-200 mb-6">
                IMPACTO é sua convocação divina. Um treinamento prático e espiritual que 
                ativa propósito, disciplina e fé poderosa em sua vida. Junte-se a milhares 
                que romperam com a mediocridade e hoje vivem com coragem, direção e poder.
              </p>
              
              <div className="bg-impacto-darkgray p-6 rounded-md border border-impacto-red">
                <p className="text-xl font-military text-white mb-2">
                  "O IMPACTO não é apenas um treinamento, é uma convocação para a linha de frente do Exército de Cristo."
                </p>
                <p className="text-right text-impacto-bronze italic">- Cesar Signoretti Jr.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default SolutionSection;