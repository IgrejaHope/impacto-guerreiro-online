
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Shield } from 'lucide-react';

const EnrollmentForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    church: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send this data to your backend or payment processor
    console.log('Form submitted:', formData);
    
    toast({
      title: "Inscrição Recebida!",
      description: "Você será redirecionado para a página de pagamento em instantes.",
      duration: 5000,
    });
    
    // Simulate redirect to payment page
    setTimeout(() => {
      alert('Esta é uma simulação. Aqui você seria redirecionado para a página de pagamento.');
    }, 2000);
  };
  
  return (
    <div id="enrollment" className="bg-impacto-black py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-impacto-darkgray rounded-lg shadow-xl overflow-hidden">
          <div className="bg-impacto-red p-6 text-center">
            <h2 className="text-2xl md:text-3xl font-stencil text-white">
              ALISTE-SE NO TREINAMENTO IMPACTO
            </h2>
            <p className="mt-2 text-white/90">
              Investimento: <span className="font-bold">R$150,00</span> por pessoa
            </p>
          </div>
          
          <div className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-military">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-impacto-black border border-impacto-gray text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-impacto-red"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-military">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-impacto-black border border-impacto-gray text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-impacto-red"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2 font-military">
                  Telefone (WhatsApp)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-impacto-black border border-impacto-gray text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-impacto-red"
                  placeholder="(00) 00000-0000"
                />
              </div>
              
              <div>
                <label htmlFor="church" className="block text-gray-300 mb-2 font-military">
                  Igreja (Opcional)
                </label>
                <input
                  type="text"
                  id="church"
                  name="church"
                  value={formData.church}
                  onChange={handleChange}
                  className="w-full bg-impacto-black border border-impacto-gray text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-impacto-red"
                  placeholder="Nome da sua igreja"
                />
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full impacto-button-glow text-xl"
                >
                  <Shield className="w-6 h-6" /> GARANTIR MINHA VAGA AGORA!
                </button>
              </div>
            </form>
            
            <div className="mt-8 text-center text-gray-400 text-sm">
              <p>Ao se inscrever, você concorda com os termos e condições do treinamento.</p>
              <p className="mt-2">Pagamento 100% seguro. Garantia de 7 dias.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentForm;
