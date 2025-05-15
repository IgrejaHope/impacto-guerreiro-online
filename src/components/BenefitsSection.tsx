
import React from 'react';
import { Brain, Eye, Award, Flag, Leaf } from 'lucide-react';

const BenefitItem = ({ icon: Icon, title, description }: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="benefit-card">
      <div className="flex items-start gap-4">
        <div className="bg-impacto-red p-3 rounded-full">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-military text-impacto-gold mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "🧠 Comando das Escolhas",
      description: "Decida com sabedoria, elimine o "dedo podre" e tome o controle de sua vida."
    },
    {
      icon: Eye,
      title: "🔭 Visão de Batalha",
      description: "Propósito claro, mente alinhada com o céu para enxergar além do campo de batalha."
    },
    {
      icon: Award,
      title: "🥋 Disciplina de Ferro",
      description: "Supere a procrastinação com hábitos espirituais e práticos que transformam seu caráter."
    },
    {
      icon: Flag,
      title: "🔥 Fé Inabalável",
      description: "Seja guiado pelo Espírito em cada missão, construindo uma fé à prova de crises."
    },
    {
      icon: Brain,
      title: "💪 Resiliência Tática",
      description: "Vire provações em plataforma de crescimento, tornando-se imbatível nas adversidades."
    },
    {
      icon: Leaf,
      title: "🌿 Vida Abundante",
      description: "Colha frutos em todas as áreas: família, finanças, ministério e propósito."
    },
    {
      icon: Flag,
      title: "🌎 Legado de Impacto",
      description: "Seja inspiração para sua geração, deixando uma marca eterna no Reino."
    }
  ];

  return (
    <div className="section-container bg-impacto-black relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-title mb-12">
          Seu Arsenal de Vitória
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
