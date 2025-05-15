
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
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would normally send this data to your backend or payment processor
    console.log('Form submitted:', formData);
    toast({
      title: "Inscrição Recebida!",
      description: "Você será redirecionado para a página de pagamento em instantes.",
      duration: 5000
    });

    // Simulate redirect to payment page
    setTimeout(() => {
      alert('Esta é uma simulação. Aqui você seria redirecionado para a página de pagamento.');
    }, 2000);
  };

  return (
    <section id="enrollment" className="section-container bg-impacto-darkgray py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <Shield className="w-12 h-12 mx-auto text-impacto-red mb-3" />
            <h2 className="text-3xl font-military text-impacto-gold mb-2">
              Inscreva-se Agora
            </h2>
            <p className="text-gray-300">
              Preencha o formulário abaixo para garantir sua vaga no treinamento IMPACTO
            </p>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="bg-impacto-black p-8 rounded-lg border border-impacto-gray shadow-xl"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-military text-impacto-bronze mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-impacto-blackgray border border-impacto-gray rounded-md text-white focus:outline-none focus:ring-2 focus:ring-impacto-red"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-military text-impacto-bronze mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-impacto-blackgray border border-impacto-gray rounded-md text-white focus:outline-none focus:ring-2 focus:ring-impacto-red"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-military text-impacto-bronze mb-1">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-impacto-blackgray border border-impacto-gray rounded-md text-white focus:outline-none focus:ring-2 focus:ring-impacto-red"
                />
              </div>
              
              <div>
                <label htmlFor="church" className="block text-sm font-military text-impacto-bronze mb-1">
                  Igreja (opcional)
                </label>
                <input
                  type="text"
                  id="church"
                  name="church"
                  value={formData.church}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-impacto-blackgray border border-impacto-gray rounded-md text-white focus:outline-none focus:ring-2 focus:ring-impacto-red"
                />
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full py-4 bg-impacto-red hover:bg-red-700 text-white font-military text-lg rounded-md transition duration-200 flex items-center justify-center"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  GARANTIR MINHA VAGA
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentForm;
